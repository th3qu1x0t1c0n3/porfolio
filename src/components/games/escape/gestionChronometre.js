"use strict";

let ms = 0, sec = 0, min = 0;
let chrono;

let tmpDepart;
let tmpFin;

// ms += 4, car c'est la valeur qui semble émité le mieux un seconde pour 1000 miliseconde
function partirChrono(){
    ms+= 4;

    if (ms >= 1000){
        ms = 0;
        sec++;
    }
    if (sec >= 60){
        sec = 0;
        min++;
    }

    chrono = min + ":" + sec + ":" + ms;

    $("#chrono").text(chrono);
}

function resetChrono(){
    chrono = "00:00:000";
    $("#chrono").text(chrono);

    ms = 0;
    sec = 0;
    min = 0;
}

function afficheTemps(){
    let vraiMin = tmpFin.getMinutes() - tmpDepart.getMinutes();
    let vraiSec = tmpFin.getSeconds() - tmpDepart.getSeconds();

    messageUsage("Bravo! Voici votre temps", vraiMin + " minutes et " + vraiSec + " seconde");
    $("#sortieDlg").click(function (){
        $("#btnRecommencer").focus();
    })

}

function arreterChrono(){
    clearInterval(chronometre);
    tmpFin = new Date();
    afficheTemps();
}