import React, { Component } from 'react';
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import Timeline from 'react-native-timeline-flatlist'
import {SearchBar} from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

var screen = Dimensions.get('window');

export default class Lisans extends Component {

    constructor() {
        super();
        this.state = {
            lisans: [],
            lisansBackup: [],
        }
    }
    // {time: '', title: '', description: ''},
    componentDidMount = async () => {
        var firstTimeAkademik = await AsyncStorage.getItem("akademikTakvim");
        if(firstTimeAkademik == "true") {
            AsyncStorage.setItem("firstTimeAkademik", "false");
            Alert.alert(
                "Bilgilendirme",
                "Arama yaparken  Eylül, Ekim gibi ay isimlerini\n ya da TOEFL, Ekle Sil gibi anahtar kelimeleri kullanabilirsiniz.",
                [
                    { text: "Tamam", onPress: () => console.log("Akademik takvim bilgilendirme")}
                ],
                { cancelable: false }
            );
        }

       var data = [
           {time: '', title: '15 Eylül 2020', description: 'Güz dönemi ders programının ilanı'},
           {
               time: '',
               title: '21 Eylül 2020',
               description: 'Dersler ve Ortak Eğitim dönemi ile Hazırlık programı A, B, C ve D kurlarında derslerin başlaması'
           },
           {time: '', title: '21 - 25 Eylül 2020', description: 'Güz dönemi ders kayıtları'},
           {time: '', title: '05 Ekim 2020', description: 'Ders ekleme/silme ve geç kayıt başvuruları için son gün'},
           {time: '', title: '28 - 29 Ekim 2020', description: '29 Ekim Cumhuriyet Bayramı (Tatil) (1,5 Gün)'},
           {time: '', title: '09 Kasım 2020', description: 'Dersten vazgeçme'},
           {time: '', title: '10 Kasım 2020', description: 'Atatürk\'ü Anma Günü'},
           {time: '', title: '09 Aralık 2020', description: 'Derslerin son günü'},
           {time: '', title: '10 - 21 Aralık 2020', description: 'Yatay geçiş başvurularının yapılması'},
           {time: '', title: '12 - 26 Aralık 2020', description: 'Dönem sonu sınavları'},
           {time: '', title: '14 - 25 Aralık 2020', description: 'Yatay geçiş başvurularının değerlendirilmesi'},
           {time: '', title: '17 Aralık 2020', description: 'Hazırlık Programı A, B, C ve D kurlarında derslerin sona ermesi'},
           {time: '', title: '19 Aralık 2020', description: 'Hazırlık Programı B, C ve D kurları için Program Sonu Yeterlik Sınavı (TOEFL-ITP)'},
           {time: '', title: '28 Aralık 2020', description: 'Ortak Eğitimin son günü'},
           {time: '', title: '28 Aralık 2020', description: 'Hazırlık Programı (eski kayıtlı) B, C, ve D kurları için Yarıyıl Sonu Yeterlik Sınavı (TOEFL-ITP)'},
           {time: '', title: '29 Aralık 2020', description: 'Dönem sonu sınavları sonrası başarı notlarının bildirimi\n\n'},
           {time: '2021', title: '01 Ocak 2021', description: 'Yılbaşı Tatili'},
           {time: '', title: '03 - 09 Ocak 2021', description: 'Bütünleme sınavları'},
           {time: '', title: '04 Ocak 2021', description: 'Hazırlık Programı 2. yarıyıl 1. periyot A,B,C ve D kurlarında derslerin başlaması'},
           {time: '', title: '09 - 22 Ocak 2021', description: 'Bahar dönemi öğrenim ücretinin ödenmesi'},
           {time: '', title: '11 Ocak 2021', description: 'Yatay geçiş için kayıt yaptırmaya hak kazananların ilanı'},
           {time: '', title: '12 Ocak 2021', description: 'Bütünleme sınavları sonrası başarı notlarının bildirimi'},
           {time: '', title: '13 - 14 Ocak 2021', description: 'Kesin kayıt yaptırmaya hak kazanan yatay geçiş öğrencilerinin kayıtları ve çift ana dal, yan dal ve üniversite içi yatay geçiş başvuruları\n\n'},
           {time: 'Bahar Dönemi', title: '08 Ocak 2021', description: 'Bahar dönemi ders programının ilanı'},
           {time: '', title: '18 Ocak 2021', description: 'Derslerin ve Ortak Eğitim döneminin başlaması'},
           {time: '', title: '18 - 22 Ocak 2021', description: 'Bahar dönemi ders kayıtları'},
           {time: '', title: '01 Şubat 2021', description: 'Ders ekleme/silme ve geç kayıt başvuruları için son günü'},
           {time: '', title: '08 Mart 2021', description: 'Dersten vazgeçme'},
           {time: '', title: '31 Mart 2021', description: 'Hazırlık programı 2. yarıyıl 1. periyot A, B, C ve D kurlarında derslerin sona ermesi'},
           {time: '', title: '02 Nisan 2021', description: 'Hazırlık Programı B, C ve D kurları için Program Sonu Yeterlik Sınavı (TOEFL-ITP)'},
           {time: '', title: '07 Nisan 2021', description: 'Derslerin son günü'},
           {time: '', title: '09 - 22 Nisan 2021', description: 'Dönem sonu sınavları'},
           {time: '', title: '12 Nisan 2021', description: 'Hazırlık Programı 2. yarıyıl 2. periyot A, B, C ve D kurlarında derslerin başlaması'},
           {time: '', title: '23 Nisan 2021', description: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı (Tatil)'},
           {time: '', title: '25 Nisan 2021', description: 'Dönem sonu sınavları sonrası başarı notlarının bildirimi'},
           {time: '', title: '26 Nisan 2021', description: 'Ortak Eğitimin son günü'},
           {time: '', title: '28 Nisan - 05 Mayıs 2021', description: 'Bütünleme sınavları'},
           {time: '', title: '01 Mayıs 2021', description: 'Emek ve Dayanışma Günü (Tatil)'},
           {time: '', title: '08 Mayıs 2021', description: 'Bütünleme sınavları sonrası başarı notlarının bildirimi'},
           {time: '', title: '10 - 11 Mayıs 2021', description: 'Çift ana dal, yan dal ve üniversite içi yatay geçiş başvuruları'},
           {time: '', title: '10 - 21 Mayıs 2021', description: 'Yaz dönemi öğrenim ücretinin ödenmesi'},
           {time: '', title: '12 Mayıs 2021', description: 'Arife Günü (Yarım Gün)'},
           {time: '', title: '13 - 15 Mayıs 2021', description: 'Ramazan Bayramı (Tatil)\n\n'},
           {time: 'Yaz Dönemi', title: '', description: ''},
           {time: '', title: '07 Mayıs 2021', description: 'Yaz dönemi ders programının ilanı'},
           {time: '', title: '17 Mayıs 2021', description: 'Derslerin ve Ortak Eğitim döneminin başlaması'},
           {time: '', title: '17 - 21 Mayıs 2021', description: 'Yaz dönemi ders kayıtları'},
           {time: '', title: '19 Mayıs 2021', description: 'Atatürk’ü Anma, Gençlik ve Spor Bayramı (Tatil)'},
           {time: '', title: '31 Mayıs 2021', description: 'Ders ekleme/silme ve geç kayıt başvuruları için son günü'},
           {time: '', title: '19 Haziran 2021', description: 'Mezuniyet Töreni'},
           {time: '', title: '05 Temmuz 2021', description: 'Dersten vazgeçme'},
           {time: '', title: '07 Temmuz 2021', description: 'Hazırlık Programı 2. yarıyıl 2. periyot A, B, C ve D kurlarında derslerin sona ermesi'},
           {time: '', title: '09 Temmuz 2021', description: 'Hazırlık Programı B, C ve D kurları için Program Sonu Yeterlik Sınavı (TOEFL-ITP)'},
           {time: '', title: '15 Temmuz 2021', description: '15 Temmuz Demokrasi ve Milli Birlik Günü (Tatil)'},
           {time: '', title: '19 Temmuz 2021', description: 'Arife Günü (Yarım Gün)'},
           {time: '', title: '20 - 23 Temmuz 2021', description: 'Kurban Bayramı (Tatil)'},
           {time: '', title: '04 Ağustos 2021', description: 'Derslerin son günü'},
           {time: '', title: '05 - 17 Ağustos 2021', description: 'Dönem sonu sınavları'},
           {time: '', title: '20 Ağustos 2021', description: 'Dönem sonu sınavları sonrası başarı notlarının bildirimi'},
           {time: '', title: '22 - 28 Ağustos 2021', description: 'Bütünleme sınavları'},
           {time: '', title: '30 Ağustos 2021', description: 'Zafer Bayramı (Tatil)'},
           {time: '', title: '31 Ağustos 2021', description: 'Bütünleme sınavları sonrası başarı notlarının bildirimi'},
           {time: '', title: '31 Ağustos 2021', description: 'Ortak Eğitimin son günü'},
           {time: '', title: '02 - 03 Eylül 2021', description: 'Çift ana dal, yan dal ve üniversite içi yatay geçiş başvuruları'},
        ]

        this.setState({lisans: data, lisansBackup: data,})
    }

    onFilter = (text) => {
        this.setState({searchingFor: text})
        text = text.toLocaleUpperCase("TR");
        var textTurkceKarakter = text.replace(/s/g, "ş").replace(/i/g, "ı").replace(/c/g, "ç").replace(/u/g, "ü").replace(/g/g, "ğ").replace(/o/g, "ö");

        let updatedList = this.state.lisansBackup.filter(function(item) {
            return item.description.replace("İ", "I").toLocaleUpperCase().includes(text)
                || item.description.toLocaleUpperCase("TR").includes(text)
                || item.description.toLocaleUpperCase("TR").includes(textTurkceKarakter)
                || item.title.toLocaleUpperCase("TR").includes(text)
        })

        this.setState({
            lisans: updatedList
        })
    }

    render() {
        return (
            <View style = {{flex: 1}}>
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

                        <Text style = {{marginTop: 10, fontSize: 25, fontFamily: "Helvetica-Bold"}}>Akademik Takvim </Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <SearchBar placeholder="Ara... " lightTheme round
                           containerStyle={{backgroundColor: '#faf8f8', width: screen.width, marginRight: 20}}
                           inputContainerStyle={{backgroundColor: '#e3dddd',}}
                           value={this.state.searchingFor}
                           onChangeText={(text) => {
                               this.onFilter(text);
                           }}
                           autoCorrect={false}
                />

                    <Timeline
                        data={this.state.lisans}
                        columnFormat="two-column"
                        style={{marginTop: 20, marginLeft: 15,}}
                        lineColor="#B00D23"
                        circleColor="#B00D23"
                        timeStyle={{color: '#B00D23', fontSize: 20}}
                        descriptionStyle={{color: '#757474'}}
                        eventContainerStyle={{}}
                        options={{
                            initialNumToRender: this.state.lisans.length
                        }}
                    />

            </View>
        );
    }
}

const styles = StyleSheet.create({});
