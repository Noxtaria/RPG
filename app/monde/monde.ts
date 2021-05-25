import  read  from "readline-sync";
import { Monstre } from "../combattants/monstre";
import { Personnage } from "../combattants/personnage";

export class Monde {

/**
* Créer un personnage avec tous ses attributs
* @returns - un personnage
**/

    static personnageFactory = () : Personnage => {

    let nom = read.question("Saisir le nom du Heros ! : ");

    return new Personnage(150, 10, nom); 

}

/**
* Créer un monstre avec tous ses attributs
* @returns - un monstre
**/

static monstreFactory = () : Monstre => {

    let nom = read.question("Saisir le nom du Monstre ! : ");

    return new Monstre(75, 4, nom); 

}

}