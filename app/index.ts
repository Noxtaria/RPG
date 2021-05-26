import { Monde } from "./monde/monde";
import {Personnage} from "./combattants/personnage"; 
import { Monstre } from "./combattants/monstre";


let personnage1 : Personnage = Monde.personnageFactory();
let monstre1 : Monstre = Monde.monstreFactory();
let nomMonstre : String = Monde.genererNom();

    console.log(personnage1);
    console.log(monstre1);
    console.log(nomMonstre)

    
