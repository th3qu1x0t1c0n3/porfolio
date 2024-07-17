"use strict";

const CLE_AUTHENTIFIE = "ABONNEE_AUTHENTIFIE";
const CLE_PREFIXE_ABONNE = "ABONNE_";

/*
    Pour les tests, on créer déjà 3 abonnés (hardcoding).
    Éventuellement, les abonnés seront créés par une fonction constructeur.
*/
function initAbonnesDepart() {
    let user = null;
    if (typeof (localStorage) != "undefined") {
        user = {nom:"user1", motDePasse:"alibaba", pseudonyme:"Aladin"};
        localStorage.setItem(CLE_PREFIXE_ABONNE + user.nom, JSON.stringify(user));

        user = {nom:"user2", motDePasse:"baobab", pseudonyme:"Ben"};
        localStorage.setItem(CLE_PREFIXE_ABONNE + user.nom, JSON.stringify(user));

        user = {nom:"user3", motDePasse:"caoutchouc", pseudonyme:"Carlita"};
        localStorage.setItem(CLE_PREFIXE_ABONNE + user.nom, JSON.stringify(user));
    }
}

function ConstructAbonne(nom, pseudo, mdp) {
    this.nom = nom;
    this.pseudonyme = pseudo;
    this.mdp = mdp;
}

function ConstructUtilisateur(nom, pseudo, mdp){
    let utilisateur = new ConstructAbonne(nom, pseudo, mdp);

    if (typeof localStorage != "undefined") {
        localStorage.setItem(CLE_PREFIXE_ABONNE + utilisateur.nom, JSON.stringify(utilisateur));
        connecterUtilisateur(utilisateur);
    }
    return utilisateur;
}

function connecterUtilisateur(utilisateur){
    if (typeof sessionStorage != "undefined"){
        sessionStorage.setItem(CLE_AUTHENTIFIE, JSON.stringify(utilisateur));
        connexionUtilisateur();

        messageUsage("Connexion", "Connexion réussi! Bienvenue " + utilisateur.pseudonyme);
        $("#sortieDlg").click(function(){
            naviguerPage(PAGE_CATALOGUE);
        })
    }
}

function deconnexion() {
    if (typeof sessionStorage != "undefined") {

        sessionStorage.removeItem(CLE_AUTHENTIFIE);
        $("#utilisateur").text("Bienvenue utilisateur inconnue");
        $("#connecte").hide();

        messageUsage("Déconnexion", "Vous être maintenant déconnecté");
        $("#sortieDlg").click(function () {
            naviguerPage(PAGE_ACCUEIL);
        })
    }

    $("#btnInscrip").attr("disabled", false);
    $("#btnAnnule").attr("disabled", false);
    $("#btnCo").attr("disabled", false);
}

function utilisateurExistant(nomUtilisateur){
    if(typeof localStorage != "undefined"){
        return localStorage.getItem(CLE_PREFIXE_ABONNE + nomUtilisateur) !== null;
    }
}

function estAuthentifie(){
    return true;
    if (typeof sessionStorage != "undefined"){
        if (sessionStorage.length > 0){
            if (JSON.parse(sessionStorage.getItem(CLE_AUTHENTIFIE)) != null){
                return true;
            }
        }
        return false;
    }
}