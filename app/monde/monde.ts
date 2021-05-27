import read from "readline-sync";
import { Attaque } from "../attaque/attaque";
import { BasicAttaque } from "../attaque/basicAttaque";
import { Classe } from "../classes/classe";
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
        let nomClassList : string[] = [] ;
        Monde.classList.forEach(classe =>{
            nomClassList.push(classe.nom);
        });
        let classe = read.keyInSelect(nomClassList)

        return new Personnage(150, 10, nom, Monde.classList[classe]);

    }

    /**
    * Créer un monstre avec tous ses attributs
    * @returns - un monstre
    **/

    static monstreFactory = (): Monstre => {

        return new Monstre(75, 4, Monde.genererNom());

    }

    /**
     * Cette méthode créer et retourne une liste d'attaque
     */
    static attaqueListFactory = () : Attaque[] => {


    let attaque1 : Attaque = new BasicAttaque("Attaque légère", 10, 90);
    let attaque2 : Attaque = new BasicAttaque("Attaque légère", 15, 80);
    let attaque3 : Attaque = new BasicAttaque("Attaque légère", 30, 40);
    return [attaque1, attaque2, attaque3];

    }

    static classeListFactory = () : Classe[] => {

    let classe1 : Classe = new Classe("Paladin", Monde.attaqueListFactory());
    let classe2 : Classe = new Classe("Archer", Monde.attaqueListFactory());
    let classe3 : Classe = new Classe("Mage", Monde.attaqueListFactory());
    return [classe1, classe2, classe3];

    }
    private static classList : Classe[] = Monde.classeListFactory();
 
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