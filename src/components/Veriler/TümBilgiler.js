import {Component} from "react";

class TumBilgiler extends Component{
    constructor() {
        super();
        this.state = {
            ogrenciListesi: [],
        }
    }

    componentDidMount() {
        this.createOgrenciListesi();
    }

    createOgrenciListesi(id) {
        const ogrenciData = {
            ad_soyad: "Arda Ege İsker",
            no: "171101072",
            bolum: "Bilgisayar Mühendisliği",
            sinif: 2,
            aldigiDersler: [
                {
                    ad: "MDT",
                    dersKodu: "BIL\n264",
                    hoca_adi: "OERGİN",
                    hangiSube: 1,
                    baslamaSaati: ["pzt, 08.30, 2, 177", "prş, 09.30, 2, 176"]
                }
                ,{
                ad: "Veri Yapıları",
                dersKodu: "BIL\n212",
                hoca_adi: "Mehmet Tan",
                hangiSube: 1,
                baslamaSaati: ["pzt , 10.30, 2, 177", "prş, 11.30, 2, 176"]
            }, {
                ad: "Almanca 2",
                dersKodu: "ALM\n002",
                hoca_adi: "Tuna Başaran",
                hangiSube: 2,
                baslamaSaati: ["çrş, 14.30, 2, 311", "cts, 12.30, 2, Y407"]
            },]
        }

        const ogrenciData2 = {
            ad_soyad: "Rana Gül Serpil",
            no: "181801029",
            bolum: "Nanoteknoloji ve Malzeme Mühendisliği",
            sinif: 2,
            aldigiDersler: [{
                ad: "Matematik 2",
                dersKodu: "MAT102",
                hoca_adi: "Hüseyin Merdan",
                hangiSube: 1,
                baslamaSaati: ["pzt, 09.30, 2, 177",]
            }, {
                ad: "Almanca 2",
                dersKodu: "ALM002",
                hoca_adi: "Tuna Başaran",
                hangiSube: 2,
                baslamaSaati: ["çrş, 13.30, 2, 311", "cts, 12.30, 2, Y407"]
            }]
        }

        const ogrenciData3 = {
            ad_soyad: "Ege Kızıltan",
            no: "171101057",
            bolum: "Bilgisayar Mühendisliği",
            sinif: 1,
            aldigiDersler: [{
                ad: "Kombinatorik ve Çizge Kuramı",
                dersKodu: "BIL\n133",
                hoca_adi: "Buğra Çaşkurlu",
                hangiSube: 1,
                baslamaSaati: ["salı , 09.30, 2, 176", "cts, 14.30, 2, 176"]
            }, {
                ad: "İngilizce 3",
                dersKodu: "ING\n003",
                hoca_adi: "ing hocası",
                hangiSube: 2,
                baslamaSaati: ["pzt , 16.30, 2, 295", "cts, 14.30, 2, Y205"]
            }]
        }

        const temp = [];
        temp.push(ogrenciData);
        temp.push(ogrenciData2);
        temp.push(ogrenciData3);

        let dataToReturn = {};
        var i;
        for(i = 0; i < temp.length; i++){
            if(temp[i].no === id){
                dataToReturn = temp[i]
            }
        }
        return dataToReturn;
    }
}

const veriler = new TumBilgiler();
export default veriler;
