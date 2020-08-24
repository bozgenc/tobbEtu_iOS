import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image, Alert} from 'react-native';
import Program from "../Program/Program";
import AsyncStorage from '@react-native-community/async-storage';
import {BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';

var bool = false;
var no = "";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            ogrenciNo: "",
            isLoading: true,
        }
    }

    componentDidMount = async () => {
        const loginAuth = await AsyncStorage.getItem('ogrenciNo');
        if(loginAuth !== null) {
            no = loginAuth;
            this.setState({isLoading: true}, () => {
                this.props.navigation.navigate('Program');
            });
        }
        else {
            this.setState({isLoading: false})
        }
    }

    onSubmit = () => {
        if(bool) {
            this.setState({isLoading: true}, () => {
                AsyncStorage.setItem('ogrenciNo', no);
                this.props.navigation.navigate('Program');
            })
        }
        else {
            Alert.alert(
                "hata ",
                "lütfen geçerli bir öğrenci numarası girin!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed")}
                ],
                { cancelable: false }
            );
        }
    }

    static passOgrenciNoAux(text) {
        if(text.length == 9 && !text.includes(",") && !text.includes("."))  {
            bool = true;
            no = text;
        }
    }

    static passOgrenciNo() {
        return no;
    }

    render() {
        if(this.state.isLoading) {
            return (
                <BarIndicator color='black'/>
            )
        }
        else
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 370}}>
                        <Image source={require("../images/loginuser.png")} style = {styles.image}/>
                    </View>

                    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                        <TextInput
                            style={styles.input}
                            placeholder="öğrenci numarası"
                            textAlign='center'
                            keyboardType = "number-pad"
                            maxLength={9}
                            autoCorrect={false}
                            returnKeyType={'done'}
                            onChangeText={(text) => Login.passOgrenciNoAux(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.onSubmit()}
                    >
                        <View style={styles.button}>
                            <Text style={{
                                fontSize: 17,
                                color: 'white',
                                textAlign: 'center',
                                paddingTop: 0,
                                fontWeight: 'bold',
                            }}>
                                Giriş
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 210,}}>
                        <Image source={require("../images/tobblogo.png")} style = {styles.image}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232424",
    },
    header: {
        backgroundColor: '#f2f2f2',
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 100,
        color: 'black',
        fontFamily: "Helvetica-Bold",
    },
    input: {
        borderWidth: 1,
        borderColor: '#383838',
        borderRadius: 10,
        height: 35,
        marginTop: 20,
        marginLeft: 20,
        width: "70%"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "70%",
        borderWidth: 1,
        borderColor: '#383838',
        borderRadius: 10,
        height: 35,
        backgroundColor: '#007AFF',
        marginTop: 8,
        marginLeft: 73,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
});
