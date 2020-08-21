import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";
import OgrenciDetayBilgiler from "../OgrencilerDetay/OgrenciDetayBilgiler";

var screen = Dimensions.get('window');
var selectedKisi = {
    ad_soyad : "",
    no: "",
    aldigiDersler: [],
    sinif: "",
    bolum: "",
    hocaAdi: "",
}

export default class DersDetay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDers: props.route.params.selectedDers,
            hocaAdi: "",
            ogrencilerNumaraList: [],
            baslamaSaati: [],
            ogrenci: {},
            ogrencilerDetayliList: [],
            dersSaatleri: "",
            onScroll: false,
            fadeOut: new Animated.Value(1),
        }
    }

    componentDidMount() {
        let ders = veriler.getDers(this.state.selectedDers.dersKodu);
        this.setState({
            hocaAdi: ders.hoca_adi,
            ogrencilerNumaraList: ders.ogrenciList,
        }, () => {this.getDersiAlanOgrenciler();})
    }

    getDersiAlanOgrenciler() {
        var ogrenci = {};
        var temp = [];

        for(var i = 0; i < this.state.ogrencilerNumaraList.length; i++) {
            ogrenci = veriler.getOgrenciBilgisi(this.state.ogrencilerNumaraList[i].numara)
            temp.push(ogrenci);
        }

        this.setState({ogrencilerDetayliList: temp}, () => {
            this.getDersSaatleri();
        })
    }

    getDersSaatleri() {
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

    mapToString() {
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

    onScroll = (e) => {
        Animated.timing(this.state.fadeOut, {
            toValue : 0,
            duration: 300,
            useNativeDriver: true,
        }).start( () => {
            setTimeout(() => {
                if(!this.state.onScroll)
                    this.setState({onScroll: true})
            }, 450)
        });
    }

    onScrollBack = () => {
        Animated.timing(this.state.fadeOut, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            this.setState({onScroll: false})
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

    render() {
        let {fadeOut} = this.state
        return (
            <View style = {{flex: 1, backgroundColor: "#faf8f8"}}>
                <View>
                    <Header style = {{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    {"<"}
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>{this.state.selectedDers.dersKodu}</Text>

                        <Right>
                            <TouchableOpacity
                                onPress={ () => this.onScrollBack()}
                            >
                                <View style = {{height: this.state.onScroll ? 15 : 0}}>
                                    <Text style = {{fontSize: 13, fontFamily: "HelveticaNeue-Thin"}}>Başa Dön</Text>
                                </View>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                </View>

                <Animated.View style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginTop: 10,
                    marginRight: 10,
                    backgroundColor: '#faf8f8',
                    height: this.state.onScroll ? 0 : 250,
                    opacity: fadeOut,
                }}>
                    <View flexDirection="column" style={this.state.onScroll ? styles.viewStylePrimalOnScroll : styles.viewStylePrimal}>
                        <Text style={styles.textStyle2}>
                            Ders
                        </Text>
                        <Text style={styles.textStyle}>
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
                </Animated.View>

                <View style = {{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#faf8f8',
                    marginTop: this.state.onScroll ? 0 :10,
                    marginBottom: this.state.onScroll ? 0 :10,
                    height: this.state.onScroll ? 0 : 35
                }}
                >
                    <Text style = {styles.ogrencilerStyle}>
                        Öğrenciler
                    </Text>
                </View>

                <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginRight: 10,
                    backgroundColor: '#faf8f8',
                    borderRadius: 10,
                    borderTopWidth: 1,
                    borderTopColor: '#eceaea'
                }}>
                    <FlatList
                        onScroll={(e) => this.onScroll(e)}
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.no}
                        data = {this.state.ogrencilerDetayliList}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    this.setData(item);
                                    this.props.navigation.navigate('OgrenciDetayBilgiler')
                                }}
                            >
                                <View flexDirection = "column" style = {styles.viewStyle}>
                                    <Text style = {styles.textStyleListe}>{item.ad_soyad} </Text>
                                    <Text style = {styles.textStyleListe2}>{item.bolum} </Text>
                                </View>
                            </TouchableOpacity>
                        )}/>
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
        borderRadius: 10,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    viewStylePrimal: {
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 15,
        height: 250,
        width: screen.width * 96.6 / 100,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 5,
    },
    viewStylePrimalOnScroll: {
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 5,
        height: 0,
        width: screen.width * 96.6 / 100,
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
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyleListe2: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Thin',
        color: 'black',
    },
    ogrencilerStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B00D23',
        marginTop: 5,
    },
});
