let texte = document.querySelector(".form");
let cptMots = 0;
let cptE = 0;
let longueurTxt = 0;

const analyse = () => {
    longueurTxt = texte.length;
    for (let indice =0; indice<longueurTxt;indice++) {
        if(texte.charAt(indice) == " ") {
            cptMots++;
        }
    }
    for (indice = 0;indice<longueurTxt;indice++) {
        if(texte.charAt(indice) == 'e') {
            cptE++;
        }
    }

}