import {Component} from "react";
import dersler from "./dersler.json";
import ogrenciler from "./ogrenciler.json"

class TumBilgiler extends Component{
    constructor() {
        super();
        this.state = {
            ogrenciListesi: [],
        }
    }

    componentDidMount() {
    }

    getOgrenciBilgisi(id) {
        var jsonData = ogrenciler;
        var ogrencilerList = jsonData.ogrenciler.map(function(item) {
            return {
                ad_soyad: item.ad_soyad,
                bolum: item.bolum,
                sinif: item.sinif,
                aldigiDersler: item.aldigiDersler,
                no: item.no,
            };
        });

        let dataToReturn = null;
        for(var i = 0; i < ogrencilerList.length; i++){
            if(ogrencilerList[i].no === id){
                dataToReturn = ogrencilerList[i]
            }
        }
        return dataToReturn;
    }

    createDersListesi() {
        var jsonData = dersler;
        var derslerList = jsonData.dersler.map(function(item) {
            return {
                ad: item.ad,
                dersKodu: item.dersKodu,
                hangiSube: item.hangi_sube,
                hoca_adi: item.hoca_adi,
            };
        });

        return derslerList;
    }

    getDers(id) {
        var jsonData = dersler;
        var derslerList = jsonData.dersler.map(function(item) {
            return {
                ad: item.ad,
                dersKodu: item.dersKodu,
                hangiSube: item.hangi_sube,
                ogrenciList: item.ogrenciList,
                hoca_adi: item.hoca_adi,
            };
        });
        let dataToReturn = null;
        for(var i = 0; i < derslerList.length; i++) {
            if(derslerList[i].dersKodu == id)
                dataToReturn = derslerList[i];
        }
        return dataToReturn;
    }
}

const veriler = new TumBilgiler();
export default veriler;
