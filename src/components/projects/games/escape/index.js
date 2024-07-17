"use strict";

// window.addEventListener("load", initIndex);
$(window).ready(initIndex);


function initIndex() {
    ajouterListener();
}

function ajouterListener() {
    // Listener déclenché lorsqu'une zone collapsible de la page a été affichée.
    // document.getElementById("")


    $(".collapse").on("shown.bs.collapse", function (event) {

    });

    // Listener déclenché lorsqu'une fenêtre modale vient de s'afficher.
    $('#dlgErrModal').on('shown.bs.modal', function () {

    });

    // Listener déclenché lorsqu'une fenêtre modale vient de se refermer.
    $('#dlgErrModal').on('hidden.bs.modal', function () {

    });

}

$(document).ready(function (){

    $("#user").focus();

    if (estAuthentifie()){
        $("#btnDeco").attr("disabled", false);
    }
    else {
        $("#btnDeco").attr("disabled", true);

        $(document).keydown(function (ev) {
            switch (ev.key) {
                case "Enter":
                    if ($("#user").val().trim().length > 0){
                        validerConnexion();
                    }
                    else {
                        validerInscription();
                    }
                    break;
            }
        })
    }

    $("#btnCo").click(function (){
        validerConnexion();
    });

    $("#btnInscrip").click(function (){
        validerInscription();
    });

})

let nomUtilisateur, pseudo, passwd;
let utilisateur;

function validerConnexion() {
    utilisateur = JSON.parse(localStorage.getItem(CLE_PREFIXE_ABONNE + $("#user").val().trim()));

    if (coUtilisateur() && coMdp()) {
        connecterUtilisateur(utilisateur);
    }
}

function coUtilisateur(){
    if (utilisateur != null){
        $("#user").css("background-color", "green");
        return true;
    }
    else {
        connexionInvalide("Le nom d'utilisateur n'existe pas");
        $("#user").css("background-color", "red");

        $("#sortieDlg").focus();

        $("#sortieDlg").on("click", function (){
            $("#user").focus();
        })
        return false;
    }
}

function coMdp(){
    let motPasse = $("#mdp").val().trim();

    if (utilisateur != null){
        if (utilisateur.motDePasse === motPasse){
            return true;
        }
        else {
            connexionInvalide("Le mot de passe est invalide");
            $("#mdp").css("background-color", "red");

            $("#sortieDlg").focus();

            $("#sortieDlg").on("click", function (){
                $("#mdp").focus();
            })
            return false;
        }
    }
}

function connexionInvalide(msg){
    messageUsage("Entrer Invalide", msg);
}

function validerInscription() {
    let userValide, pseudoValide, mdpValide;

    mdpValide = valideMdp();
    pseudoValide = validePseudo();
    userValide = valideUser();


    if (userValide){
        $("#userIn").css("background-color", "green");
    }
    if (pseudoValide){
        $("#pseudo").css("background-color", "green");
    }
    if (mdpValide){
        $("#mdpIn").css("background-color", "green");
        $("#mdpInConf").css("background-color", "green");
    }

    if (userValide && pseudoValide && mdpValide){
        ConstructUtilisateur($("#userIn").val().trim(), $("#pseudo").val().trim(), $("#mdpIn").val().trim());
    }
}

function valideUser() {
    nomUtilisateur = $("#userIn").val().trim();

    if (utilisateurExistant(nomUtilisateur)){
        nomUtilisateurInvalide("Ce nom d'utilisateur est déjà utilisé. Veuillez en choisir un autre");
        return false;
    }
    else if (nomUtilisateur.length < 3){
        nomUtilisateurInvalide("Ce nom d'utilisateur est trop court");
        return false;
    }
    else if (nomUtilisateur.length > 10){
        nomUtilisateurInvalide("Ce nom d'utilisateur est trop long");
        return false;
    }

    for (let i=0; i<nomUtilisateur.length; i++){
        if ((nomUtilisateur.charAt(i) < 'a' || nomUtilisateur.charAt(i) > 'z') &&
            (nomUtilisateur.charAt(i) < 'A' || nomUtilisateur.charAt(i) > 'Z') &&
            !(nomUtilisateur.charAt(i) > 0 || nomUtilisateur.charAt(i) < 9)){

            nomUtilisateurInvalide("Caractère illégale dans le nom d'utilisateur");
            return false;
        }
    }

    return true;
}

function validePseudo(){
    if ($("#pseudo").val().trim().length === 0){

        messageUsage("pseudonyme", "Le champ pseudonyme est vide");

        $("#sortieDlg").focus();

        $("#pseudo").css("background-color", "red");
        $("#sortieDlg").on("click", function (){
            $("#pseudo").focus();
        })
        return false;
    }

    return true;
}

function valideMdp() {
    passwd = $("#mdpIn").val().trim();
    if (passwd.length === 0){
        mdpInvalide("Veuillez mettre un mot de passe");
        return false;
    }

    for (let i=0; i<passwd.length; i++){
        if (passwd.charAt(i) < 'a' || passwd.charAt(i) > 'z'){
            mdpInvalide("Caractère illégale dans le mot de passe");
            return false;
        }
    }

    if (passwd.charAt(0) !== passwd.charAt(passwd.length-1)){
        mdpInvalide("Le premier et le dernier caractère doit être identique");
        return false;
    }

    if (passwd !== $("#mdpInConf").val().trim()){
        mdpInvalide("Mot de passe et mot de passe de confirmation non identique");
        return false;
    }

    return true;
}

function nomUtilisateurInvalide(msg){
    messageUsage("Nom d'utilisateur", msg);

    $("#sortieDlg").focus();

    $("#userIn").css("background-color", "red");

    $("#sortieDlg").on("click", function (){
        $("#userIn").focus();
    })

}

function mdpInvalide(msg){
    messageUsage("Mot de passe Invalide", msg);

    $("#sortieDlg").focus();


    $("#mdpIn").css("background-color", "red");
    $("#mdpInConf").css("background-color", "red");

    $("#sortieDlg").on("click", function (){
        $("#mdpIn").focus();
    })
}

