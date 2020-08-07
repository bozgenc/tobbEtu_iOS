import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import ogrenciler from '../Veriler/ogrenciler.json'
import OgrenciDetayBilgiler from "../OgrencilerDetay/OgrenciDetayBilgiler";

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
        }
    }

    componentDidMount() {
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

        this.setState({tumOgrenciler: ogrencilerList})
    }

    static passSelectedKisi(){
        return selectedKisi;
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <View>
                    <Header style = {{backgroundColor: 'white'}} >
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>öğrenciler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 4.3, marginRight: 10, backgroundColor: '#faf8f8'}}>
                    <FlatList
                        directionalLockEnabled={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.no}
                        data={this.state.tumOgrenciler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    selectedKisi.ad_soyad = item.ad_soyad;
                                    selectedKisi.no = item.no;
                                    selectedKisi.aldigiDersler = item.aldigiDersler;
                                    selectedKisi.bolum = item.bolum;
                                    selectedKisi.sinif = item.sinif;
                                    this.props.navigation.navigate('OgrenciDetayBilgiler')}
                                }
                            >
                                <View style={styles.arrayItem}>
                                    <Text style={styles.textStyle}>{item.ad_soyad} </Text>
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
        marginLeft: 4,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    }
});
