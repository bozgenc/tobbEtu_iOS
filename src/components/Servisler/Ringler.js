import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

var screen = Dimensions.get("window");

export default class Ringler extends Component {
    constructor() {
        super();
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        const shuttles = [];

        shuttles.push({name: "08.30\nKIZILAY,BAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "08.40\nTOBB ETÜ   ➔  TOBB"});
        shuttles.push({name: "09.05\nBAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "10.00\nKIZILAY,BAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "10.35\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "10.45\nBAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "11.40\nTOBB ETÜ   ➔  KIZILAY"});
        shuttles.push({name: "12.00\nKIZILAY   ➔  TOBB ETÜ"});
        shuttles.push({name: "12.05\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "12.15\nBAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "12.25\nTOBB ETÜ   ➔  BAHÇELİEVLER,M. KÜTÜPHANE, KIZILAY"});
        shuttles.push({name: "12.45\nTOBB ETÜ   ➔   KIZILAY,BAHÇELİEVLER"});
        shuttles.push({name: "12.55\nTOBB ETÜ   ➔  BAHÇELİEVLER,M. KÜTÜPHANE, KIZILAY"});
        shuttles.push({name: "13.00\nKIZILAY   ➔  TOBB ETÜ"});
        shuttles.push({name: "13.00\nAKKÖPRÜ ANKAMALL   ➔  TOBB ETÜ"});
        shuttles.push({name: "13.20\nKIZILAY,M. KÜTÜPHANE, BAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "13.30\nTOBB ETÜ   ➔  KIZILAY"});
        shuttles.push({name: "13.30\nTOBB ETÜ  ➔  BAHÇELİEVLER, KIZILAY"});
        shuttles.push({name: "13.30\nTOBB ETÜ   ➔  AKKÖPRÜ"});
        shuttles.push({name: "14.05\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "14.15\nBAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "14.45\nTOBB ETÜ   ➔  SIHHİYE"});
        shuttles.push({name: "14.45\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "14.45\nTOBB ETÜ   ➔  KIZILAY"});
        shuttles.push({name: "14.45\nTOBB ETÜ   ➔  AKKÖPRÜ, ANNKAMALL"});
        shuttles.push({name: "14.50\nBAHÇELİEVLER   ➔  TOBB ETÜ"});
        shuttles.push({name: "15.45\nTOBB ETÜ   ➔  SIHHİYE"});
        shuttles.push({name: "15.45\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "15.45\nTOBB ETÜ   ➔  KIZILAY"});
        shuttles.push({name: "15.45\nTOBB ETÜ   ➔  ANKAMALL"});
        shuttles.push({name: "16.25\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "16.25\nTOBB ETÜ   ➔  ARMADA,M.KÜTÜPHANE,KIZILAY"});
        shuttles.push({name: "16.30\nBAHÇELİEVLER  ➔  TOBB ETÜ"});
        shuttles.push({name: "17.00\nTOBB ETÜ   ➔  BAHÇELİEVLER, KIZILAY"});
        shuttles.push({name: "18.00\nTOBB ETÜ   ➔  BAHÇELİEVLER"});
        shuttles.push({name: "17.00\nTOBB ETÜ   ➔  BAHÇELİEVLER, KIZILAY(Yüksek Lisanlar için)"});

        this.setState({dataArray: shuttles})
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
                        data={this.state.dataArray}
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
        width: screen.width * 96.6 / 100,
    },
    textStyle: {
        marginTop: 5,
        paddingVertical: 5,
        marginLeft: 2,
        fontSize: 12,
        fontFamily: 'HelveticaNeue-Medium'
    }
});
