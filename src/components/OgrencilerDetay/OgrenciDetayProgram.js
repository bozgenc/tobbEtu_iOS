import React, { Component } from 'react';
import {StyleSheet, Dimensions, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {Header, Left, Right} from "native-base";
import ProgramGenerator from "../Utils/ProgramGenerator";

var screen = Dimensions.get('window');

export default class OgrenciDetayProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKisi: props.route.params.selectedKisi,
            aldigiDersler: props.route.params.selectedKisi.aldigiDersler,
            table: this.createArray(),
            ad: "",
            soyad: "",
            gun: -1,
            ad_soyad: "",
            no: props.route.params.ogrenciNo,
            bolum: "",
            sinif: 0,
        }
    }

    componentDidMount() {
        var today = new Date();
        var day = today.getDay();
        const data = this.state.selectedKisi;

        this.setState({
            ad_soyad: data.ad_soyad,
            bolum: data.bolum,
            sinif: data.sinif,
            aldigiDersler: data.aldigiDersler,
            ad: data.ad_soyad.substring(0, data.ad_soyad.lastIndexOf(" ")),
            soyad: data.ad_soyad.substring(data.ad_soyad.lastIndexOf(" ") + 1),
            gun: day,
        }, () => {this.derslerToTabloMapping();})
    }

    createArray() {
        var tablo = new Array(14);
        for (var i = 0; i < tablo.length; i++) {
            tablo[i] = new Array(6);
        }
        return tablo;
    }

    derslerToTabloMapping() {
        var tablo = new Array(14);
        for (var i = 0; i < tablo.length; i++) {
            tablo[i] = new Array(6);
        }

        const data = this.state.aldigiDersler;
        tablo = ProgramGenerator.createTablo(data);
        this.setState({table: tablo,})
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <View>
                    <Header style = {{backgroundColor: 'white'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.popToTop()}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    {"<"}
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Program</Text>

                        <Right>
                            <View>
                                <Text style = {{fontSize: 13, fontFamily: "HelveticaNeue-Thin"}}>{this.state.selectedKisi.ad_soyad}</Text>
                            </View>
                        </Right>
                    </Header>
                </View>

                <View>
                    <View style = {{
                        flexDirection: 'row',
                        height: 40,
                        padding: 1,
                    }}>
                        <View style = {{backgroundColor: 'white', width: screen.width / 13, borderBottomWidth: 2, borderBottomColor: '#f18a21', borderRightWidth:2 ,borderRightColor: '#f2f2f2', borderRadius: 2}}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {this.state.gun == 1 ? styles.header2Curr : styles.header2}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                pzt
                            </Text>
                        </View>
                        <View style = {this.state.gun == 2 ? styles.headerCurr : styles.header}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                salı
                            </Text>
                        </View>
                        <View style = {this.state.gun == 3 ? styles.header2Curr : styles.header2}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                çrş
                            </Text>
                        </View>
                        <View style = {this.state.gun == 4 ? styles.headerCurr : styles.header}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                prş
                            </Text>
                        </View>
                        <View style = {this.state.gun == 5 ? styles.header2Curr : styles.header2}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                cuma
                            </Text>
                        </View>
                        <View style = {this.state.gun == 6 ? styles.headerCurr : styles.header}>
                            <Text style = {{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                color: "black"
                            }}>
                                cts
                            </Text>
                        </View>
                    </View>

                    <View>
                        <ScrollView
                            directionalLockEnabled={true}
                            alwaysBounceVertical={true}
                            bounces={true}
                        >
                            <View style = {{flexDirection: 'column', height: screen.height + screen.height / 3.5}}>
                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            08 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][0] !== undefined && this.state.table[0][0].length > 18 ? this.state.table[0][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][1] !== undefined && this.state.table[0][1].length > 18 ? this.state.table[0][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][2] !== undefined && this.state.table[0][2].length > 18 ? this.state.table[0][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][3] !== undefined && this.state.table[0][3].length > 18 ? this.state.table[0][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][4] !== undefined && this.state.table[0][4].length > 18 ? this.state.table[0][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[0][5] !== undefined && this.state.table[0][5].length > 18 ? this.state.table[0][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[0][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            09 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][0] !== undefined && this.state.table[1][0].length > 18 ? this.state.table[1][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][1] !== undefined && this.state.table[1][1].length > 18 ? this.state.table[1][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][2] !== undefined && this.state.table[1][2].length > 18 ? this.state.table[1][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][3] !== undefined && this.state.table[1][3].length > 18 ? this.state.table[1][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][4] !== undefined && this.state.table[1][4].length > 18 ? this.state.table[1][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[1][5] !== undefined && this.state.table[1][5].length > 18 ? this.state.table[1][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[1][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            10  {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][0] !== undefined && this.state.table[2][0].length > 18 ? this.state.table[2][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[2][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][1] !== undefined && this.state.table[2][1].length > 18 ? this.state.table[2][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[2][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][2] !== undefined && this.state.table[2][2].length > 18 ? this.state.table[2][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[2][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][3] !== undefined && this.state.table[2][3].length > 18 ? this.state.table[2][3].length > 35 ? styles.textStyle3 : styles.textStyle2: styles.textStyle}>
                                            {this.state.table[2][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][4] !== undefined && this.state.table[2][4].length > 18 ?this.state.table[2][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[2][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[2][5] !== undefined && this.state.table[2][5].length > 18 ? this.state.table[2][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[2][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            11 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][0] !== undefined && this.state.table[3][0].length > 18 ? this.state.table[3][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][1] !== undefined && this.state.table[3][1].length > 18 ? this.state.table[3][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][2] !== undefined && this.state.table[3][2].length > 18 ? this.state.table[3][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][3] !== undefined && this.state.table[3][3].length > 18 ? this.state.table[3][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][4] !== undefined && this.state.table[3][4].length > 18 ? this.state.table[3][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[3][5] !== undefined && this.state.table[3][5].length > 18 ? this.state.table[3][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[3][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            12 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][0] !== undefined && this.state.table[4][0].length > 18 ? this.state.table[4][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][1] !== undefined && this.state.table[4][1].length > 18 ? this.state.table[4][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][2] !== undefined && this.state.table[4][2].length > 18 ? this.state.table[4][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][3] !== undefined && this.state.table[4][3].length > 18 ? this.state.table[4][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][4] !== undefined && this.state.table[4][4].length > 18 ? this.state.table[4][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[4][5] !== undefined && this.state.table[4][5].length > 18 ? this.state.table[4][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[4][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            13 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][0] !== undefined && this.state.table[5][0].length > 18 ? this.state.table[5][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][1] !== undefined && this.state.table[5][1].length > 18 ? this.state.table[5][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][2] !== undefined && this.state.table[5][2].length > 18 ? this.state.table[5][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][3] !== undefined && this.state.table[5][3].length > 18 ? this.state.table[5][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][4] !== undefined && this.state.table[5][4].length > 18 ? this.state.table[5][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[5][5] !== undefined && this.state.table[5][5].length > 18 ? this.state.table[5][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[5][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black",
                                        }}>
                                            14 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][0] !== undefined && this.state.table[6][0].length > 18 ? this.state.table[6][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][1] !== undefined && this.state.table[6][1].length > 18 ? this.state.table[6][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][2] !== undefined && this.state.table[6][2].length > 18 ? this.state.table[6][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][3] !== undefined && this.state.table[6][3].length > 18 ? this.state.table[6][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][4] !== undefined && this.state.table[6][4].length > 18 ? this.state.table[6][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[6][5] !== undefined && this.state.table[6][5].length > 18 ? this.state.table[6][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[6][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            15 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][0] !== undefined && this.state.table[7][0].length > 18 ? this.state.table[7][0].length > 35 ? styles.textStyle3 : styles.textStyle2 :styles.textStyle}>
                                            {this.state.table[7][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][1] !== undefined && this.state.table[7][1].length > 18 ? this.state.table[7][1].length > 35 ? styles.textStyle3 :styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[7][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][2] !== undefined && this.state.table[7][2].length > 18 ? this.state.table[7][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[7][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][3] !== undefined && this.state.table[7][3].length > 18 ? this.state.table[7][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[7][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][4] !== undefined && this.state.table[7][4].length > 18 ? this.state.table[7][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[7][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[7][5] !== undefined && this.state.table[7][5].length > 18 ? this.state.table[7][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[7][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: "black"
                                        }}>
                                            16 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][0] !== undefined && this.state.table[8][0].length > 18 ? this.state.table[8][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][1] !== undefined && this.state.table[8][1].length > 18 ? this.state.table[8][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][2] !== undefined && this.state.table[8][2].length > 18 ? this.state.table[8][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][3] !== undefined && this.state.table[8][3].length > 18 ? this.state.table[8][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][4] !== undefined && this.state.table[8][4].length > 18 ? this.state.table[8][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[8][5] !== undefined && this.state.table[8][5].length > 18 ? this.state.table[8][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[8][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={styles.clock2}>
                                        <Text style={{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: 'black',
                                        }}>
                                            17 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][0] !== undefined && this.state.table[9][0].length > 18 ? this.state.table[9][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][0]}
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][1] !== undefined && this.state.table[9][1].length > 18 ? this.state.table[9][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][1]}
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][2] !== undefined && this.state.table[9][2].length > 18 ? this.state.table[9][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][2]}
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][3] !== undefined && this.state.table[9][3].length > 18 ? this.state.table[9][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][3]}
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][4] !== undefined && this.state.table[9][4].length > 18 ? this.state.table[9][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][4]}
                                        </Text>
                                    </View>
                                    <View style={styles.cell2}>
                                        <Text
                                            style={this.state.table[9][5] !== undefined && this.state.table[9][5].length > 18 ? this.state.table[9][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[9][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: 'black',
                                        }}>
                                            18 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][0] !== undefined && this.state.table[10][0].length > 18 ? this.state.table[10][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][1] !== undefined && this.state.table[10][1].length > 18 ? this.state.table[10][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][2] !== undefined && this.state.table[10][2].length > 18 ? this.state.table[10][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][3] !== undefined && this.state.table[10][3].length > 18 ? this.state.table[10][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][4] !== undefined && this.state.table[10][4].length > 18 ? this.state.table[10][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[10][5] !== undefined && this.state.table[10][5].length > 18 ? this.state.table[10][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[10][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: 'black',
                                        }}>
                                            19 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][0] !== undefined && this.state.table[11][0].length > 18 ? this.state.table[11][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][1] !== undefined && this.state.table[11][1].length > 18 ? this.state.table[11][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][2] !== undefined && this.state.table[11][2].length > 18 ? this.state.table[11][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][3] !== undefined && this.state.table[11][3].length > 18 ? this.state.table[11][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][4] !== undefined && this.state.table[11][4].length > 18 ? this.state.table[11][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[11][5] !== undefined && this.state.table[11][5].length > 18 ? this.state.table[11][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[11][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: 'black',
                                        }}>
                                            20 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][0] !== undefined && this.state.table[12][0].length > 18 ? this.state.table[12][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][1] !== undefined && this.state.table[12][1].length > 18 ? this.state.table[12][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][2] !== undefined && this.state.table[12][2].length > 18 ? this.state.table[12][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][3] !== undefined && this.state.table[12][3].length > 18 ? this.state.table[12][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][4] !== undefined && this.state.table[12][4].length > 18 ? this.state.table[12][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell}>
                                        <Text style = { this.state.table[12][5] !== undefined && this.state.table[12][5].length > 18 ? this.state.table[12][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[12][5]}
                                        </Text>
                                    </View>
                                </View>

                                <View style = {{flexDirection: 'row'}}>
                                    <View style = {styles.clock2}>
                                        <Text style = {{
                                            fontSize: 12,
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: screen.width / 13,
                                            marginTop: 8,
                                            marginBottom: 4,
                                            color: 'black',
                                        }}>
                                            21 {"\n"}
                                            30
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][0] !== undefined && this.state.table[13][0].length > 18 ? this.state.table[13][0].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][0]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][1] !== undefined && this.state.table[13][1].length > 18 ? this.state.table[13][1].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][1]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][2] !== undefined && this.state.table[13][2].length > 18 ? this.state.table[13][2].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][2]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][3] !== undefined && this.state.table[13][3].length > 18 ? this.state.table[13][3].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][3]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][4] !== undefined && this.state.table[13][4].length > 18 ? this.state.table[13][4].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][4]}
                                        </Text>
                                    </View>
                                    <View style = {styles.cell2}>
                                        <Text style = { this.state.table[13][5] !== undefined && this.state.table[13][5].length > 18 ? this.state.table[13][5].length > 35 ? styles.textStyle3 : styles.textStyle2 : styles.textStyle}>
                                            {this.state.table[13][5]}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        backgroundColor: '#efebeb',
        width: screen.width / 6.5,
        borderRightWidth: 1,
        borderRightColor: '#f2f2f2',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5
    },
    cell2: {
        backgroundColor: '#efebeb',
        width: screen.width / 6.5,
        borderRightWidth: 1,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#B00D23',
        borderBottomWidth: 0.5
    },
    clock: {
        backgroundColor: '#efebeb',
        width: screen.width / 13,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        borderRightWidth: 2,
        borderRightColor: '#f18a21',
        height: screen.height / 12.9
    },
    clock2: {
        backgroundColor: '#efebeb',
        width: screen.width / 13,
        borderBottomWidth: 0.5,
        borderBottomColor: '#B00D23',
        borderRightWidth: 2,
        borderRightColor: '#f18a21',
        height: screen.height / 12.9
    },
    header: {
        backgroundColor: 'white',
        width: screen.width / 6.5,
        borderBottomWidth: 2,
        borderBottomColor: '#f18a21',
        borderRightWidth:2 ,
        borderRightColor: '#f2f2f2',
        borderRadius: 2
    },
    headerCurr: {
        backgroundColor: '#a5e2e2',
        width: screen.width / 6.5,
        borderBottomWidth: 2,
        borderBottomColor: '#f18a21',
        borderRightWidth:2 ,
        borderRightColor: '#f2f2f2',
        borderRadius: 2
    },
    header2: {
        backgroundColor: 'white',
        width: screen.width / 6.5,
        borderBottomWidth: 2,
        borderBottomColor: '#f18a21',
        borderRightWidth:2 ,
        borderRightColor: '#f2f2f2',
        borderRadius: 2
    },
    header2Curr: {
        backgroundColor: '#a5e2e2',
        width: screen.width / 6.5,
        borderBottomWidth: 2,
        borderBottomColor: '#f18a21',
        borderRightWidth:2 ,
        borderRightColor: '#f2f2f2',
        borderRadius: 2
    },
    textStyle: {
        fontSize: 13,
        textAlign: "center",
        fontFamily: "HelveticaNeue-Medium",
        width: screen.width / 7,
        marginTop: 12,
        marginBottom: 2,
        color: "black",
    },
    textStyle2: {
        fontSize: 9.7,
        textAlign: "center",
        fontFamily: "HelveticaNeue-Medium",
        width: screen.width / 7,
        marginTop: 8,
        marginBottom: 2,
        color: "black",
    },
    textStyle3: {
        fontSize: 8.5,
        textAlign: "center",
        fontFamily: "HelveticaNeue-Medium",
        width: screen.width / 7,
        marginTop: 8,
        marginBottom: 2,
        color: "black",
    },
});
