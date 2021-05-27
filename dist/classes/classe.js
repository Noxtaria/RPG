"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
var Classe = /** @class */ (function () {
    function Classe(nom, attaques) {
        var _this = this;
        /**
         * Récupère une attaque aléatoire de la liste d'attaques et la renvoie
         */
        this.getAttaque = function () {
            return _this._attaques[Math.round(Math.random() * (_this.attaques.length - 1))];
        };
        this._nom = nom;
        this._attaques = attaques;
    }
    Object.defineProperty(Classe.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "attaques", {
        get: function () {
            return this._attaques;
        },
        set: function (value) {
            this._attaques = value;
        },
        enumerable: false,
        configurable: true
    });
    return Classe;
}());
exports.Classe = Classe;
