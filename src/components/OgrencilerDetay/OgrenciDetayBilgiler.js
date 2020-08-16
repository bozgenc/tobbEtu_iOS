import React, { Component } from 'react';
import {StyleSheet, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get('window');

export default class OgrenciDetayBilgiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKisi: props.route.params.selectedKisi,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "#faf8f8"}}>
                <View>
                    <Header style = {{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.popToTop();
                                }}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    {"<"}
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Bilgiler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 4.3, marginRight: 10, backgroundColor: '#faf8f8'}}>
                    <View flexDirection = "column" style = {styles.viewStyleTop}>
                        <Text style = {styles.textStyle2}>
                            İsim: {" "}
                        </Text>
                        <Text style = {styles.textStyle}>
                            {this.state.selectedKisi.ad_soyad}
                        </Text>
                    </View>

                    <View flexDirection = "column" style = {styles.viewStyle}>
                        <Text style = {styles.textStyle2}>
                            Numara: {" "}
                        </Text>
                        <Text style = {styles.textStyle}>
                            {this.state.selectedKisi.no}
                        </Text>
                    </View>

                    <View flexDirection = "column" style = {styles.viewStyle}>
                        <Text style = {styles.textStyle2}>
                            Bölüm: {" "}
                        </Text>
                        <Text style = {styles.textStyle}>
                            {this.state.selectedKisi.bolum}
                        </Text>
                    </View>

                    <View flexDirection = "column" style = {styles.viewStyle}>
                        <Text style = {styles.textStyle2}>
                            Sınıf: {" "}
                        </Text>
                        <Text style = {styles.textStyle}>
                            {this.state.selectedKisi.sinif}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 5,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 5,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    viewStyleTop: {
        marginTop: 10,
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
        marginLeft: 2,
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyle2: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Thin',
        color: 'black',
    }
});
