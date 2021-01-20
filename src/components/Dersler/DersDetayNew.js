import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";
import OgrenciDetayBilgiler from "../OgrencilerDetay/OgrenciDetayBilgiler";
import AsyncStorage from '@react-native-community/async-storage';
import {SearchBar} from "react-native-elements";

var screen = Dimensions.get('window');
var selectedKisi = {
    ad_soyad : "",
    no: "",
    aldigiDersler: [],
    sinif: "",
    bolum: "",
    hocaAdi: "",
}

export default class DersDetayNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDers: props.route.params.selectedDers,
            hocaAdi: "",
            ogrencilerNumaraList: [],
            baslamaSaati: [],
            ogrenci: {},
            ogrencilerDetayliList: [],
            tumOgrencilerBackup: [],
            dersSaatleri: "",
            showOgrenci: false,
        }
    }

    componentDidMount() {
        //AsyncStorage.setItem("comingFromDersListesi", "true");
        let ders = veriler.getDers(this.state.selectedDers.dersKodu);
        var ogrenciListesiOnlyNumber = [];
        var temp = ders.ogrenciList;

        for(var i = 0; i < temp.length; i++) { // ders listesinde duplicate kayıtlar olmaması için
            if(!ogrenciListesiOnlyNumber.includes(temp[i].numara))
                ogrenciListesiOnlyNumber.push(temp[i].numara);
        }

        this.setState({
            hocaAdi: ders.hoca_adi,
            ogrencilerNumaraList: ogrenciListesiOnlyNumber,
        }, () => {this.getDersiAlanOgrenciler();})
    }

    getDersiAlanOgrenciler() { // numaralar listesinden öğrencinin detaylı bilgilerini çekme işlemi
        var ogrenci = {};
        var temp = [];

        for(var i = 0; i < this.state.ogrencilerNumaraList.length; i++) {
            ogrenci = veriler.getOgrenciBilgisi(this.state.ogrencilerNumaraList[i])
            if(!temp.includes(ogrenci))
                temp.push(ogrenci);
        }

        temp.sort(function(a, b) {
            if(a.routes) return -1;
            if(b.routes) return 1;
            if(a.ad_soyad.toLowerCase() < b.ad_soyad.toLowerCase()) return -1;
            if(a.ad_soyad.toLowerCase() > b.ad_soyad.toLowerCase()) return 1;
            return 0;
        });

        this.setState({ogrencilerDetayliList: temp, tumOgrencilerBackup:temp}, () => {
            this.getDersSaatleri();
        })
    }

    getDersSaatleri() { // öğrencinin detaylı bilgilerinden aldığı derslerin bilgilerini çekme
        var temp = [];
        for(var i = 0; i < this.state.ogrencilerDetayliList[0].aldigiDersler.length; i++) {
            if(this.state.ogrencilerDetayliList[0].aldigiDersler[i].dersKodu == this.state.selectedDers.dersKodu) {
                temp = this.state.ogrencilerDetayliList[0].aldigiDersler[i].baslamaSaati;
            }
        }

        this.setState({baslamaSaati: temp}, () => {
            this.mapToString();
        });
    }

    mapToString() { // ders bilgilerini sınıflandırma
        var finalStr = "";
        for(var i = 0; i < this.state.baslamaSaati.length; i++) {
            if(this.state.baslamaSaati != "") {
                var gun = this.state.baslamaSaati[i].substring(0, this.state.baslamaSaati[i].indexOf(","));
                var dersSaati = this.state.baslamaSaati[i].substring(this.state.baslamaSaati[i].indexOf(",") + 1, this.state.baslamaSaati[i].indexOf(",") + 6);
                var kacSaat = this.state.baslamaSaati[i].charAt(this.state.baslamaSaati[i].lastIndexOf(",") - 1);
                var hangiSinif = this.state.baslamaSaati[i].substring(this.state.baslamaSaati[i].lastIndexOf(",") + 1);
                var bitisSaati = (parseFloat(kacSaat) + parseFloat(dersSaati) - 0.1).toFixed(2);

                finalStr += gun + " " + dersSaati + " - " + bitisSaati + " (" + hangiSinif + ")" + "\n";
            }
        }
        this.setState({
            dersSaatleri: finalStr
        })
    }

    setData = (item) => {
        selectedKisi.ad_soyad = item.ad_soyad;
        selectedKisi.no = item.no;
        selectedKisi.aldigiDersler = item.aldigiDersler;
        selectedKisi.bolum = item.bolum;
        selectedKisi.sinif = item.sinif;
    }

    static passSelectedKisi() {
        return selectedKisi;
    }

    onFilter = (text) => {
        this.setState({searchingFor: text})
        text = text.toLocaleUpperCase("TR");
        var textTurkceKarakter = text.replace(/s/g, "ş").replace(/i/g, "ı").replace(/c/g, "ç").replace(/u/g, "ü").replace(/g/g, "ğ").replace(/o/g, "ö");

        let updatedList = this.state.tumOgrencilerBackup.filter(function(item) {
            return item.ad_soyad.replace("İ", "I").toLocaleUpperCase().includes(text) || item.bolum.toLocaleUpperCase("TR").includes(text) || item.no.includes(text) || item.ad_soyad.toLocaleUpperCase().includes(textTurkceKarakter)
                || item.ad_soyad.toLocaleUpperCase().includes(text)
        })

        this.setState({
            ogrencilerDetayliList: updatedList
        })
    }

    render() {
        if (this.state.showOgrenci) {
            return (
                <View style={{flex: 1, backgroundColor: "#faf8f8"}}>
                    <View>
                        <Header style={{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}}>
                            <Left>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={{color: "black"}}
                                >
                                    <Text style={{marginLeft: 10, fontSize: 45, color: '#B00D23'}}>
                                        {"‹"}
                                    </Text>
                                </TouchableOpacity>
                            </Left>

                            <Text style={{marginTop: 10, fontSize: 25, fontFamily: "Helvetica-Bold"}}>Şube
                                Listesi</Text>

                            <Right>
                                <TouchableOpacity
                                    onPress={() => this.setState({showOgrenci: false})}
                                >
                                    <View>
                                        <Text style={{fontSize: 13, fontFamily: "HelveticaNeue-Thin"}}> Bilgilere Dön  </Text>
                                    </View>
                                </TouchableOpacity>
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

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginLeft: 4.3,
                        marginRight: 10,
                        backgroundColor: '#faf8f8',
                        borderRadius: 10,
                        borderTopWidth: 1,
                        borderTopColor: '#eceaea',
                    }}>
                        <FlatList
                            style={{flex: 0}}
                            initialNumToRender={50}
                            directionalLockEnabled={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.no + " " + item.bolum }
                            data={this.state.ogrencilerDetayliList}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setData(item);
                                        this.props.navigation.navigate('OgrenciDetayBilgiler')
                                    }}
                                >
                                    <View flexDirection="column" style={styles.viewStyle}>
                                        <Text style={styles.textStyleListe}>{item.ad_soyad} </Text>
                                        <Text style={styles.textStyleListe2}>{item.bolum} </Text>
                                    </View>
                                </TouchableOpacity>
                            )}/>
                    </View>
                </View>
            )
        } else
            return (
                <View style={{flex: 1, backgroundColor: "#faf8f8"}}>
                    <View>
                        <Header style={{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}}>
                            <Left>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={{color: "black"}}
                                >
                                    <Text style={{marginLeft: 10, fontSize: 45, color: '#B00D23'}}>
                                        {"‹"}
                                    </Text>
                                </TouchableOpacity>
                            </Left>

                            <Text style={{marginTop: 10, fontSize: 25, fontFamily: "Helvetica-Bold"}}>Ders
                                Detayları</Text>

                            <Right>
                            </Right>
                        </Header>
                    </View>

                    <View style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginLeft: 4.3,
                        marginTop: 10,
                        marginRight: 10,
                        backgroundColor: '#faf8f8',
                        height: 250,
                    }}>
                        <View flexDirection="column" style={styles.viewStylePrimal}>
                            <Text style={styles.textStyle2}>
                                Ders
                            </Text>
                            <Text style={styles.textStyle}>
                                {this.state.selectedDers.dersKodu} {"\n"}
                                {this.state.selectedDers.dersAdi}
                            </Text>
                            <Text style={styles.textStyle2}>
                                Akademisyen
                            </Text>
                            <Text style={styles.textStyle}>
                                {this.state.hocaAdi}
                            </Text>
                            <Text style={styles.textStyle2}>
                                Şube
                            </Text>
                            <Text style={styles.textStyle}>
                                {this.state.selectedDers.hangiSube}
                            </Text>
                            <Text style={styles.textStyle2}>
                                Saatler ve Derslik
                            </Text>
                            <Text style={styles.textStyle}>
                                {this.state.dersSaatleri}
                            </Text>
                        </View>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            this.setState({showOgrenci: true})
                        }}>
                            <View style={{flex: 1, marginTop: 20, height: 20}}>
                                <Text style={{fontSize: 18, color: '#B00D23'}}>
                                    Öğrencileri Göster ({this.state.tumOgrencilerBackup.length})
                                </Text>
                            </View>
                        </TouchableOpacity>
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
    viewStylePrimal: {
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderRadius: 15,
        height: 250,
        width: screen.width * 96.6 / 100,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 5,
    },
    textStyle: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyle2: {
        paddingTop: 5,
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Thin',
        color: 'black',
    },
    textStyleListe: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyleListe2: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Thin',
        color: 'black',
    },
});
