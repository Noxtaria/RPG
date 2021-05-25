"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monde = void 0;
var readline_sync_1 = __importDefault(require("readline-sync"));
var Personnage_1 = require("./Personnage");
var Monde = /** @class */ (function () {
    function Monde() {
    }
    /**
    * Créer un personnage avec tous ses attributs
    * @returns - un personnage
    **/
    Monde.personnageFactory = function () {
        var nom = readline_sync_1.default.question("Quel est votre nom ?");
        return new Personnage_1.Personnage(150, 10, nom);
    };
    return Monde;
}());
exports.Monde = Monde;
