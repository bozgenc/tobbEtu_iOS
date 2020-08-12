import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get("window");

export default class Cumartesi extends Component {
    constructor() {
        super();
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        const saturday = [];
        saturday.push({name: "08.00\nKIZILAY,BAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "09.00\nBAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "09.50\nKIZILAY,BAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "10.45\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "11.00\nBAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "12.00\nBAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "12.30\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "13.45\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "14.00\nBAHÇELİEVLER  ➔  TOBB ETÜ"});
        saturday.push({name: "14.30\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "15.30\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "16.30\nTOBB ETÜ  ➔  BAHÇELİEVLER, KIZILAY"});
        saturday.push({name: "17.30\nTOBB ETÜ  ➔  BAHÇELİEVLER"});
        saturday.push({name: "18.40\nTOBB ETÜ  ➔  BAHÇELİEVLER"});

        this.setState({dataArray: saturday})
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "#faf8f8"}}>
                <View>
                    <Header style = {{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    ≡
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{
                            marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Servisler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginRight: 10,
                    backgroundColor: '#faf8f8'}}
                >
                    <FlatList
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.name}
                        data = {this.state.dataArray}
                        renderItem={({item}) => (
                            <View style = {styles.arrayItem}>
                                <Text style = {styles.textStyle}>{item.name} </Text>
                            </View>
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
        paddingHorizontal: 8,
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
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    }
});
