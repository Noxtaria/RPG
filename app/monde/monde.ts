import read from "readline-sync";
import { AbstractCombattant } from "../combattants/abstractCombattant";
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

    static combat = (personnage: Personnage, monstre: Monstre): void => {

        let tour = 1;
        while (personnage.pointDeVie >= 0 && monstre.pointDeVie >=0) {
            if (tour % 2) {

                console.log(`${personnage.nom} attaque ${monstre.nom} et inflige ${personnage.degats} point de degat`);
                monstre.pointDeVie -= personnage.degats;
                console.log(`Il reste à ${monstre.nom} ${monstre.pointDeVie} pdv`);

            } else {

                console.log(`${monstre.nom} attaque ${personnage.nom} et inflige ${monstre.degats} point de degat`); 
                personnage.pointDeVie -= monstre.degats;
                console.log(`Il reste à ${personnage.nom} ${personnage.pointDeVie} pdv`);
            }
            tour++;
        }
        Monde.afficherVainqueur(personnage, monstre)
    }
    
    static afficherVainqueur = (personnage : Personnage, monstre: Monstre) => {

        if(personnage.pointDeVie > 0){
            console.log("Vous avez gagné")
        } else {
            console.log("Vous êtes mort")
        }

    }
}