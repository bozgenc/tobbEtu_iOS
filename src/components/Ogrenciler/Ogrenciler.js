import React, { Component } from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import ogrenciler from '../Veriler/ogrenciler.json'
import OgrenciDetayBilgiler from "../OgrencilerDetay/OgrenciDetayBilgiler";
import {SearchBar} from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

var screen = Dimensions.get('window');
var selectedKisi = {
    ad_soyad : "",
    no: "",
    aldigiDersler: [],
    sinif: "",
    bolum: "",
}

export default class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tumOgrenciler: [],
            tumOgrencilerBackup: [],
            progressPermission: false,
            searchingfor: "",
            filtered: "",
        }
    }

    componentDidMount = async () => {
        var firstTimeOgrenciler = await AsyncStorage.getItem("dersler");
        if(firstTimeOgrenciler == "true") {
            AsyncStorage.setItem("ogrenciler", "false");
            Alert.alert(
                "Bilgilendirme",
                "Arama yaparken  öğrenci adı, bölüm ya da öğrenci numarasını kullanabilirsiniz.",
                [
                    { text: "Tamam", onPress: () => console.log("Öğrenci listesi bilgilendirme")}
                ],
                { cancelable: false }
            );
        }
        var jsonData = ogrenciler;
        var ogrencilerList = jsonData.ogrenciler.map(function(item) {
            return {
                ad_soyad: item.ad_soyad,
                bolum: item.bolum,
                sinif: item.sinif,
                aldigiDersler: item.aldigiDersler,
                no: item.no,
            };
        });

        this.setState({tumOgrenciler: ogrencilerList, tumOgrencilerBackup: ogrencilerList})
    }

    setData = (item) => {
        selectedKisi.ad_soyad = item.ad_soyad;
        selectedKisi.no = item.no;
        selectedKisi.aldigiDersler = item.aldigiDersler;
        selectedKisi.bolum = item.bolum;
        selectedKisi.sinif = item.sinif;
    }

    static passSelectedKisi(){
        return selectedKisi;
    }

    onFilter = (text) => {
        this.setState({searchingFor: text})
        text = text.toLocaleUpperCase("TR");
        var textTurkceKarakter = text.replace(/s/g, "ş").replace(/i/g, "ı").replace(/c/g, "ç").replace(/u/g, "ü").replace(/g/g, "ğ").replace(/o/g, "ö");

        let updatedList = this.state.tumOgrencilerBackup.filter(function(item) {
            return item.ad_soyad.replace("İ", "I").toLocaleUpperCase().includes(text) || item.no.includes(text) || item.bolum.toLocaleUpperCase("TR").includes(text) || item.ad_soyad.toLocaleUpperCase().includes(textTurkceKarakter)
                || item.ad_soyad.toLocaleUpperCase().includes(text)
        })

        this.setState({
            tumOgrenciler: updatedList
        })
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Öğrenciler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <SearchBar placeholder=" Öğrenci Ara... " lightTheme round
                           containerStyle={{backgroundColor: '#faf8f8', width: screen.width, marginRight: 20}}
                           inputContainerStyle={{backgroundColor: '#e3dddd',}}
                           value={this.state.searchingFor}
                           onChangeText={(text) => {
                               this.onFilter(text);
                           }}
                           autoCorrect={false}
                />

                <View style = {{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginRight: 10,
                    height: screen.height,
                    backgroundColor: '#faf8f8'
                }}>
                    <FlatList
                        style = {{flex: 0}}
                        initialNumToRender={50}
                        directionalLockEnabled={true}
                        showsVerticalScrollIndicator={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.no + " " + item.bolum}
                        data={this.state.tumOgrenciler}
                        renderItem={({item}) =>  (
                            <TouchableOpacity
                                onPress={() => {
                                    this.setData(item);
                                    this.props.navigation.navigate('OgrenciDetayBilgiler')

                                }}
                            >
                                <View style={styles.arrayItem}>
                                    <Text style={styles.textStyle}>{item.ad_soyad} </Text>
                                    <Text style={styles.textStyle2}>{item.bolum} </Text>
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
        marginTop: 5,
        paddingVertical: 2,
        paddingHorizontal: 15,
        backgroundColor: '#efebeb',
        borderRadius: 10,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    textStyle: {
        marginTop: 5,
        marginLeft: 4,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyle2: {
        marginTop: 5,
        marginLeft: 4,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Thin',
        color: 'black'
    }
});
