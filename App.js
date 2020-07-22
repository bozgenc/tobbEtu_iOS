import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './src/components/Login/Login'
import {NavigationContainer} from "@react-navigation/native";
import Routes from "./src/components/Routes/Routes";

export default class App extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Routes>
                </Routes>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
