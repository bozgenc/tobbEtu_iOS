import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Header, Left, Right} from "native-base";
import {SearchBar} from "react-native-elements";
import Timeline from "react-native-timeline-flatlist";

var screen = Dimensions.get("window");

export default class MedicineFaculty extends Component {
    constructor() {
        super();
        this.state = {
            medicine: [],
            medicineBackup: [],
        }
    }

    componentDidMount() {
        var data = [
            {time: '', title: '15 Eylül 2020', description: 'Güz Dönemi Ders Programının İlanı'},
            {time: '', title: '21 Eylül 2020', description: 'Derslerin Başlaması'},
            {time: '', title: '21 - 25 Eylül 2020', description: 'Güz Dönemi Ders Kayıtları / Özel Öğrenci Başvuruları'},
            {time: '', title: '05 Ekim 2020', description: 'Ders Ekleme / Silme ve Geç Kayıt Başvuruları İçin Son Gün'},
            {time: '', title: '28 - 29 Ekim 2020', description: '29 Ekim Cumhuriyet Bayramı (Tatil) (1,5 Gün)'},
            {time: '', title: '02 Kasım 2020', description: '2020-2021 Bahar Dönemi Lisansüstü Başvuru Tarihlerinin İlan Edilmesi'},
            {time: '', title: '06 Kasım 2020', description: 'Aralık-Ocak Aylarında Yapılacak Olan Doktora Yeterlilik Sınavına Girecek Öğrencilerin Başvuruları için Son Gün'},
            {time: '', title: '09 Kasım 2020', description: 'Dersten Vazgeçme'},
            {time: '', title: '10 Kasım 2020', description: 'Atatürk\'ü Anma Günü'},
            {time: '', title: '27 Kasım 2020', description: 'Tez Savunması Yapacak Öğrenciler için Turnitin Raporunun Teslimi için Son Tarih (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '09 Aralık 2020', description: 'Derslerin Son Günü / Tez ve Proje Önerilerinin Bildirilmesi İçi Son Gün'},
            {time: '', title: '11 Aralık 2020', description: 'Tez Savunması için Jüri Üyelerinin Bildirimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '12 - 26 Aralık 2020', description: 'Dönem Sonu Sınavları'},
            {time: '', title: '18 Aralık 2020', description: 'Tez Savunması İçin Jüri Üyelerinin ve Turnitin Raporunun Bildirimi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '18 Aralık 2020', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '24 Aralık 2020', description: 'Seminer ve Uzatma Formlarının Enstitüye Teslim Edilmesi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '25 Aralık 2020', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '29 Aralık 2020', description: 'Dönem Sonu Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '01 Ocak 2021', description: 'Yılbaşı Tatili'},
            {time: '', title: '03 - 09 Ocak 2021', description: 'Bütünleme Sınavları'},
            {time: '', title: '09 - 22 Ocak 2021', description: 'Bahar Dönemi Öğrenim Ücretinin Ödenmesi'},
            {time: '', title: '12 Ocak 2021', description: 'Bütünleme Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '13 - 14 Ocak 2021', description: 'Devam Eden Öğrencilerin Burslu Statülere Geçiş Yapma Dilekçelerinin Kabulü\n\n'},
            {time: 'Bahar Dönemi', title: '08 Ocak 2021', description: 'Bahar Dönemi Ders Programının İlanı'},
            {time: '', title: '18 Ocak 2021', description: 'Derslerin Başlaması'},
            {time: '', title: '18 - 22 Ocak 2021', description: 'Bahar Dönemi Ders Kayıtları / Özel Öğrenci Başvuruları'},
            {time: '', title: '01 Şubat 2021', description: 'Ders Ekleme / Silme ve Geç Kayıt Başvuruları İçin Son Gün'},
            {time: '', title: '01 Mart 2021', description: 'Fen Bilimleri Enstitüsü 2020-2021 Yaz Dönemi Lisansüstü Başvuru Tarihlerinin İlan Edilmesi'},
            {time: '', title: '08 Mart 2021', description: 'Dersten Vazgeçme'},
            {time: '', title: '19 Mart 2021', description: 'Tez Savunması Yapacak Öğrenciler için Turnitin Raporunun Teslimi için Son Tarih (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '02 Nisan 2021', description: 'Tez Savunması için Jüri Üyelerinin Bildirimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '07 Nisan 2021', description: 'Derslerin Son Günü / Tez ve Proje Önerilerinin Bildirilmesi İçi Son Gün'},
            {time: '', title: '09 - 22 Nisan 2021', description: 'Dönem Sonu Sınavları'},
            {time: '', title: '14 Nisan 2021', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '16 Nisan 2021', description: 'Tez Savunması İçin Jüri Üyelerinin ve Turnitin Raporunun Bildirimi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '21 Nisan 2021', description: 'Seminer ve Uzatma Formlarının Enstitüye Teslim Edilmesi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '22 Nisan 2021', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi İçin Son Gün (Fen Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '23 Nisan 2021', description: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı (Tatil)'},
            {time: '', title: '25 Nisan 2021', description: 'Dönem Sonu Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '28 Nisan - 05 Mayıs 2021', description: 'Bütünleme Sınavları'},
            {time: '', title: '01 Mayıs 2021', description: 'Emek ve Dayanışma Günü ( Tatil )'},
            {time: '', title: '08 Mayıs 2021', description: 'Bütünleme Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '10 - 11 Mayıs 2021', description: 'Devam Eden Öğrencilerin Burslu Statülere Geçiş Yapma Dilekçelerinin Kabulü\n\n'},
            {time: 'Yaz Dönemi', title: '07 Mayıs 2021', description: 'Yaz Dönemi Ders Programının İlanı'},
            {time: '', title: '10 Mayıs 2021', description: 'Sosyal Bilimler Enstitüsü 2021-2022 Güz Dönemi Lisansüstü Başvuru Tarihlerinin İlan Edilmesi'},
            {time: '', title: '11 - 21 Mayıs 2021', description: 'Yaz Dönemi Öğrenim Ücretinin Ödenmesi'},
            {time: '', title: '12 Mayıs 2021', description: 'Arife Günü (Yarım Gün)'},
            {time: '', title: '13 - 15 Mayıs 2021', description: 'Ramazan Bayramı (Tatil)'},
            {time: '', title: '17 Mayıs 2021', description: 'Derslerin Başlaması'},
            {time: '', title: '17 - 21 Mayıs 2021', description: 'Yaz Dönemi Ders Kayıtları / Özel Öğrenci Başvuruları'},
            {time: '', title: '19 Mayıs 2021', description: 'Atatürk’ü Anma, Gençlik ve Spor Bayramı (Tatil)'},
            {time: '', title: '31 Mayıs 2021', description: 'Ders Ekleme / Silme ve Geç Kayıt Başvuruları İçin Son Günü'},
            {time: '', title: '07 Haziran 2021', description: 'Fen Bilimleri ve Sağlık Bilimleri Enstitüsü 2021-2022 Güz Dönemi lisansüstü Başvuru Tarihlerinin İlan Edilmesi'},
            {time: '', title: '19 Haziran 2021', description: 'Mezuniyet Töreni'},
            {time: '', title: '05 Temmuz 2021', description: 'Dersten Vazgeçme'},
            {time: '', title: '15 Temmuz 2021', description: '15 Temmuz Demokrasi ve Milli Birlik Günü (Tatil)'},
            {time: '', title: '16 Temmuz 2021', description: 'Haziran-Temmuz Aylarında Yapılacak Olan Doktora Yeterlilik Sınavına Girecek Öğrencilerin Başvuruları İçin Son Gün'},
            {time: '', title: '19 Temmuz 2021', description: 'Arife Günü (Yarım Gün)'},
            {time: '', title: '20 - 23 Temmuz 2021', description: 'Kurban Bayramı (Tatil)'},
            {time: '', title: '30 Temmuz 2021', description: 'Tez Savunması Yapacak Öğrenciler için Turnitin Raporunun Teslimi için Son Tarih (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '04 Ağustos 2021', description: 'Derslerin Son Günü / Tez ve Proje Önerilerinin Bildirilmesi İçi Son Gün'},
            {time: '', title: '04 Ağustos 2021', description: 'Tez Savunması için Jüri Üyelerinin Bildirimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '05 - 17 Ağustos 2021', description: 'Dönem Sonu Sınavları'},
            {time: '', title: '16 Ağustos 2021', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi için Son Gün (Sosyal Bilimler Enstitüsü Öğrencileri için)'},
            {time: '', title: '17 Ağustos 2021', description: 'Tez Savunması İçin Jüri Üyelerinin ve Turnitin Raporunun Bildirimi İçin Son Gün (Fen Bilimleri ve Sağlık Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '19 Ağustos 2021', description: 'Seminer ve Uzatma Formlarının Enstitüye Teslim Edilmesi İçin Son Gün (Fen Bilimleri ve Sağlık Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '20 Ağustos 2021', description: 'Dönem Sonu Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '20 Ağustos 2021', description: 'Tez Savunması ve Proje Danışmanı Değerlendirme Formunun Teslimi İçin Son Gün (Fen Bilimleri ve Sağlık Bilimleri Enstitüsü Öğrencileri İçin)'},
            {time: '', title: '22 - 28 Ağustos 2021', description: 'Bütünleme Sınavları'},
            {time: '', title: '30 Ağustos 2021', description: 'Zafer Bayramı (Tatil)'},
            {time: '', title: '31 Ağustos 2021', description: 'Bütünleme Sınavları Sonrası Başarı Notlarının Bildirimi'},
            {time: '', title: '01 - 02 Eylül 2021', description: 'Devam Eden Öğrencilerin Burslu Statülere Geçiş Yapma Dilekçelerinin Kabulü'},
        ]

        this.setState({medicine: data, medicineBackup: data})
    }

    onFilter = (text) => {
        this.setState({searchingFor: text})
        text = text.toLocaleUpperCase("TR");
        var textTurkceKarakter = text.replace(/s/g, "ş").replace(/i/g, "ı").replace(/c/g, "ç").replace(/u/g, "ü").replace(/g/g, "ğ").replace(/o/g, "ö");

        let updatedList = this.state.medicineBackup.filter(function(item) {
            return item.description.replace("İ", "I").toLocaleUpperCase().includes(text)
                || item.description.toLocaleUpperCase("TR").includes(text)
                || item.description.toLocaleUpperCase("TR").includes(textTurkceKarakter)
                || item.title.toLocaleUpperCase("TR").includes(text)
        })

        this.setState({
            medicine: updatedList
        })
    }


    render() {
        return (
            <View style = {{flex: 1,  backgroundColor: '#efebeb',}}>
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
                    data={this.state.medicine}
                    columnFormat="two-column"
                    style={{marginTop: 20, marginLeft: 15,}}
                    lineColor="#B00D23"
                    circleColor="#B00D23"
                    timeStyle={{color: '#B00D23', fontSize: 20}}
                    descriptionStyle={{color: '#757474'}}
                    eventContainerStyle={{}}
                    options={{
                        initialNumToRender: this.state.medicine.length
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({});
