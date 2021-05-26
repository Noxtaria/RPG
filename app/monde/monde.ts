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

        return new Monstre(75, 4, Monde.genererNom()); 

    }

/**
 * Génerer un nom de Monstre Aléatoire
 */

    static genererNom = () : string => {

        let debutNom : string[] = ["chat", "chien", "dragon", "fee"]
        let finNom : string[]= [" méchant", " de feu", " de la mort"]

        let nomMonstre = debutNom[Math.round(Math.random() * (debutNom.length-1))] +
                           finNom[Math.round(Math.random() * (finNom.length-1))];

        return nomMonstre;
    }
    

}