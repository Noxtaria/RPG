import  * as read  from "readline-sync";
import { Classe } from "../classes/classe";
import { AbstractCombattant } from "./abstractCombattant";

export class Personnage extends AbstractCombattant {

    private _classe: Classe;
    

    constructor(pointDeVie: number, degats : number, nom : string, classe : Classe){

        super(pointDeVie, degats, nom);
        this._classe = classe;

    }

    public get classe(): Classe {
        return this._classe;
    }
    public set classe(value: Classe) {
        this._classe = value;
    }
}