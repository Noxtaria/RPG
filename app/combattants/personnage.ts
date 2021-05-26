import  * as read  from "readline-sync";
import { AbstractCombattant } from "./abstractCombattant";

export class Personnage extends AbstractCombattant {

    
    constructor(pointDeVie: number, degats : number, nom : string){

        super(pointDeVie, degats, nom);

    }
}