import React, { Component } from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";
import {SearchBar} from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

var screen = Dimensions.get('window');
var selectedDers = { // dersin sayfasına gidebilmek için gerekli
    dersAdi: "",
    dersKodu: "",
    hangiSube: "",
    hocaAdi: "",
    baslamaSaati: [],
}

export default class Dersler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dersler: [],
            derslerBackup: [],
        }
    }

    componentDidMount = async () => {
        var firstTimeDersler = await AsyncStorage.getItem("dersler");
        if(firstTimeDersler == "true") {
            AsyncStorage.setItem("dersler", "false");
            Alert.alert(
                "Bilgilendirme",
                "Arama yaparken  ders adı, ders kodu ya da akademisyen isimlerini kullanabilirsiniz.",
                [
                    { text: "Tamam", onPress: () => console.log("Ders listesi bilgilendirme")}
                ],
                { cancelable: false }
            );
        }
        const data = veriler.createDersListesi()
        data.sort(function(a, b) {
            if(a.routes) return -1;
            if(b.routes) return 1;
            if(a.dersKodu.toLowerCase() < b.dersKodu.toLowerCase()) return -1;
            if(a.dersKodu.toLowerCase() > b.dersKodu.toLowerCase()) return 1;
            return 0;
        });
        this.setState({dersler: data, derslerBackup: data})
    }

    setDersBilgisi = (item) => {
        selectedDers.dersAdi = item.ad;
        selectedDers.dersKodu = item.dersKodu;
        selectedDers.hangiSube = item.hangiSube;
        selectedDers.baslamaSaati = item.baslamaSaati;
        selectedDers.hocaAdi = item.hoca_adi;
    }

    static passSelectedDers() {
        return selectedDers;
    }

    onFilter = (text) => {
        this.setState({searchingFor: text})
        text = text.toLocaleUpperCase("TR");
        var textTurkceKarakter = text.replace(/s/g, "ş").replace(/i/g, "ı").replace(/c/g, "ç").replace(/u/g, "ü").replace(/g/g, "ğ").replace(/o/g, "ö");

        let updatedList = this.state.derslerBackup.filter(function(item) {
            return item.ad.replace("İ", "I").toLocaleUpperCase().includes(text) || item.dersKodu.includes(text) || item.hoca_adi.toLocaleUpperCase("TR").includes(text) || item.ad.toLocaleUpperCase("TR").includes(text)

        })

        this.setState({
            dersler: updatedList
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Dersler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <SearchBar placeholder=" Ders Ara... " lightTheme round
                           containerStyle={{backgroundColor: '#faf8f8', width: screen.width, marginRight: 20}}
                           inputContainerStyle={{backgroundColor: '#e3dddd',}}
                           value={this.state.searchingFor}
                           onChangeText={(text) => {
                               this.onFilter(text);
                           }}
                           autoCorrect={false}
                />

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 4.3, marginRight: 10, backgroundColor: '#faf8f8'}}>
                    <FlatList
                        initialNumToRender={30}
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.dersKodu + " " + item.hangiSube}
                        data = {this.state.dersler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {
                                    this.setDersBilgisi(item);
                                    this.props.navigation.navigate('DersDetayNew');
                                }}
                            >
                                <View flexDirection = "column" style = {styles.arrayItem}>
                                    <Text style = {styles.textStyle}>{item.dersKodu + "-" + item.hangiSube }</Text>
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
        marginTop: 8,
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
