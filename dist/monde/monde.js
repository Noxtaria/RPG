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
        var nom = readline_sync_1.default.question("Saisir le nom du Monstre ! : ");
        return new monstre_1.Monstre(75, 4, nom);
    };
    return Monde;
}());
exports.Monde = Monde;
