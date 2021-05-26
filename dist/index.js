"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monde_1 = require("./monde/monde");
var personnage1 = monde_1.Monde.personnageFactory();
var monstre1 = monde_1.Monde.monstreFactory();
var nomMonstre = monde_1.Monde.genererNom();
console.log(personnage1);
console.log(monstre1);
console.log(nomMonstre);
