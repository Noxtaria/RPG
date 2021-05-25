import  read  from "readline-sync";
import { AbstractCombattant } from "./abstractCombattant";

export class Monstre extends AbstractCombattant {

    constructor(pointDeVie: number, degats : number, nom : string){

        super(pointDeVie, degats, nom);

    }

    
}