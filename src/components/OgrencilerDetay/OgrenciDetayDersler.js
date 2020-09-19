import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get('window');
const selectedDers = {
    dersAdi: "",
    dersKodu: "",
    hangiSube: "",
    hocaAdi: "",
    baslamaSaati: [],
}

export default class OgrenciDetayDersler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKisi: props.route.params.selectedKisi,
            dersler: props.route.params.selectedKisi.aldigiDersler,
            progressPermission: false,
        }
    }

    componentDidMount() {
    }

    setDersBilgisi = (item) => {
        selectedDers.dersAdi = item.ad;
        selectedDers.dersKodu = item.dersKodu;
        selectedDers.hangiSube = item.baslamaSaati[0].charAt(item.baslamaSaati[0].lastIndexOf(",") - 1);
        selectedDers.baslamaSaati = item.baslamaSaati;
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
                                onPress={() => {
                                    this.props.navigation.popToTop();
                                }}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    {"<"}
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Dersler</Text>

                        <Right>
                            <Text style = {{marginTop: 10, fontSize: 13, fontFamily: "HelveticaNeue-Thin"}}>{this.state.selectedKisi.ad_soyad}</Text>
                        </Right>
                    </Header>
                </View>

                <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 4.3,
                    marginRight: 10,
                    marginTop: 10 ,
                    backgroundColor: '#faf8f8'}}
                >
                    <FlatList
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.dersKodu}
                        data = {this.state.dersler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {
                                  this.setDersBilgisi(item);
                                  this.props.navigation.navigate("DersDetay")

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
