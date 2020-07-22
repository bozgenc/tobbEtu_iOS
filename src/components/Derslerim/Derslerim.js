import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";

export default class Derslerim extends Component {
    render() {
        return (
            <View style = {{flex: 1,}}>
                <View>
                    <Header style = {{backgroundColor: 'white'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30}}>
                                    ≡
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>derslerim</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{justifyContent: 'center', alignItems: 'center'}}>
                        DERSLERİM
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
