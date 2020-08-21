import React, { Component } from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";

var screen = Dimensions.get('window');
var selectedDers = { // dersin sayfasına gidebilmek için gerekli
    dersAdi: "",
    dersKodu: "",
    hangiSube: "",
    hocaAdi: "",
    baslamaSaati: [],
}

export default class Derslerim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad_soyad: "",
            no: props.route.params.ogrenciNo,
            bolum: "",
            sinif: 0,
            aldigiDersler: [{
                ad: " ",
                dersKodu: "",
                hoca_adi: " ",
                hangiSube: 0,
                baslamaSaati: [" , , , ", ", , ,"]
            }],
            ad: "",
            soyad: "",
            progressPermission: false,
        }
    }

    componentDidMount() {
        const data = veriler.getOgrenciBilgisi(this.state.no)
        this.setState({
            ad_soyad: data.ad_soyad,
            bolum: data.bolum,
            sinif: data.sinif,
            aldigiDersler: data.aldigiDersler,
            ad: data.ad_soyad.substring(0, data.ad_soyad.lastIndexOf(" ")),
            soyad: data.ad_soyad.substring(data.ad_soyad.lastIndexOf(" ") + 1),
        })
    }

    setDersBilgisi = (item) => {
        selectedDers.dersAdi = item.ad;
        selectedDers.dersKodu = item.dersKodu;
        selectedDers.hangiSube = item.baslamaSaati[0].charAt(item.baslamaSaati[0].lastIndexOf(",") - 1);
        selectedDers.baslamaSaati = item.baslamaSaati;
        selectedDers.hocaAdi = item.hoca_adi;
    }

    static passSelectedDers() {
        return selectedDers;
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Derslerim</Text>

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
                    marginTop: 10,
                    backgroundColor: '#faf8f8',
                }}>
                    <FlatList
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.dersKodu}
                        data = {this.state.aldigiDersler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {
                                    this.setDersBilgisi(item);
                                    this.props.navigation.navigate('DersDetay')
                                }}
                            >
                                <View flexDirection = "column" style = {styles.arrayItem}>
                                    <Text style = {styles.textStyle}>{item.dersKodu} {item.baslamaSaati[0].charAt(item.baslamaSaati[0].lastIndexOf(",") - 1) != 0 ? "-" : ""} {item.baslamaSaati[0].charAt(item.baslamaSaati[0].lastIndexOf(",") - 1)}</Text>
                                    <Text style = {styles.textStyle2}>{item.ad} </Text>
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
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 10,
        height: 50,
        width: screen.width * 96.6 / 100,

    },
    textStyle: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    },
    textStyle2: {
        marginTop: 1,
        paddingVertical: 3,
        marginLeft: 2,
        fontSize: 15,
        fontFamily: 'HelveticaNeue-Thin'
    },
});
