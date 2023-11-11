"use strict";

// window.addEventListener("load", initJeu);
$(document).ready(initJeu);
let partieEnCours = false;
let colisionCheck, chronometre;

function initJeu() {
    plan.domPlan = document.getElementById("planJeu");

    ajouterListener();
    btnRecommencerClic();
}

function ajouterListener() {
    $("#btnGo").on("click", btnGoClic);
    $("#btnRecommencer").on("click", btnRecommencerClic);
}

/*
    Fonction appelée lors du clic sur le bouton "Recommencer" de la page du jeu.
*/
function btnRecommencerClic() {
        $("#btnGo").attr("disabled", false);
        $("#btnRecommencer").attr("disabled", true);
        $("#btnGo").focus();

        resetChrono();

        $("#acteur").css("background-image", "none");
        $("#planJeu").css("background-color", "lightgray");
        plan.viderPlan();
        genererEnnemis(20);
        repositionnerActeur();
}

/*
    Fonction appelée lors du clic sur le bouton "Go" de la page du jeu.
*/
function btnGoClic() {
    if (estAuthentifie()) {
        animer(true);
        colisionCheck = setInterval(collision, 1);
        tmpDepart = new Date();
        chronometre = setInterval(partirChrono, 1);
        partieEnCours = true;

        $("#btnRecommencer").attr("disabled", true);
        $("#btnGo").attr("disabled", true);
    }
    else {
        messageUsage("Erreur d'authentification", "Vous n'êtes pas authentifié");
        $("#sortieDlg").click(function(){
            naviguerPage(PAGE_ACCUEIL);
        })
    }
}


/*
    Fonction appelée pour animer (true) ou arrêter(false) les différents éléments animables
    de la page (acteur, ennemi, chronomètre).
*/
function animer(go) {
    animerEnnemis(go);
}

/*
    Fonction utilitaire qui retourne la largeur (nombre) de l'élément du DOM dont l'identifiant a été passé en paramètre.
*/
function getLargeurDomObject(id) {
    return $("#" + id).innerWidth();
}

/*
    Fonction utilitaire qui retourne la hauteur (nombre) de l'élément du DOM dont l'identifiant a été passé en paramètre.
*/
function getHauteurDomObject(id) {
    return $("#" + id).innerHeight();
}

/*
    Fonction utilitaire qui retourne un entier aléatoire entre min et max.
*/
function genererEntier(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}

function finPartie(){
    partieEnCours = false;
    $("#planJeu").css("background-color", "orange");
    $("#acteur").css({
        "background-image" : "url('img/sadFace.png')",
        "background-position": "center",
        "background-size": "cover"})

    clearInterval(colisionCheck);
    clearInterval(acteur.threadMouvement);
    arreterChrono();

    animerEnnemis(false);

    $("#btnGo").attr("disabled", true);
    $("#btnRecommencer").attr("disabled", false);
    $("#btnRecommencer").focus();
}


$(document).ready(function (){

    if (!estAuthentifie()){
        messageUsage("Erreur Authentification", "Vous devez vous identifier avant de pouvoir jouers");
        $("#sortieDlg").click(function(){
            $("#dlgErrModal").modal("hide");
            naviguerPage(PAGE_ACCUEIL);
        })
    }


    let droite = false,
        gauche = false,
        haut = false,
        bas = false;

    $(document).keydown(function (ev) {
        if (partieEnCours) {
            switch (ev.key) {

                //Mouvement normal
                case "ArrowUp":
                    haut = true;
                    bas = false;
                    gauche = false;
                    droite = false
                    break;
                case "ArrowRight":
                    droite = true;
                    haut = false;
                    bas = false;
                    gauche = false;
                    break;
                case "ArrowDown":
                    bas = true;
                    haut = false;
                    gauche = false;
                    droite = false;
                    break;
                case "ArrowLeft":
                    gauche = true;
                    haut = false;
                    bas = false;
                    droite = false;
                    break;

                //Diagonale
                case "Home":
                    haut = true;
                    gauche = true;
                    bas = false;
                    droite = false;
                    break;

                case "PageUp":
                    haut = true;
                    droite = true;
                    bas = false;
                    gauche = false;
                    break;

                case "PageDown":
                    bas = true;
                    droite = true;
                    haut = false;
                    gauche = false;
                    break;

                case "End":
                    bas = true;
                    gauche = true;
                    haut = false;
                    droite = false;
                    break;

                //    Stop personnage
                case "NumLock" :
                case " " :
                case "Clear" :
                    haut = false;
                    bas = false;
                    gauche = false;
                    droite = false;
                    break;
            }
            if (acteur.threadMouvement == null) {
                acteur.threadMouvement = setInterval(bougerActeur, 10, haut, bas, gauche, droite)
            } else {
                clearInterval(acteur.threadMouvement)
                acteur.threadMouvement = setInterval(bougerActeur, 10, haut, bas, gauche, droite)
            }
        }
        else {
            clearInterval(acteur.threadMouvement)
        }
    })
})