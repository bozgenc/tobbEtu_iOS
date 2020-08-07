export default class ProgramGenerator {

    static createTablo(data) {
        var tablo = new Array(10);

        for (var i = 0; i < tablo.length; i++) {
            tablo[i] = new Array(6);
        }

        for(var i = 0; i < 10; i++) {
            for(var j = 0; j < 6; j++) {
                tablo[i][j] = "";
            }
        }

        for(var j = 0; j < data.length; j++) {
            for(var k = 0; k < data[j].baslamaSaati.length; k++) {
                var details = data[j].baslamaSaati[k];

                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("08.30")) {
                    if(tablo[0][0] !== "") {
                        tablo[0][0] += " || "
                    }
                    tablo[0][0] += data[j].dersKodu + "\n";
                    tablo[0][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][0] !== "") {
                            tablo[1][0] += " || "
                        }
                        tablo[1][0] += data[j].dersKodu + "\n";
                        tablo[1][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("09.30")) {
                    if(tablo[1][0] !== "") {
                        tablo[1][0] += " || "
                    }
                    tablo[1][0] += data[j].dersKodu + "\n";
                    tablo[1][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][0] !== "") {
                            tablo[2][0] += " || "
                        }
                        tablo[2][0] += data[j].dersKodu + "\n";
                        tablo[2][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("10.30")) {
                    if(tablo[2][0] !== "") {
                        tablo[2][0] += " || "
                    }
                    tablo[2][0] += data[j].dersKodu + "\n";
                    tablo[2][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][0] !== "") {
                            tablo[3][0] += " || "
                        }
                        tablo[3][0] += data[j].dersKodu + "\n";
                        tablo[3][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("11.30")) {
                    if(tablo[3][0] !== "") {
                        tablo[3][0] += " || "
                    }
                    tablo[3][0] += data[j].dersKodu + "\n";
                    tablo[3][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][0] !== "") {
                            tablo[4][0] += " || "
                        }
                        tablo[4][0] += data[j].dersKodu + "\n";
                        tablo[4][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("12.30")) {
                    if(tablo[4][0] !== "") {
                        tablo[4][0] += " || "
                    }
                    tablo[4][0] += data[j].dersKodu + "\n";
                    tablo[4][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][0] !== "") {
                            tablo[5][0] += " || "
                        }
                        tablo[5][0] += data[j].dersKodu + "\n";
                        tablo[5][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("13.30")) {
                    if(tablo[5][0] !== "") {
                        tablo[5][0] += " || "
                    }
                    tablo[5][0] += data[j].dersKodu + "\n";
                    tablo[5][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][0] !== "") {
                            tablo[6][0] += " || "
                        }
                        tablo[6][0] += data[j].dersKodu + "\n";
                        tablo[6][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("14.30")) {
                    if(tablo[6][0] !== "") {
                        tablo[6][0] += " || "
                    }
                    tablo[6][0] += data[j].dersKodu + "\n";
                    tablo[6][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][0] !== "") {
                            tablo[7][0] += " || "
                        }
                        tablo[7][0] += data[j].dersKodu + "\n";
                        tablo[7][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("15.30")) {
                    if(tablo[7][0] !== "") {
                        tablo[7][0] += " || "
                    }
                    tablo[7][0] += data[j].dersKodu + "\n";
                    tablo[7][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][0] !== "") {
                            tablo[8][0] += " || "
                        }
                        tablo[8][0] += data[j].dersKodu + "\n";
                        tablo[8][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("16.30")) {
                    if(tablo[8][0] !== "") {
                        tablo[8][0] += " || "
                    }
                    tablo[8][0] += data[j].dersKodu + "\n";
                    tablo[8][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if (data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][0] !== "") {
                            tablo[9][0] += " || "
                        }
                        tablo[9][0] += data[j].dersKodu + "\n";
                        tablo[9][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if (data[j].baslamaSaati[k].includes("Pazartesi") && data[j].baslamaSaati[k].includes("17.30")) {
                    if(tablo[9][0] !== "") {
                        tablo[9][0] += " || "
                    }
                    tablo[9][0] += data[j].dersKodu + "\n";
                    tablo[9][0] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }

                // ------------------------------------------------------------------- //

                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("08.30")){
                    if(tablo[0][1] !== "") {
                        tablo[0][1] += " || "
                    }
                    tablo[0][1] += data[j].dersKodu + "\n";
                    tablo[0][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][1] !== "") {
                            tablo[1][1] += " || "
                        }
                        tablo[1][1] += data[j].dersKodu + "\n";
                        tablo[1][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("09.30")){
                    if(tablo[1][1] !== "") {
                        tablo[1][1] += " || "
                    }
                    tablo[1][1] += data[j].dersKodu + "\n";
                    tablo[1][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][1] !== "") {
                            tablo[2][1] += " || "
                        }
                        tablo[2][1] += data[j].dersKodu + "\n";
                        tablo[2][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("10.30")){
                    if(tablo[2][1] !== "") {
                        tablo[2][1] += " || "
                    }
                    tablo[2][1] += data[j].dersKodu + "\n";
                    tablo[2][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][1] !== "") {
                            tablo[3][1] += " || "
                        }
                        tablo[3][1] += data[j].dersKodu + "\n";
                        tablo[3][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("11.30")){
                    if(tablo[3][1] !== "") {
                        tablo[3][1] += " || "
                    }
                    tablo[3][1] += data[j].dersKodu + "\n";
                    tablo[3][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][1] !== "") {
                            tablo[4][1] += " || "
                        }
                        tablo[4][1] += data[j].dersKodu + "\n";
                        tablo[4][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("12.30")){
                    if(tablo[4][1] !== "") {
                        tablo[4][1] += " || "
                    }
                    tablo[4][1] += data[j].dersKodu + "\n";
                    tablo[4][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][1] !== "") {
                            tablo[5][1] += " || "
                        }
                        tablo[5][1] += data[j].dersKodu + "\n";
                        tablo[5][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("13.30")){
                    if(tablo[5][1] !== "") {
                        tablo[5][1] += " || "
                    }
                    tablo[5][1] += data[j].dersKodu + "\n";
                    tablo[5][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][1] !== "") {
                            tablo[6][1] += " || "
                        }
                        tablo[6][1] += data[j].dersKodu + "\n";
                        tablo[6][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("14.30")){
                    if(tablo[6][1] !== "") {
                        tablo[6][1] += " || "
                    }
                    tablo[6][1] += data[j].dersKodu + "\n";
                    tablo[6][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][1] !== "") {
                            tablo[7][1] += " || "
                        }
                        tablo[7][1] += data[j].dersKodu + "\n";
                        tablo[7][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("15.30")){
                    if(tablo[7][1] !== "") {
                        tablo[7][1] += " || "
                    }
                    tablo[7][1] += data[j].dersKodu + "\n";
                    tablo[7][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][1] !== "") {
                            tablo[8][1] += " || "
                        }
                        tablo[8][1] += data[j].dersKodu + "\n";
                        tablo[8][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("16.30")){
                    if(tablo[8][1] !== "") {
                        tablo[8][1] += " || "
                    }
                    tablo[8][1] += data[j].dersKodu + "\n";
                    tablo[8][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][1] !== "") {
                            tablo[9][1] += " || "
                        }
                        tablo[9][1] += data[j].dersKodu + "\n";
                        tablo[9][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Salı") && data[j].baslamaSaati[k].includes("17.30")){
                    if(tablo[9][1] !== "") {
                        tablo[9][1] += " || "
                    }
                    tablo[9][1] += data[j].dersKodu + "\n";
                    tablo[9][1] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }

                // ------------------------------------------------------------------- //

                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("08.30")){
                    if(tablo[0][2] !== "") {
                        tablo[0][2] += " || ";
                    }
                    tablo[0][2] += data[j].dersKodu + "\n";
                    tablo[0][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][2] !== "") {
                            tablo[1][2] += " || ";
                        }
                        tablo[1][2] += data[j].dersKodu + "\n";
                        tablo[1][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("09.30")){
                    if(tablo[1][2] !== "") {
                        tablo[1][2] += " || ";
                    }
                    tablo[1][2] += data[j].dersKodu + "\n";
                    tablo[1][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][2] !== "") {
                            tablo[2][2] += " || ";
                        }
                        tablo[2][2] += data[j].dersKodu + "\n";
                        tablo[2][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("10.30")){
                    if(tablo[2][2] !== "") {
                        tablo[2][2] += " || ";
                    }
                    tablo[2][2] += data[j].dersKodu + "\n";
                    tablo[2][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][2] !== "") {
                            tablo[3][2] += " || ";
                        }
                        tablo[3][2] += data[j].dersKodu + "\n";
                        tablo[3][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("11.30")){
                    if(tablo[3][2] !== "") {
                        tablo[3][2] += " || ";
                    }
                    tablo[3][2] += data[j].dersKodu + "\n";
                    tablo[3][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][2] !== "") {
                            tablo[4][2] += " || ";
                        }
                        tablo[4][2] += data[j].dersKodu + "\n";
                        tablo[4][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("12.30")){
                    if(tablo[4][2] !== "") {
                        tablo[4][2] += " || ";
                    }
                    tablo[4][2] += data[j].dersKodu + "\n";
                    tablo[4][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][2] !== "") {
                            tablo[5][2] += " || ";
                        }
                        tablo[5][2] += data[j].dersKodu + "\n";
                        tablo[5][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("13.30")){
                    if(tablo[5][2] !== "") {
                        tablo[5][2] += " || ";
                    }
                    tablo[5][2] += data[j].dersKodu + "\n";
                    tablo[5][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][2] !== "") {
                            tablo[6][2] += " || ";
                        }
                        tablo[6][2] += data[j].dersKodu + "\n";
                        tablo[6][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("14.30")){
                    if(tablo[6][2] !== "") {
                        tablo[6][2] += " || ";
                    }
                    tablo[6][2] += data[j].dersKodu + "\n";
                    tablo[6][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][2] !== "") {
                            tablo[7][2] += " || ";
                        }
                        tablo[7][2] += data[j].dersKodu + "\n";
                        tablo[7][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("15.30")){
                    if(tablo[7][2] !== "") {
                        tablo[7][2] += " || ";
                    }
                    tablo[7][2] += data[j].dersKodu + "\n";
                    tablo[7][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][2] !== "") {
                            tablo[8][2] += " || ";
                        }
                        tablo[8][2] += data[j].dersKodu + "\n";
                        tablo[8][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("16.30")){
                    if(tablo[8][2] !== "") {
                        tablo[8][2] += " || ";
                    }
                    tablo[8][2] += data[j].dersKodu + "\n";
                    tablo[8][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][2] !== "") {
                            tablo[9][2] += " || ";
                        }
                        tablo[9][2] += data[j].dersKodu + "\n";
                        tablo[9][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Çarşamba") && data[j].baslamaSaati[k].includes("17.30")){
                    if(tablo[9][2] !== "") {
                        tablo[9][2] += " || ";
                    }
                    tablo[9][2] += data[j].dersKodu + "\n";
                    tablo[9][2] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }

                // ------------------------------------------------------------------- //

                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("08.30")){
                    if(tablo[0][3] !== "") {
                        tablo[0][3] += " || "
                    }
                    tablo[0][3] += data[j].dersKodu + "\n";
                    tablo[0][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][3] !== "") {
                            tablo[1][3] += " || "
                        }
                        tablo[1][3] += data[j].dersKodu + "\n";
                        tablo[1][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("09.30")){
                    if(tablo[1][3] !== "") {
                        tablo[1][3] += " || "
                    }
                    tablo[1][3] += data[j].dersKodu + "\n";
                    tablo[1][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][3] !== "") {
                            tablo[2][3] += " || "
                        }
                        tablo[2][3] += data[j].dersKodu + "\n";
                        tablo[2][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("10.30")){
                    if(tablo[2][3] !== "") {
                        tablo[2][3] += " || "
                    }
                    tablo[2][3] += data[j].dersKodu + "\n";
                    tablo[2][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][3] !== "") {
                            tablo[3][3] += " || "
                        }
                        tablo[3][3] += data[j].dersKodu + "\n";
                        tablo[3][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("11.30")){
                    if(tablo[3][3] !== "") {
                        tablo[3][3] += " || "
                    }
                    tablo[3][3] += data[j].dersKodu + "\n";
                    tablo[3][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][3] !== "") {
                            tablo[4][3] += " || "
                        }
                        tablo[4][3] += data[j].dersKodu + "\n";
                        tablo[4][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("12.30")){
                    if(tablo[4][3] !== "") {
                        tablo[4][3] += " || "
                    }
                    tablo[4][3] += data[j].dersKodu + "\n";
                    tablo[4][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][3] !== "") {
                            tablo[5][3] += " || "
                        }
                        tablo[5][3] += data[j].dersKodu + "\n";
                        tablo[5][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("13.30")){
                    if(tablo[5][3] !== "") {
                        tablo[5][3] += " || "
                    }
                    tablo[5][3] += data[j].dersKodu + "\n";
                    tablo[5][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][3] !== "") {
                            tablo[6][3] += " || "
                        }
                        tablo[6][3] += data[j].dersKodu + "\n";
                        tablo[6][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("14.30")){
                    if(tablo[6][3] !== "") {
                        tablo[6][3] += " || "
                    }
                    tablo[6][3] += data[j].dersKodu + "\n";
                    tablo[6][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][3] !== "") {
                            tablo[7][3] += " || "
                        }
                        tablo[7][3] += data[j].dersKodu + "\n";
                        tablo[7][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("15.30")){
                    if(tablo[7][3] !== "") {
                        tablo[7][3] += " || "
                    }
                    tablo[7][3] += data[j].dersKodu + "\n";
                    tablo[7][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][3] !== "") {
                            tablo[8][3] += " || "
                        }
                        tablo[8][3] += data[j].dersKodu + "\n";
                        tablo[8][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("16.30")){
                    if(tablo[8][3] !== "") {
                        tablo[8][3] += " || "
                    }
                    tablo[8][3] += data[j].dersKodu + "\n";
                    tablo[8][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][3] !== "") {
                            tablo[9][3] += " || "
                        }
                        tablo[9][3] += data[j].dersKodu + "\n";
                        tablo[9][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Perşeme") && data[j].baslamaSaati[k].includes("17.30")){
                    if(tablo[9][3] !== "") {
                        tablo[9][3] += " || "
                    }
                    tablo[9][3] += data[j].dersKodu + "\n";
                    tablo[9][3] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }

                // ------------------------------------------------------------------- //

                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("08.30")){
                    if(tablo[0][4] !== "") {
                        tablo[0][4] += " || "
                    }
                    tablo[0][4] += data[j].dersKodu + "\n";
                    tablo[0][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][4] !== "") {
                            tablo[1][4] += " || "
                        }
                        tablo[1][4] += data[j].dersKodu + "\n";
                        tablo[1][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("09.30")){
                    if(tablo[1][4] !== "") {
                        tablo[1][4] += " || "
                    }
                    tablo[1][4] += data[j].dersKodu + "\n";
                    tablo[1][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][4] !== "") {
                            tablo[2][4] += " || "
                        }
                        tablo[2][4] += data[j].dersKodu + "\n";
                        tablo[2][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("10.30")){
                    if(tablo[2][4] !== "") {
                        tablo[2][4] += " || "
                    }
                    tablo[2][4] += data[j].dersKodu + "\n";
                    tablo[2][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][4] !== "") {
                            tablo[3][4] += " || "
                        }
                        tablo[3][4] += data[j].dersKodu + "\n";
                        tablo[3][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("11.30")){
                    if(tablo[3][4] !== "") {
                        tablo[3][4] += " || "
                    }
                    tablo[3][4] += data[j].dersKodu + "\n";
                    tablo[3][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][4] !== "") {
                            tablo[4][4] += " || "
                        }
                        tablo[4][4] += data[j].dersKodu + "\n";
                        tablo[4][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("12.30")){
                    if(tablo[4][4] !== "") {
                        tablo[4][4] += " || "
                    }
                    tablo[4][4] += data[j].dersKodu + "\n";
                    tablo[4][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][4] !== "") {
                            tablo[5][4] += " || "
                        }
                        tablo[5][4] += data[j].dersKodu + "\n";
                        tablo[5][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("13.30")){
                    if(tablo[5][4] !== "") {
                        tablo[5][4] += " || "
                    }
                    tablo[5][4] += data[j].dersKodu + "\n";
                    tablo[5][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][4] !== "") {
                            tablo[6][4] += " || "
                        }
                        tablo[6][4] += data[j].dersKodu + "\n";
                        tablo[6][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("14.30")){
                    if(tablo[6][4] !== "") {
                        tablo[6][4] += " || "
                    }
                    tablo[6][4] += data[j].dersKodu + "\n";
                    tablo[6][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][4] !== "") {
                            tablo[7][4] += " || "
                        }
                        tablo[7][4] += data[j].dersKodu + "\n";
                        tablo[7][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("15.30")){
                    if(tablo[7][4] !== "") {
                        tablo[7][4] += " || "
                    }
                    tablo[7][4] += data[j].dersKodu + "\n";
                    tablo[7][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][4] !== "") {
                            tablo[8][4] += " || "
                        }
                        tablo[8][4] += data[j].dersKodu + "\n";
                        tablo[8][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") &&  data[j].baslamaSaati[k].includes("16.30")){
                    if(tablo[8][4] !== "") {
                        tablo[8][4] += " || "
                    }
                    tablo[8][4] += data[j].dersKodu + "\n";
                    tablo[8][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][4] !== "") {
                            tablo[9][4] += " || "
                        }
                        tablo[9][4] += data[j].dersKodu + "\n";
                        tablo[9][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cuma") && !data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("17.30")){
                    if(tablo[9][4] !== "") {
                        tablo[9][4] += " || "
                    }
                    tablo[9][4] += data[j].dersKodu + "\n";
                    tablo[9][4] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }

                // ------------------------------------------------------------------- //

                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("08.30")){
                    if(tablo[0][5] !== ""){
                        tablo[0][5] += " || "
                    }
                    tablo[0][5] += data[j].dersKodu + "\n";
                    tablo[0][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[1][5] !== ""){
                            tablo[1][5] += " || "
                        }
                        tablo[1][5] += data[j].dersKodu + "\n";
                        tablo[1][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("09.30")){
                    if(tablo[1][5] !== ""){
                        tablo[1][5] += " || "
                    }
                    tablo[1][5] += data[j].dersKodu + "\n";
                    tablo[1][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[2][5] !== ""){
                            tablo[2][5] += " || "
                        }
                        tablo[2][5] += data[j].dersKodu + "\n";
                        tablo[2][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("10.30")){
                    if(tablo[2][5] !== ""){
                        tablo[2][5] += " || "
                    }
                    tablo[2][5] += data[j].dersKodu + "\n";
                    tablo[2][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[3][5] !== ""){
                            tablo[3][5] += " || "
                        }
                        tablo[3][5] += data[j].dersKodu + "\n";
                        tablo[3][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("11.30")){
                    if(tablo[3][5] !== ""){
                        tablo[3][5] += " || "
                    }
                    tablo[3][5] += data[j].dersKodu + "\n";
                    tablo[3][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[4][5] !== ""){
                            tablo[4][5] += " || "
                        }
                        tablo[4][5] += data[j].dersKodu + "\n";
                        tablo[4][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("12.30")){
                    if(tablo[4][5] !== ""){
                        tablo[4][5] += " || "
                    }
                    tablo[4][5] += data[j].dersKodu + "\n";
                    tablo[4][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[5][5] !== ""){
                            tablo[5][5] += " || "
                        }
                        tablo[5][5] += data[j].dersKodu + "\n";
                        tablo[5][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("13.30")){
                    if(tablo[5][5] !== ""){
                        tablo[5][5] += " || "
                    }
                    tablo[5][5] += data[j].dersKodu + "\n";
                    tablo[5][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[6][5] !== ""){
                            tablo[6][5] += " || "
                        }
                        tablo[6][5] += data[j].dersKodu + "\n";
                        tablo[6][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("14.30")){
                    if(tablo[6][5] !== ""){
                        tablo[6][5] += " || "
                    }
                    tablo[6][5] += data[j].dersKodu + "\n";
                    tablo[6][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[7][5] !== ""){
                            tablo[7][5] += " || "
                        }
                        tablo[7][5] += data[j].dersKodu + "\n";
                        tablo[7][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("15.30")){
                    if(tablo[7][5] !== ""){
                        tablo[7][5] += " || "
                    }
                    tablo[7][5] += data[j].dersKodu + "\n";
                    tablo[7][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[8][5] !== ""){
                            tablo[8][5] += " || "
                        }
                        tablo[8][5] += data[j].dersKodu + "\n";
                        tablo[8][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("16.30")){
                    if(tablo[8][5] !== ""){
                        tablo[8][5] += " || "
                    }
                    tablo[8][5] += data[j].dersKodu + "\n";
                    tablo[8][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    if(data[j].baslamaSaati[k].charAt(data[j].baslamaSaati[k].lastIndexOf(",") - 1) == 2) {
                        if(tablo[9][5] !== ""){
                            tablo[9][5] += " || "
                        }
                        tablo[9][5] += data[j].dersKodu + "\n";
                        tablo[9][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                    }
                }
                if(data[j].baslamaSaati[k].includes("Cumartesi") && data[j].baslamaSaati[k].includes("17.30")){
                    if(tablo[9][5] !== ""){
                        tablo[9][5] += " || "
                    }
                    tablo[9][5] += data[j].dersKodu + "\n";
                    tablo[9][5] += "(" + details.substring(details.lastIndexOf(",") + 1) + ")";
                }
            }
        }
        return tablo;
    }
}
