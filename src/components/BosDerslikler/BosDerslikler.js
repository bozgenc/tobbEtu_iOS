import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

export default class BosDerslikler extends Component {
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#efebeb'}}>
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

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>Boş Derslikler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 3, marginRight: 3}}>
                    <Text style = {{
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 15.5,
                        marginTop: 20,
                        fontFamily: 'HelveticaNeue-Medium'
                    }}>
                        Şimdilik burası boş ama okullar açılınca güncellenecek.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
