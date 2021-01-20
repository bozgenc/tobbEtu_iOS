import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get("window");

export default class Servisler extends Component {
    constructor() {
        super();
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        const semt = [];
        semt.push({name: "100.YIL, ÇİĞDEM MAH."});semt.push({name:"ABİDİNPAŞA"});semt.push({name:"BAĞLICA"});semt.push({name:"BALGAT YURTKUR M. KÜTÜPHANE"});
        semt.push({name: "BATIKENT ATLANTİS"});semt.push({name: "BATIKENT ÇAKIRLAR"});semt.push({name: "BATIKENT İLK YERLEŞİM"});semt.push({name: "BATIKENT MESA"});
        semt.push({name: "BEYSUKENT ANGORA"});semt.push({name: "BİLKENT M. KEMAL"});semt.push({name: "BİRLİK MAH."});semt.push({name: "CEVİZLİDERE"});
        semt.push({name: "DEMETEVLER"});semt.push({name: "DİKİMEVİ, SIHHİYE"});semt.push({name: "DİKMEN"});semt.push({name: "DİKMEN ÖVEÇLER"});
        semt.push({name: "DİKMEN SİNAN CAD."});semt.push({name: "DİKMEN SOKULLU"});semt.push({name: "ELVANKENT ETİMESGUT"});semt.push({name: "ERYAMAN 1,2"});
        semt.push({name: "ERYAMAN 3,4,5"});semt.push({name: "ERYAMAN ŞEKER MAH."});semt.push({name: "ESAT DÖRTYOL"});semt.push({name: "ESAT SEYRAN"});semt.push({name: "ETLİK A. EĞLENCE"});
        semt.push({name: "ETLİK AYVALI"});semt.push({name: "GÖLBAŞI"});semt.push({name: "HOŞDERE"});semt.push({name: "KIRKKONAKLAR"});semt.push({name: "K.ÖREN, S.EVLER"});
        semt.push({name: "KAYAŞ-ANKAMALL"});semt.push({name: "KEÇİÖREN AKTEPE"});
        semt.push({name: "KEÇİÖREN ASFALT"});semt.push({name: "KEÇİÖREN SANATORYUM"});semt.push({name: "KIZILAY"});semt.push({name: "ORAN İLKER"});
        semt.push({name: "ORAN YILDIZ"});semt.push({name: "SERHAT"});semt.push({name: "SİNCAN"});semt.push({name: "ÜMİTKÖY"});semt.push({name: "YAPRACIK,YAŞAMKENT"});
        semt.push({name: "YENİMAHALLE"});semt.push({name: "BAHÇELİEVLER"});

        this.setState({dataArray: semt})
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Servisler</Text>

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
                    height: screen.height,
                    backgroundColor: '#faf8f8'}}
                >
                    <FlatList
                        style = {{flex: 0}}
                        initialNumToRender={this.state.dataArray.length}
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.name}
                        data = {this.state.dataArray}
                        renderItem={({item}) => (
                            <View style = {styles.arrayItem}>
                                <Text style = {styles.textStyle}>{item.name} </Text>
                            </View>
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
        borderRadius: 10,
        height: 50,
        width: screen.width * 96.6 / 100 ,
    },
    textStyle: {
        marginTop: 5,
        paddingVertical: 5,
        marginLeft: 2,
        fontFamily: 'HelveticaNeue-Medium'
    }
});
