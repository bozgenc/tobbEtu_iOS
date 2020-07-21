import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';


export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.logo}>
                        tobb etü
                    </Text>
                    <Text style = {styles.logoDesc}>
                        mobil
                    </Text>
                </View>

                <ScrollView>
                    <View style = {styles.login}>
                        <View style = {{flexDirection:'column'}}>
                            <Text style = {{marginTop: -2, padding: 20, fontSize: 14, textAlign: 'center', color:'black'}}>
                                lütfen öğrenci numaranızla giriş yapın
                            </Text>
                        </View>

                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="öğrenci numarası"
                                textAlign='center'
                                keyboardType = "numeric"
                                maxLength={9}
                            />
                        </View>
                        <View style = {styles.button}>
                           <TouchableOpacity
                               onPress = {() => {console.log("aa")}}
                           >
                               <Text style = {{
                                   fontSize: 14,
                                   color: 'white',
                                   textAlign: 'center',
                                   paddingTop: 8,
                                   fontWeight: 'bold',
                               }}>
                                   giriş
                               </Text>
                           </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        backgroundColor: '#6b52ad',
        width: "100%",
        height: 350,
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomWidth: 3,
        borderBottomColor: 'red'
    },
    logo: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 140,
        color: 'black',
        fontFamily: "Helvetica-Bold",
    },
    logoDesc: {
        fontSize: 20,
        textAlign: 'center',
        color: "black",
        fontFamily: "Helvetica Neue"
    },
    login: {
        flexDirection: 'column',
        marginHorizontal: 40,
        marginVertical: 275,
        height: 275,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderRadius: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#383838',
        borderRadius: 10,
        height: 35,
        marginTop: 95,
        marginLeft: 5,
    },
    button: {
        width: 150,
        borderWidth: 1,
        borderColor: '#383838',
        marginTop: 8,
        borderRadius: 10,
        marginLeft: 75,
        height: 35,
        backgroundColor: 'red'
    }
});
