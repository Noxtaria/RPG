"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monde_1 = require("./monde/monde");
var personnage1 = monde_1.Monde.personnageFactory();
var monstre = monde_1.Monde.monstreFactory();
monde_1.Monde.combat(personnage1, monstre);
