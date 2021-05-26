import { Monde } from "./monde/monde";
import {Personnage} from "./combattants/personnage"; 
import { Monstre } from "./combattants/monstre";


let personnage1 : Personnage = Monde.personnageFactory();
let monstre : Monstre = Monde.monstreFactory();

Monde.combat(personnage1, monstre )





    
