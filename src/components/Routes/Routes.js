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
import Bilgilerim from "../Derslerim/Bilgilerim";
import OgrenciDetayProgram from "../OgrencilerDetay/OgrenciDetayProgram";
import OgrenciDetayDersler from "../OgrencilerDetay/OgrenciDetayDersler";
import OgrenciDetayBilgiler from "../OgrencilerDetay/OgrenciDetayBilgiler";

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
            <Tab.Screen name="Program" component={Program} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
            <Tab.Screen name="Bilgilerim" component={Bilgilerim} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
            <Tab.Screen name="Derslerim" component={Derslerim} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
        </Tab.Navigator>
    );
}

function OgrencilerUcluTab() {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -4, height: 60}
            }}
        >
            <Tab.Screen name="Bilgiler" component={OgrenciDetayBilgiler} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}} />
            <Tab.Screen name="Program" component={OgrenciDetayProgram} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}}/>
            <Tab.Screen name="Dersler" component={OgrenciDetayDersler} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}}/>
        </Tab.Navigator>
    );
}

function OgrencilerStack() {
    return (
        <Stack.Navigator
            lazy = {true}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Ogrenciler" component={Ogrenciler}/>
            <Stack.Screen name="OgrenciDetayBilgiler" component={OgrencilerUcluTab}/>
        </Stack.Navigator>
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
            <Tab.Screen name="ringler" component={Ringler} />
            <Tab.Screen name="cumartesi" component={Cumartesi} />
            <Tab.Screen name="semt" component={Servisler} />
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
            <Drawer.Screen name="öğrenciler" component={OgrencilerStack} />
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
              lazy = {true}
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
