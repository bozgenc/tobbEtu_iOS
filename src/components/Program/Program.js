import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Header ,Left, Right } from "native-base";

var screen = Dimensions.get("window");

export default class Program extends Component {

    state = {
        gun: -1,
    }
    componentDidMount() {
        var today = new Date();
        var day = today.getDay();

        this.setState({gun: day})

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

                    <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>program</Text>

                    <Right>
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

                <View style = {{flexDirection: 'column'}}>
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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                                14 {"\n"}
                                30
                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

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
                                17 {"\n"}
                                30
                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                        <View style = {styles.cell2}>
                            <Text style = {{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                width: screen.width / 7,
                                marginTop: 8,
                                marginBottom: 4,
                                color: "black"
                            }}>

                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cell: {
        backgroundColor: '#e9e5e5',
        width: screen.width / 6.5,
        borderRightWidth: 1,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 0.5
    },

    cell2: {
        backgroundColor: '#e9e5e5',
        width: screen.width / 6.5,
        borderRightWidth: 1,
        borderRightColor: '#f2f2f2',
        borderBottomColor: '#B00D23',
        borderBottomWidth: 0.5
    },
    clock: {
        backgroundColor: '#e9e5e5',
        width: screen.width / 13,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f2f2f2',
        borderRightWidth: 2,
        borderRightColor: '#f18a21',
        height: screen.height / 12.9
    },
    clock2: {
        backgroundColor: '#e9e5e5',
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

});
