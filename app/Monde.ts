import  read  from "readline-sync";
import { Personnage } from "./Personnage";

export class Monde {

/**
* Créer un personnage avec tous ses attributs
* @returns - un personnage
**/

    static personnageFactory = () : Personnage => {

    let nom = read.question("Quel est votre nom ?");

    return new Personnage(150, 10, nom); 

}

}