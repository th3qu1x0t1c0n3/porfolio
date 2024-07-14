"use strict";

window.addEventListener("load", initCatalogue);
// $(document).ready(initCatalogue);

const LISTE_JEUX = loadListeJeux();

function Jeu(pNom, pImgFile, pUrl, pAction) {
    this.nom = pNom;
    this.imgFile = pImgFile;
    this.url = pUrl;
    this.action = pAction;
}

function loadListeJeux() {
    let tabJeux = [];
    tabJeux.push(new Jeu("Sauve qui peut", "sauveQuiPeut.png", "sauveQuiPeut.html", "sauveQuiPeut"));
    tabJeux.push(new Jeu("Pac Man", "pac-man-peach-retro-games-hd-wallpaper-preview-200.jpg", "enMaintenance.html", "na"));
    tabJeux.push(new Jeu("Duck Hunt", "35841-posts.article_lg-200.jpg", "enMaintenance.html", "na"));
    tabJeux.push(new Jeu("Pong", "35828-posts.article_lg-200.jpg", "enMaintenance.html", "na"));
    tabJeux.push(new Jeu("Chucky Egg", "35834-posts.article_lg-200.jpg", "enMaintenance.html", "na"));
    tabJeux.push(new Jeu("Paperboy", "35829-posts.article_lg-200.jpg", "enMaintenance.html", "na"));

    // La page du catalogue doit s'afficher correctement même si l'on ajoute d'autres jeux dans le tableau.
    /*
        tabJeux.push(new Jeu("Pac Man", "pac-man-peach-retro-games-hd-wallpaper-preview-200.jpg", "#", "na"));
        tabJeux.push(new Jeu("Duck Hunt", "35841-posts.article_lg-200.jpg", "#", "na"));
        tabJeux.push(new Jeu("Pong", "35828-posts.article_lg-200.jpg", "#", "na"));
        tabJeux.push(new Jeu("Chucky Egg", "35834-posts.article_lg-200.jpg", "#", "na"));
        tabJeux.push(new Jeu("Paperboy", "35829-posts.article_lg-200.jpg", "#", "na"));
    */
    return tabJeux;
}

function initCatalogue() {
    creerCatalogue()
    if (!estAuthentifie()){
        messageUsage("Erreur d'authentification","Vous devez être authentifié pour jouer à un jeu");

        $("#sortieDlg").click(function(){
            $("#dlgErrModal").modal("hide");
            naviguerPage(PAGE_ACCUEIL);
        })
    }
}

function creerCatalogue() {

    let row = document.createElement("div");
    row.className = "row mt-3"

    for (let i=0; i<LISTE_JEUX.length; i++){
        let carte = document.createElement("div");
        let imageJeux = document.createElement("img");
        let titre = document.createElement("a");
        let pied = document.createElement("div");

        carte.className = "col-lg-3 card p-0 ml-5 mr-3 mt-3 mb-5";
        imageJeux.className = "card-body p-0";
        titre.className = "text-dark";
        pied.className = "card-footer text-center";

        imageJeux.src = "./img/"+LISTE_JEUX[i].imgFile;
        imageJeux.alt = LISTE_JEUX[i].nom;
        carte.href = LISTE_JEUX[i].url;

        imageJeux.id = LISTE_JEUX[i].action;

        titre.innerHTML = LISTE_JEUX[i].nom;
        titre.href = LISTE_JEUX[i].url;

        carte.appendChild(imageJeux);
        carte.appendChild(pied);
        pied.appendChild(titre);
        row.appendChild(carte);

        imageJeux.addEventListener("click", versJeux)

        document.getElementById("cata").appendChild(row);
    }
    function versJeux(ev){
        console.log(ev);
        if (ev.target.id === "sauveQuiPeut"){
            location.assign("sauveQuiPeut.html")
        }
        else {
            location.assign("enMaintenance.html");
        }
    }

}
