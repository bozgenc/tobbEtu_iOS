import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get('window');

export default class OgrenciDetayDersler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKisi: props.route.params.selectedKisi,
            dersler: props.route.params.selectedKisi.aldigiDersler,
        }
    }

    componentDidMount() {
        var today = new Date();
        var day = today.getDay();
        this.setState({gun: day})
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <View>
                    <Header style = {{backgroundColor: 'white'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Ogrenciler')}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    ⭠
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>profil</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 4.3, marginRight: 10, backgroundColor: '#faf8f8'}}>
                    <FlatList
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.dersKodu}
                        data = {this.state.dersler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {console.log(item.ad)}}
                            >
                                <View flexDirection = "row" style = {styles.arrayItem}>
                                    <Text style = {styles.textStyle}>{item.dersKodu} {":"} </Text>
                                    <Text style = {styles.textStyle}>{item.ad} </Text>
                                </View>
                            </TouchableOpacity>
                        )}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    arrayItem: {
        marginTop: 8,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 5,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    textStyle: {
        marginTop: 5,
        paddingVertical: 5,
        marginLeft: 2,
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium'
    },
});
