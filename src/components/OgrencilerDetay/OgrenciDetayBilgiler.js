import React, { Component } from 'react';
import {StyleSheet, Dimensions, Text, TouchableOpacity, View, Alert,} from 'react-native';
import {Header, Left, Right} from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

var screen = Dimensions.get('window');

export default class OgrenciDetayBilgiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKisi: props.route.params.selectedKisi,
            comingFrom: props.route.params.comingFromDersList,
        }
    }

     componentDidMount = async () => {
        var firstTime = await AsyncStorage.getItem("firstTime");
        var comingFrom = await AsyncStorage.getItem("comingFromDersListesi");

        if( firstTime == "true" &&  comingFrom == "true") {
            AsyncStorage.setItem("firstTime", "false");
            AsyncStorage.setItem("comingFromDersListesi", "false");
            Alert.alert(
                "Bilgilendirme",
                "Ders şube listesi içerisinden bir öğrenci profiline ulaştığınızda sola kaydırarak öğrencinin ders programını görüntüleyebilirsiniz.\n\nAncak aldığı derslerin detaylarını görüntülemek için 'Tüm Öğrenciler' menüsünden öğrenci profiline erişmeniz gerekir.",
                [
                    { text: "OK", onPress: () => console.log("İlk bilgilendirme")}
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "#faf8f8"}}>
                <View>
                    <Header style = {{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => {
                                    if(this.state.comingFrom)
                                        this.props.navigation.goBack();
                                    else
                                        this.props.navigation.popToTop();
                                }}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 45, color: '#B00D23'}}>
                                    {"‹"}
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
        borderRadius: 10,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    viewStyleTop: {
        marginTop: 10,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderRadius: 10,
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
