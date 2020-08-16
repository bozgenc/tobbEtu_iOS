import React, { Component } from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
import DersDetay from "../Dersler/DersDetay";

import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Drawer =  createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

var screen = Dimensions.get('window');

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"Program"}
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -2, height: screen.height / 15}
            }}
        >
            <Tab.Screen name="Programım" component={Program} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
            <Tab.Screen name="Bilgilerim" component={Bilgilerim} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
            <Tab.Screen name="Derslerim" component={DerslerimStack}/>
        </Tab.Navigator>
    );
}

function DerslerimStack() {
    return (
        <Stack.Navigator
            lazy = {true}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Derslerim" component={Derslerim} initialParams={{ogrenciNo: Login.passOgrenciNo()}}/>
            <Stack.Screen name="DersDetay" component={DerslerimDetayStack}/>
        </Stack.Navigator>
    );
}

function DerslerimDetayStack() {
    return (
        <Stack.Navigator
            mode = "modal"
            lazy = {true}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="DersDetay" component={DersDetay} initialParams={{selectedDers: Derslerim.passSelectedDers()}}/>
            <Stack.Screen name="OgrenciDetayBilgiler" component={OgrencilerUcluTabDers2}/>
        </Stack.Navigator>
    );
}

function OgrencilerUcluTabDers2({}) {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -2, height: 0}
            }}
        >
            <Tab.Screen name="OgrenciDetayBilgiler" component={OgrenciDetayBilgiler} initialParams={{selectedKisi: DersDetay.passSelectedKisi()}} />
            <Tab.Screen name="OgrenciDetayProgram" component={OgrenciDetayProgram} initialParams={{selectedKisi: DersDetay.passSelectedKisi()}}/>
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

function OgrencilerUcluTab() {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -2, height: screen.height / 15}
            }}
        >
            <Tab.Screen name="Bilgiler" component={OgrenciDetayBilgiler} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}} />
            <Tab.Screen name="Program" component={OgrenciDetayProgram} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}}/>
            <Tab.Screen name="Dersler" component={DerslerStack} />
        </Tab.Navigator>
    );
}

function DerslerStack() {
    return (
        <Stack.Navigator
            lazy = {true}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="OgrenciDetayDersler" component={OgrenciDetayDersler} initialParams={{selectedKisi: Ogrenciler.passSelectedKisi()}}/>
            <Stack.Screen name="DersDetay" component={DersDetayStack}/>
        </Stack.Navigator>
    );
}

function DersDetayStack() {
    return (
        <Stack.Navigator
            mode = "modal"
            lazy = {true}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="DersDetay" component={DersDetay} initialParams={{selectedDers: OgrenciDetayDersler.passSelectedDers()}}/>
            <Stack.Screen name="OgrenciDetayBilgiler" component={OgrencilerUcluTabDers}/>
        </Stack.Navigator>
    );
}

function OgrencilerUcluTabDers({}) {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -4, height: 0},
            }}
        >
            <Tab.Screen name="Bilgiler" component={OgrenciDetayBilgiler} initialParams={{selectedKisi: DersDetay.passSelectedKisi()}} />
            <Tab.Screen name="Program" component={OgrenciDetayProgram} initialParams={{selectedKisi: DersDetay.passSelectedKisi()}}/>
        </Tab.Navigator>
    );
}


function ServislerTab() {
    return (
        <Tab.Navigator
            lazy = {true}
            tabBarPosition='bottom'
            tabBarOptions={{
                style: {marginBottom: -2, height: screen.height / 15}

            }}
        >
            <Tab.Screen name="Ringler" component={Ringler} />
            <Tab.Screen name="Cumartesi" component={Cumartesi} />
            <Tab.Screen name="Semt" component={Servisler} />
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
            <Drawer.Screen name="Ana Sayfa" component={MyTabs}/>
            <Drawer.Screen name="Öğrenciler" component={OgrencilerStack} />
            <Drawer.Screen name="Dersler" component={Dersler} />
            <Drawer.Screen name="Boş Derslikler" component={BosDerslikler} />
            <Drawer.Screen name="Akademik Takvim" component={AkademikKadro} />
            <Drawer.Screen name="Servisler" component={ServislerTab} />
            <Drawer.Screen name="Vizeler" component={Vizeler} />
            <Drawer.Screen name="Finaller" component={Finaller} />
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
