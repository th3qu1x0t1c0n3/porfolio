"use strict";

// Tableau qui contiendra les objets "Ennemi" qui seront instanciés.
let lesEnnemis;

/*
    Fonction constructeur d'un ennemi : une sphère aléatoire qui se déplace dans la zone de jeu.

    Si la fonction est appelée sans paramètre, on génère:
        - une sphère dont la taille est comprise entre 3% et 6% de la largeur du plan de jeu.
        - une position de départ aléatoire dans le plan, sans chevaucher le ¼ de l'espace
            horizontal et vertical au centre.
        - pour la direction, on génère une augmentation aléatoire en initialisant à -1 ou 1 le
            nombre de pixels de déplacement (horizontal ou vertical), et l'autre direction
            est initialisée avec une valeur entre -4 et 4.
        - pour la vitesse de déplacement, on génère un rafraichissement de la position de l'ennemi
            qui se fera entre 10 (plus vite) et 40 (plus lent) millisecondes.
*/
function Ennemi(t, x, y, v) {
    const LARGEUR_PLAN = getLargeurDomObject("planJeu");
    const HAUTEUR_PLAN = getHauteurDomObject("planJeu");

    const VITESSE_MIN = 40;
    const VITESSE_MAX = 10;

    const CSS_CLASS_ENNEMI = "ennemi";

    let taille, posX, posY, dirX, dirY, vitesse;

    if (t === undefined) {
        let tailleMin = Math.round(LARGEUR_PLAN * 0.03);
        let tailleMax = 2 * tailleMin;
        taille = genererEntier(tailleMin, tailleMax);
    } else {
        taille = t;
    }

    if (x === undefined || y === undefined) {
        /*
            On détermine au hasard la zone où sera positionné l'ennemi, en fonction de la surface de cette zone :
                1 : au-dessus du ¼ central
                2 : à gache du ¼ central
                3 : à droite du ¼ central
                4 : au-dessous du ¼ central
        */
        let hasardZone = Math.random();
        let probZ1 = (LARGEUR_PLAN * HAUTEUR_PLAN * 3 / 8)
            / (LARGEUR_PLAN * HAUTEUR_PLAN * 15 / 16);
        let zone;
        if (hasardZone <= probZ1)
            zone = 1;
        else if (hasardZone >= (1 - probZ1))
            zone = 4;
        else if (hasardZone <= 0.5)
            zone = 2;
        else
            zone = 3;

        // On génère maintenant aléatoirement les positions horizontales et verticales
        // pour que l'ennemi soit dans la zone précédemment déterminée.
        switch (zone) {
            case 1: {
                posX = genererEntier(0, Math.floor(LARGEUR_PLAN) - taille);
                posY = genererEntier(0, Math.floor(HAUTEUR_PLAN * 3 / 8) - taille);
                break;
            }
            case 2: {
                posX = genererEntier(0, Math.floor(LARGEUR_PLAN * 3 / 8) - taille);
                posY = genererEntier(Math.floor(HAUTEUR_PLAN * 3 / 8) - taille,
                    Math.floor(HAUTEUR_PLAN * 5 / 8));
                break;
            }
            case 3 : {
                posX = genererEntier(Math.floor(LARGEUR_PLAN * 5 / 8), Math.floor(LARGEUR_PLAN) - taille);
                posY = genererEntier(Math.floor(HAUTEUR_PLAN * 3 / 8) - taille,
                    Math.floor(HAUTEUR_PLAN * 5 / 8));
                break;
            }
            case 4 : {
                posX = genererEntier(0, Math.floor(LARGEUR_PLAN) - taille);
                posY = genererEntier(Math.floor(HAUTEUR_PLAN * 5 / 8), Math.floor(HAUTEUR_PLAN) - taille);
                break;
            }
        }
    } else {
        posX = x;
        posY = y;
    }

    // Direction dirX ou dirY initialisée à -1 ou 1, l'autre direction est initialisée au hasard entre -4 et 4.
    let hasard = genererEntier(0, 1);
    if (hasard === 1) {
        dirX = (genererEntier(0, 1) === 0 ? -1 : 1);
        dirY = genererEntier(-4, 4);
    } else {
        dirY = (genererEntier(0, 1) === 0 ? -1 : 1);
        dirX = genererEntier(-4, 4);
    }

    // Vitesse
    if (v === undefined) {
        vitesse = genererEntier(VITESSE_MAX, VITESSE_MIN);
    } else {
        vitesse = v;
    }

    // On initialise finalement les propriétés de l'objet avec les valeurs reçues ou calculées.
    this.taille = taille;
    this.X = posX;
    this.Y = posY;
    this.deltaX = dirX;
    this.deltaY = dirY;
    this.vitesse = vitesse;
    this.domEnnemi = document.createElement("div");
    this.enMouvement = null;

    this.domEnnemi.className = CSS_CLASS_ENNEMI;
    this.domEnnemi.style.width = this.taille + "px";
    this.domEnnemi.style.height = this.taille + "px";
    this.domEnnemi.style.left = this.X + "px";
    this.domEnnemi.style.top = this.Y + "px";

    plan.ajouterEnnemi(this);
    lesEnnemis.push(this);
}

/*
    Méthode qui permet d'initier le mouvement de l'ennemi s'il n'est pas déjà en mouvement.
*/
Ennemi.prototype.demarre = function () {
    if (this.enMouvement === null) {
        let unEnnemi = this;
        this.enMouvement = setTimeout(bougerEnnemi, 0, unEnnemi);
    }
}

/*
    Fonction qui permet de générer nb objets "Ennemi" et les retourner
    dans un tableau.
*/
function genererEnnemis(nb) {
    let lesEnnemis = [];
    for (let i = 0; i < nb; i++) {
        lesEnnemis.push(new Ennemi());
    }
    return lesEnnemis;
}

/*
    Fonction qui permet de déplacer l'ennemi dans sa direction actuelle de déplacement.
    Si sa nouvelle position calculée déborde du plan de jeu, il est positionné sur la frontière
    et la direction est inversée.
 */
function bougerEnnemi(unEnnemi) {
    const LARGEUR_PLAN = getLargeurDomObject("planJeu");
    const HAUTEUR_PLAN = getHauteurDomObject("planJeu");

    unEnnemi.X += unEnnemi.deltaX;
    unEnnemi.Y += unEnnemi.deltaY;
    if (unEnnemi.X <= 0) {
        unEnnemi.deltaX *= -1;
        unEnnemi.X = 0;
    } else if (unEnnemi.X >= (LARGEUR_PLAN - unEnnemi.taille)) {
        unEnnemi.deltaX *= -1;
        unEnnemi.X = LARGEUR_PLAN - unEnnemi.taille;
    }
    if (unEnnemi.Y <= 0) {
        unEnnemi.deltaY *= -1;
        unEnnemi.Y = 0;
    } else if (unEnnemi.Y >= (HAUTEUR_PLAN - unEnnemi.taille)) {
        unEnnemi.deltaY *= -1;
        unEnnemi.Y = HAUTEUR_PLAN - unEnnemi.taille;
    }
    unEnnemi.domEnnemi.style.left = unEnnemi.X + "px";
    unEnnemi.domEnnemi.style.top = unEnnemi.Y + "px";

    // Rappel de la fonction pour bouger de nouveau dans quelques millisecondes (selon la vitesse de cet ennemi).
    unEnnemi.enMouvement = setTimeout(bougerEnnemi, unEnnemi.vitesse, unEnnemi);
}

/*
    Fonction qui démarre ou arrête le mouvement des ennemis.
*/
function animerEnnemis(doitBouger) {
    if (doitBouger) {
        for (let i = 0; i < lesEnnemis.length; i++) {
            lesEnnemis[i].demarre();

        }
    } else {
        for (let i = 0; i < lesEnnemis.length; i++) {
            clearTimeout(lesEnnemis[i].enMouvement);
            lesEnnemis[i].enMouvement = null;
        }
    }
}

/* Ajoutez ci-dessous les fonctions qui vous permettront de gérer les collisions entre l'acteur et les ennemis */

function collision() {
    for (let i = 0; i < lesEnnemis.length; i++) {
        let distance;

        if (lesEnnemis[i] != null) {
            let topActeur = getPositionY();
            let leftActeur = getPositionX();
            let topEnnemi = parseInt(lesEnnemis[i].domEnnemi.style.top);
            let leftEnnemi = parseInt(lesEnnemis[i].domEnnemi.style.left);

            distance = (Math.sqrt(((leftActeur - leftEnnemi) * (leftActeur - leftEnnemi))
                    + ((topActeur - topEnnemi) * (topActeur - topEnnemi)))
                - (parseInt(acteur.domActeur.style.width)/2) - (parseInt(lesEnnemis[i].domEnnemi.style.width)/2));

            if (distance <= 0) {
                finPartie();
            }
        }
    }
}
