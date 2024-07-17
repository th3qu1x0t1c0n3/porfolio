"use strict";

// window.addEventListener("load", initCommun);
$(document).ready(initCommun);

const URL_ACCUEIL = "index.html";
const URL_CATALOGUE = "catalogue.html";

const PAGE_ACCUEIL = 'accueil';
const PAGE_CATALOGUE = 'catalogue';

// Booléen indiquant si une partie est en cours.
// Il servira entre autre à avertir l'utilisateur que la partie se terminera s'il tente de revenir à la page
// d'accueil ou à la page du catalogue.
let partieEnCours;

function initCommun() {
    initAbonnesDepart();
}

// Fonction qui sera appelée lorsque l'on veut changer de page.
// Elle contient la logique pour mettre le jeu en pause s'il y a lieu et vérifier si le changement de page doit être effectué.
function naviguerPage(destination) {
    switch (destination) {
        case PAGE_ACCUEIL:
            location.href = location.href.substring(0, location.href.lastIndexOf("/") + 1) + URL_ACCUEIL;
            break;

        case PAGE_CATALOGUE:
            location.href = location.href.substring(0, location.href.lastIndexOf("/") + 1) + URL_CATALOGUE;
            break;
    }
}


function messageUsage(titre, msg){
    $("#sortieDlg").focus();

    $("#titre").text(titre);
    $("#msg").text(msg);
    $("#dlgErrModal").modal();

    $("#sortieDlg").click(function(){
        $("#dlgErrModal").modal("hide");
    })
}


function connexionUtilisateur(){
    if (estAuthentifie()) {
        if (typeof sessionStorage != "undefined") {
            let abonne = JSON.parse(sessionStorage.getItem(CLE_AUTHENTIFIE));

            $("#utilisateur").text("Bienvenue " + abonne.pseudonyme);

            $("#btnInscrip").attr("disabled", true);
            $("#btnCo").attr("disabled", true);

            for (let i=0; i<$(".champ").length; i++){
                $(".champ").eq(i).attr({
                    "disabled" : true,
                    "placeholder" : "Désactivé"
                });
            }
        }
    }else{
        $("#utilisateur").hide();
    }

}

$(document).ready(function (){
    connexionUtilisateur();

    $("#btnDeco").click(function (){
        console.log("deconnexion");
        deconnexion();
    })
})