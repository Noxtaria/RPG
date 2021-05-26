import read from "readline-sync";
import { AbstractCombattant } from "../combattants/abstractCombattant";
import { Combattant } from "../combattants/combattant";
import { Monstre } from "../combattants/monstre";
import { Personnage } from "../combattants/personnage";

export class Monde {

    /**
    * Créer un personnage avec tous ses attributs
    * @returns - un personnage
    **/

    static personnageFactory = (): Personnage => {

        let nom = read.question("Saisir le nom du Heros ! : ");

        return new Personnage(150, 10, nom);

    }

    /**
    * Créer un monstre avec tous ses attributs
    * @returns - un monstre
    **/

    static monstreFactory = (): Monstre => {

        return new Monstre(75, 4, Monde.genererNom());

    }

    /**
     * Génerer un nom de Monstre Aléatoire
     * @returns - nom du nomstre
     */

    static genererNom = (): string => {

        let debutNom: string[] = ["chat", "chien", "dragon", "fee"]
        let finNom: string[] = [" méchant", " de feu", " de la mort"]

        let nomMonstre = debutNom[Math.round(Math.random() * (debutNom.length - 1))] +
            finNom[Math.round(Math.random() * (finNom.length - 1))];

        return nomMonstre;
    }

    /**
     * Génerer un Combat
     */

    static combat = (combattant1 : Combattant, combattant2 : Combattant): void => {

        let tour = 1;
        while (combattant1.pointDeVie >= 0 && combattant2.pointDeVie >=0) {
            if (tour % 2) {

                combattant1.attaquer(combattant2);

            } else {

                combattant2.attaquer(combattant1);
                
            }
            tour++;
        }
        Monde.afficherVainqueur(combattant1, combattant2);
    }
    
    static afficherVainqueur = (combattant1 : Combattant, combattant2: Combattant) => {

        if(combattant1.pointDeVie > 0){
            console.log("Vous avez gagné")
        } else {
            console.log("Vous êtes mort")
        }

    }
}