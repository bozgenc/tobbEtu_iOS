import React, { Component } from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";
import AsyncStorage from "@react-native-community/async-storage";

var screen = Dimensions.get('window');
var selectedKisi = {
    ad_soyad : "",
    no: "",
    aldigiDersler: [],
    sinif: "",
    bolum: "",
}


export default class HizliErisim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hizliErisim: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        AsyncStorage.setItem("comingFromFavList", "true");
        this.handleRefresh();
        this.props.navigation.addListener('focus', () => {
            this.handleRefresh();
        });

    }

    receiveList = () => {
        return AsyncStorage.getItem('arkadasListesi')
            .then(req => JSON.parse(req))
            .then(json => this.setState({hizliErisim: json, refreshing: false}))
            .catch(error => console.log('error!'));
    }


    handleRefresh = () => {
        this.setState({
            refreshing: true
        }, () => {
            this.receiveList();
        })
    }

    deletePerson(item) {
        var temp = [];
        for(var i = 0; i < this.state.hizliErisim.length; i++) {
            if(item.no != this.state.hizliErisim[i].no)
                temp.push(this.state.hizliErisim[i]);
        }

        this.setState({hizliErisim: temp}, () => {
            return AsyncStorage.setItem('arkadasListesi', JSON.stringify(temp))
                .then(json => this.props.navigation.navigate('Fav.'))
                .catch(error => console.log('error'));
        });
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Arkadaşlar</Text>


                        <Right>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ArkadasEkle')}
                            >
                                <View>
                                    <Text style={{fontSize: 20, fontFamily: "HelveticaNeue-Thin"}}>Ekle</Text>
                                </View>
                            </TouchableOpacity>
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
                        initialNumToRender={20}
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.no + " " + item.bolum}
                        data = {this.state.hizliErisim}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {
                                    this.setData(item);
                                    this.props.navigation.navigate('OgrenciDetayBilgiler');
                                }}
                                onLongPress={() => {
                                    Alert.alert(
                                        "Silme ",
                                        "Seçilen kişiyi silmek istiyor musunuz?",
                                        [
                                            { text: "Evet", onPress: () => this.deletePerson(item)},
                                            { text: "Hayır", onPress: () => console.log("Dismissing!")}

                                        ],
                                        { cancelable: false }
                                    );
                                }}
                            >
                                <View flexDirection = "column" style = {styles.arrayItem}>
                                    <Text style = {styles.textStyle}>{item.ad_soyad}</Text>
                                    <Text style = {styles.textStyle2}>{item.bolum} </Text>
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
        fontSize: 13,
        fontFamily: 'HelveticaNeue-Thin'
    },
});
