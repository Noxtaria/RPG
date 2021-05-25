import { Monde } from "./monde/monde";
import {Personnage} from "./combattants/personnage"; 
import { Monstre } from "./combattants/monstre";


let personnage1 : Personnage = Monde.personnageFactory();
let monstre1 : Monstre = Monde.monstreFactory();

    console.log(personnage1);
    console.log(monstre1);

    
