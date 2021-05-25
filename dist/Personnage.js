"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnage = void 0;
var Personnage = /** @class */ (function () {
    function Personnage(pointDeVie, degats, nom) {
        this._pointDeVie = pointDeVie;
        this._degats = degats;
        this._nom = nom;
    }
    Object.defineProperty(Personnage.prototype, "pointDeVie", {
        get: function () {
            return this._pointDeVie;
        },
        set: function (value) {
            this._pointDeVie = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "degats", {
        get: function () {
            return this._degats;
        },
        set: function (value) {
            this._degats = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Personnage;
}());
exports.Personnage = Personnage;
