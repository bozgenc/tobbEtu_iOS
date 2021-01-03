import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, TextInput, Button, TouchableOpacity, Image, Alert} from 'react-native';
import Program from "../Program/Program";
import AsyncStorage from '@react-native-community/async-storage';
import {Header, Left, Right, Footer} from "native-base";
import Video from "react-native-video";
import {BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
import image from "../images/tobblogo.png";
import DeviceInfo from 'react-native-device-info';

var screen = Dimensions.get('window');
var deviceModel = DeviceInfo.getModel();

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
        const loginAwk = await AsyncStorage.getItem('loginAwk');
        if(loginAwk == "true") {
            this.setState({isLoading: false});
        }
        else {
            if(loginAuth !== null) {
                no = loginAuth;
                AsyncStorage.setItem('loginAwk', "false");
                this.setState({isLoading: true}, () => {
                    this.props.navigation.navigate('Program');
                });
            }
            else {
                this.setState({isLoading: false})
            }
        }
    }

    onSubmit = () => {
        if(bool) {
            this.setState({isLoading: true}, () => {
                AsyncStorage.setItem('ogrenciNo', no);
                AsyncStorage.setItem('akademikTakvim', "true");
                AsyncStorage.setItem('firstTime', "true")
                AsyncStorage.setItem("ogrenciler", "true");
                AsyncStorage.setItem("dersler", "true");
                AsyncStorage.setItem('loginAwk', "false");
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
                    height:
                        deviceModel == "iPhone 11" || deviceModel == "iPhone XR" ||
                        deviceModel == "iPhone 11 Pro Max"  || deviceModel == "iPhone XS Max" ? screen.height * 48 / 100 :
                            deviceModel == "iPhone 8 Plus" || deviceModel == "iPhone 6 Plus" ||
                            deviceModel == "iPhone 6S Plus" ||deviceModel == "iPhone 7 Plus" ? screen.height * 55 / 100 :
                                deviceModel == "iPhone X" || deviceModel == "iPhone XS" || deviceModel == "iPhone 11 Pro " ? screen.height * 50 / 100 : screen.height * 60 / 100,
                    backgroundColor: 'white',
                    borderBottomWidth: 5,
                    borderBottomColor: '#f18a21'
                }}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: deviceModel == "iPhone SE" || deviceModel == "iPhone 5" || deviceModel == "iPhone 5S" ? 30 : 50,
                        }}>
                            <Image
                                source={this.state.imageChoose == 0 ? require("../images/yeniBekleme.jpg") : this.state.imageChoose == 1 ? require("../images/yeniBir.jpg") : this.state.imageChoose == 2 ? require("../images/yeniIki.jpg") :
                                    this.state.imageChoose == 3 ? require("../images/yeniUc.jpg") : this.state.imageChoose == 4 ? require("../images/yeniDort.jpg") : this.state.imageChoose == 5 ? require("../images/yeniBes.jpg") :
                                        this.state.imageChoose == 6 ? require("../images/yeniAlti.jpg") : this.state.imageChoose == 7 ? require("../images/yeniYedi.jpg") : this.state.imageChoose == 8 ? require("../images/yeniSekiz.jpg") : require("../images/yeniDokuz.jpg")
                                } style={
                                    deviceModel == "iPhone 11" || deviceModel == "iPhone 11 Pro Max"  ||
                                    deviceModel == "iPhone XS Max" || deviceModel == "iPhone 7 Plus" ||
                                    deviceModel == "iPhone XS Max" || deviceModel == "iPhone 6 Plus" ||
                                    deviceModel == "iPhone 6S Plus" ? styles.imageForBiggerDevices :
                                        deviceModel == "iPhone SE" || deviceModel == "iPhone 5" || deviceModel == "iPhone 5S" ? styles.imageForSmallDevices : styles.image}/>
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

                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    marginTop:
                        deviceModel == "iPhone 11" ||
                        deviceModel == "iPhone 11 Pro Max"  || deviceModel == "iPhone XS Max" ||
                        deviceModel == "iPhone 7 Plus" || deviceModel == "iPhone XS Max" ||
                        deviceModel == "iPhone 6 Plus" || deviceModel == "iPhone 6S Plus" ? screen.height * 32 / 100 : screen.height * 28 / 100
                }}>
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
        alignItems: 'center',
        fontFamily: "Helvetica-Bold",
        borderWidth: 2,
        borderColor: '#383838',
        borderRadius: 10,
        height: 35,
        marginTop: screen.height / 16,
        marginLeft: - screen.width / 10,
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
        height: 35,
        backgroundColor: '#007AFF',
        marginTop: 8,
        marginLeft: - screen.width / 10,
        fontFamily: "Helvetica-Bold"
    },
    image: {
        width: 210,
        height: 210,
        resizeMode: 'contain',
    },
    imageForBiggerDevices: {
        width: 225,
        height: 225,
        resizeMode: 'contain',
    },
    imageForSmallDevices: {
        width: 175,
        height: 175,
        resizeMode: 'contain',
    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
});
