"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monde = void 0;
var readline_sync_1 = __importDefault(require("readline-sync"));
var basicAttaque_1 = require("../attaque/basicAttaque");
var classe_1 = require("../classes/classe");
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
        var nomClassList = [];
        Monde.classList.forEach(function (classe) {
            nomClassList.push(classe.nom);
        });
        var classe = readline_sync_1.default.keyInSelect(nomClassList);
        return new personnage_1.Personnage(150, 10, nom, Monde.classList[classe]);
    };
    /**
    * Créer un monstre avec tous ses attributs
    * @returns - un monstre
    **/
    Monde.monstreFactory = function () {
        return new monstre_1.Monstre(75, 4, Monde.genererNom());
    };
    /**
     * Cette méthode créer et retourne une liste d'attaque
     */
    Monde.attaqueListFactory = function () {
        var attaque1 = new basicAttaque_1.BasicAttaque("Attaque légère", 10, 90);
        var attaque2 = new basicAttaque_1.BasicAttaque("Attaque légère", 15, 80);
        var attaque3 = new basicAttaque_1.BasicAttaque("Attaque légère", 30, 40);
        return [attaque1, attaque2, attaque3];
    };
    Monde.classeListFactory = function () {
        var classe1 = new classe_1.Classe("Paladin", Monde.attaqueListFactory());
        var classe2 = new classe_1.Classe("Archer", Monde.attaqueListFactory());
        var classe3 = new classe_1.Classe("Mage", Monde.attaqueListFactory());
        return [classe1, classe2, classe3];
    };
    Monde.classList = Monde.classeListFactory();
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
    Monde.combat = function (combattant1, combattant2) {
        var tour = 1;
        while (combattant1.pointDeVie >= 0 && combattant2.pointDeVie >= 0) {
            if (tour % 2) {
                combattant1.attaquer(combattant2);
            }
            else {
                combattant2.attaquer(combattant1);
            }
            tour++;
        }
        Monde.afficherVainqueur(combattant1, combattant2);
    };
    Monde.afficherVainqueur = function (combattant1, combattant2) {
        if (combattant1.pointDeVie > 0) {
            console.log("Vous avez gagné");
        }
        else {
            console.log("Vous êtes mort");
        }
    };
    return Monde;
}());
exports.Monde = Monde;
