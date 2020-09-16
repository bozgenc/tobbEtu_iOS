import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, TextInput, Button, TouchableOpacity, Image, Alert} from 'react-native';
import Program from "../Program/Program";
import AsyncStorage from '@react-native-community/async-storage';
import {Header, Left, Right, Footer} from "native-base";
import Video from "react-native-video";
import {BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
import image from "../images/tobblogo.png";

var screen = Dimensions.get('window');

var bool = false;
var no = "";
var imageChoose = 0;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            ogrenciNo: "",
            isLoading: true,
            imageChoose: 0
        }
    }

    componentDidMount = async () => {
        const loginAuth = await AsyncStorage.getItem('ogrenciNo');
        if(loginAuth !== null) {
            no = loginAuth;
            AsyncStorage.setItem("firstTime", "false");
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
                AsyncStorage.setItem('firstTime', "true");
                this.props.navigation.navigate('Program');
            })
        }
        else {
            Alert.alert(
                "Hata ",
                "Lütfen geçerli bir öğrenci numarası girin!",
                [
                    { text: "OK", onPress: () => console.log("Login hatası")}
                ],
                { cancelable: false }
            );
        }
    }

    static passOgrenciNoAux(text) {
        if(text.length == 1)
           imageChoose = 1;
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
                <PacmanIndicator color='black'/>
            )
        }
        else
        return (
            <View style={styles.container}>
                <Header style={{
                    height: screen.height * 49 / 100,
                    backgroundColor: 'white',
                    borderBottomWidth: 5,
                    borderBottomColor: '#f18a21'
                }}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 70,
                        }}>
                            <Image
                                source={this.state.imageChoose == 0 ? require("../images/bekleme.jpg") : this.state.imageChoose == 1 ? require("../images/bir.jpg") : this.state.imageChoose == 2 ? require("../images/iki.jpg") :
                                    this.state.imageChoose == 3 ? require("../images/uc.jpg") : this.state.imageChoose == 4 ? require("../images/dort.jpg") : this.state.imageChoose == 5 ? require("../images/bes.jpg") :
                                        this.state.imageChoose == 6 ? require("../images/alti.jpg") : this.state.imageChoose == 7 ? require("../images/yedi.jpg") : this.state.imageChoose == 8 ? require("../images/sekiz.jpg") : require("../images/dokuz.jpg")
                                } style={styles.image}/>
                        </View>

                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Öğrenci Numarası"
                                textAlign='center'
                                keyboardType = "number-pad"
                                maxLength={9}
                                autoCorrect={false}
                                returnKeyType={'done'}
                                onChangeText={(text) => {this.setState({imageChoose: text.length}) ; Login.passOgrenciNoAux(text)}}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => this.onSubmit()}
                        >
                            <View style={styles.button}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingTop: 0,
                                    fontWeight: 'bold',
                                }}>
                                    Giriş
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Header>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: screen.height * 34 / 100}}>
                    <Image source={image} style={styles.imageLogo}/>
                    {/* <Video
                            source = {abcVideo}
                            resizeMode = 'cover'
                            style = {{height: 500, width: screen.width}}
                        />*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#000",
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
        alignItems: 'flex-start',
        fontFamily: "Helvetica-Bold",
        borderWidth: 2,
        borderColor: '#383838',
        borderRadius: 10,
        height: 40,
        marginTop: screen.height / 14,
        marginLeft: - screen.width / 5,
        width: "140%",
        textAlign: 'left',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "140%",
        borderWidth: 2,
        borderColor: '#383838',
        borderRadius: 10,
        height: 40,
        backgroundColor: '#007AFF',
        marginTop: 8,
        marginLeft: - screen.width / 5,
        fontFamily: "Helvetica-Bold"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
});
