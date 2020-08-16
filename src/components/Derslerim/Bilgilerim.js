import React, {Component} from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";

var screen = Dimensions.get('window');

export default class Bilgilerim extends Component {
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
        }
    }

    componentDidMount() {
        const data = veriler.getOgrenciBilgisi(this.state.no);

        this.setState({
            ad_soyad: data.ad_soyad,
            bolum: data.bolum,
            sinif: data.sinif,
            aldigiDersler: data.aldigiDersler,
            ad: data.ad_soyad.substring(0, data.ad_soyad.lastIndexOf(" ")),
            soyad: data.ad_soyad.substring(data.ad_soyad.lastIndexOf(" ") + 1),
        })
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: "#faf8f8", }}>
                <View>
                    <Header style={{backgroundColor: 'white', borderBottomWidth: 2, borderBottomColor: '#f18a21'}}>
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{color: "black"}}
                            >
                                <Text style={{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    ≡
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style={{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Bilgilerim</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginRight: 10,
                    backgroundColor: '#faf8f8'
                }}>
                    <View flexDirection="column" style={styles.viewStyleTop}>
                        <Text style={styles.textStyle2}>
                            İsim
                        </Text>
                        <Text style={styles.textStyle}>
                            {this.state.ad_soyad}
                        </Text>
                    </View>

                    <View flexDirection="column" style={styles.viewStyle}>
                        <Text style={styles.textStyle2}>
                            Numara
                        </Text>
                        <Text style={styles.textStyle}>
                            {this.state.no}
                        </Text>
                    </View>

                    <View flexDirection="column" style={styles.viewStyle}>
                        <Text style={styles.textStyle2}>
                            Bölüm
                        </Text>
                        <Text style={styles.textStyle}>
                            {this.state.bolum}
                        </Text>
                    </View>

                    <View flexDirection="column" style={styles.viewStyle}>
                        <Text style={styles.textStyle2}>
                            Sınıf
                        </Text>
                        <Text style={styles.textStyle}>
                            {this.state.sinif}
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
