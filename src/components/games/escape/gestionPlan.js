"use strict";

// Objet représentant le plan de jeu.
let plan = {
    domPlan: null,
};

// Méthode pour ajouter un ennemi dans le plan de jeu.
plan.ajouterEnnemi = function(ennemi) {
    this.domPlan.appendChild(ennemi.domEnnemi);
};

// Méthode pour effacer tous les ennemis du plan de jeu.
// On les supprime également du tableau global.
plan.viderPlan = function() {
    $(".ennemi").remove();
    lesEnnemis = [];
}
