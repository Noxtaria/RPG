"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCombattant = void 0;
var AbstractCombattant = /** @class */ (function () {
    function AbstractCombattant(pointDeVie, degats, nom) {
        this._pointDeVie = pointDeVie;
        this._degats = degats;
        this._nom = nom;
    }
    Object.defineProperty(AbstractCombattant.prototype, "pointDeVie", {
        get: function () {
            return this._pointDeVie;
        },
        set: function (value) {
            this._pointDeVie = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractCombattant.prototype, "degats", {
        get: function () {
            return this._degats;
        },
        set: function (value) {
            this._degats = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractCombattant.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractCombattant;
}());
exports.AbstractCombattant = AbstractCombattant;
