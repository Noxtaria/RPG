"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monde = void 0;
var readline_sync_1 = __importDefault(require("readline-sync"));
var monstre_1 = require("../combattants/monstre");
var personnage_1 = require("../combattants/personnage");
var Monde = /** @class */ (function () {
    function Monde() {
    }
    /**
    * Créer un personnage avec tous ses attributs
    * @returns - un personnage
    **/
    Monde.personnageFactory = function () {
        var nom = readline_sync_1.default.question("Saisir le nom du Heros ! : ");
        return new personnage_1.Personnage(150, 10, nom);
    };
    /**
    * Créer un monstre avec tous ses attributs
    * @returns - un monstre
    **/
    Monde.monstreFactory = function () {
        return new monstre_1.Monstre(75, 4, Monde.genererNom());
    };
    /**
     * Génerer un nom de Monstre Aléatoire
     * @returns - nom du nomstre
     */
    Monde.genererNom = function () {
        var debutNom = ["chat", "chien", "dragon", "fee"];
        var finNom = [" méchant", " de feu", " de la mort"];
        var nomMonstre = debutNom[Math.round(Math.random() * (debutNom.length - 1))] +
            finNom[Math.round(Math.random() * (finNom.length - 1))];
        return nomMonstre;
    };
    /**
     * Génerer un Combat
     */
    Monde.combat = function (personnage, monstre) {
        var tour = 1;
        while (personnage.pointDeVie >= 0 && monstre.pointDeVie >= 0) {
            if (tour % 2) {
                console.log(personnage.nom + " attaque " + monstre.nom + " et inflige " + personnage.degats + " point de degat");
                monstre.pointDeVie -= personnage.degats;
                console.log("Il reste \u00E0 " + monstre.nom + " " + monstre.pointDeVie + " pdv");
            }
            else {
                console.log(monstre.nom + " attaque " + personnage.nom + " et inflige " + monstre.degats + " point de degat");
                personnage.pointDeVie -= monstre.degats;
                console.log("Il reste \u00E0 " + personnage.nom + " " + personnage.pointDeVie + " pdv");
            }
            tour++;
        }
        Monde.afficherVainqueur(personnage, monstre);
    };
    Monde.afficherVainqueur = function (personnage, monstre) {
        if (personnage.pointDeVie > 0) {
            console.log("Vous avez gagné");
        }
        else {
            console.log("Vous êtes mort");
        }
    };
    return Monde;
}());
exports.Monde = Monde;
