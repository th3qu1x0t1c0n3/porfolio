"use strict";

const RATIO_ACTEUR_PLAN = 0.05;
const VITESSE = 1;

let aireJeux = {
    domAire: null,
    LARGEUR: 0,
    HAUTEUR: 0
}
let acteur = {
    domActeur: null,
    threadMouvement: null
};

/*
    Fonction qui permet de réinitialiser l'acteur avant le début d'une partie.
    Taille, Position, Couleur, Image.

    Pour l'instant l'acteur est "hardcodé" (taille et position).
    Éventuellement, sa taille sera déterminée en fonction de la largeur du plan de jeu
    et il sera positionné au centre.
 */

function repositionnerActeur() {
    aireJeux.domAire = $("#planJeu");
    let domActeur = $("#acteur");

    $(domActeur).css( {
            "width" : getLargeurDomObject("planJeu")*RATIO_ACTEUR_PLAN,
            "height" : getLargeurDomObject("planJeu")*RATIO_ACTEUR_PLAN,
            "top" : getHauteurDomObject("planJeu")/2.2,
            "left" : getLargeurDomObject("planJeu")/2.1,
            "background-color" : "yellow",
        }
    )
    acteur.domActeur = document.getElementById("acteur");
}

function bougerActeur(haut, bas, gauche, droite) {

    let deltaX = 0;
    let deltaY = 0;
    if (haut) {
        deltaY = VITESSE;
    }
    if (bas) {
        deltaY = -VITESSE;
    }
    if (gauche) {
        deltaX = -VITESSE;
    }
    if (droite) {
        deltaX = VITESSE;
    }

    let positionY = getPositionY();
    let positionX = getPositionX();

    if (positionY - deltaY < getHauteurDomObject("planJeu") - (Math.trunc(getHauteurDomObject("acteur"))) && positionY  - deltaY > 0 &&
        positionX + deltaX < getLargeurDomObject("planJeu") - (Math.trunc(getLargeurDomObject("acteur"))) && positionX  + deltaX > 0) {
        $("#acteur").css("top", positionY  - deltaY + "px");
        $("#acteur").css("left", positionX  + deltaX + "px");
    }
}

function getPositionY(){
    return parseInt(acteur.domActeur.style.top);
}

function getPositionX(){
    return parseInt(acteur.domActeur.style.left);
}
