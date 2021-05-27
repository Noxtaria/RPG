"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAttaque = void 0;
var BasicAttaque = /** @class */ (function () {
    function BasicAttaque(nom, degats, chanceToucher) {
        this._nom = nom;
        this._degats = degats;
        this._chanceToucher = chanceToucher;
    }
    BasicAttaque.prototype.lancerAttaque = function () {
        var returnDegats = 0;
        var rand = Math.random() * 100;
        if (this._chanceToucher >= rand) {
            returnDegats = this.degats;
        }
        else {
            console.log("echec de l'attaque");
        }
        return returnDegats;
    };
    Object.defineProperty(BasicAttaque.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicAttaque.prototype, "degats", {
        get: function () {
            return this._degats;
        },
        set: function (value) {
            this._degats = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicAttaque.prototype, "chanceToucher", {
        get: function () {
            return this._chanceToucher;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicAttaque.prototype, "chancesToucher", {
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._chanceToucher = value;
            }
            else {
                this._chanceToucher = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return BasicAttaque;
}());
exports.BasicAttaque = BasicAttaque;
