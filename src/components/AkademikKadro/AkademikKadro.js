import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

export default class AkademikKadro extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
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

                        <Text style = {{marginTop: 10, fontSize: 25, fontFamily: "Helvetica-Bold"}}>Akademik Takvim </Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{justifyContent: 'center', alignItems: 'center'}}>
                        AKADEMİK TAKVİM
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
