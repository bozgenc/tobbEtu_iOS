import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Program from "../Program/Program";
import Login from "../Login/Login";
import Ogrenciler from "../Ogrenciler/Ogrenciler";
import Dersler from "../Dersler/Dersler";
import Servisler from "../Servisler/Servisler";
import Vizeler from "../VizeFinaller/Vizeler";
import Finaller from "../VizeFinaller/Finaller";
import AkademikKadro from "../AkademikKadro/AkademikKadro";
import BosDerslikler from "../BosDerslikler/BosDerslikler";
import Derslerim from "../Derslerim/Derslerim";
import Ringler from "../Servisler/Ringler";
import Cumartesi from "../Servisler/Cumartesi";

import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Drawer =  createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -4, height: 60}
            }}
        >
            <Tab.Screen name="Program" component={Program} initialParams={{ ogrenciNo: Login.passOgrenciNo()}}/>
            <Tab.Screen name="Derslerim" component={Derslerim} />
        </Tab.Navigator>
    );
}

function ServislerTab() {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -4, height: 60,}

            }}
        >
            <Tab.Screen name="semt" component={Servisler} />
            <Tab.Screen name="ringler" component={Ringler} />
            <Tab.Screen name="cumartesi" component={Cumartesi} />
        </Tab.Navigator>
    );
}

function Home() {
    return (
        <Drawer.Navigator
            lazy = {true}
            drawerContentOptions={{
                inactiveTintColor: 'black',
                activeTintColor: '#d0c6c6'
            }}
        >
            <Drawer.Screen name="program" component={MyTabs}/>
            <Drawer.Screen name="öğrenciler" component={Ogrenciler} />
            <Drawer.Screen name="dersler" component={Dersler} />
            <Drawer.Screen name="boş derslikler" component={BosDerslikler} />
            <Drawer.Screen name="akademik kadro" component={AkademikKadro} />
            <Drawer.Screen name="servisler" component={ServislerTab} />
            <Drawer.Screen name="vizeler" component={Vizeler} />
            <Drawer.Screen name="finaller" component={Finaller} />
        </Drawer.Navigator>
    );
}

export default class Routes extends Component {

  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}>
              <Stack.Screen name = "Login" component={Login}/>
              <Stack.Screen name = "Program" component={Home}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
