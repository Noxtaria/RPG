import  * as read  from "readline-sync";
import { Attaque } from "../attaque/attaque";
import { BasicAttaque } from "../attaque/basicAttaque";
import { Classe } from "../classes/classe";
import { AbstractCombattant } from "./abstractCombattant";
import { Combattant } from "./combattant";

export class Personnage extends AbstractCombattant {

    private _classe: Classe;
    

    constructor(pointDeVie: number, degats : number, nom : string, classe : Classe){

        super(pointDeVie, degats, nom);
        this._classe = classe;

    }

    attaquer = (adversaire : Combattant) : void => {

        let attaque : Attaque = this._classe.getAttaque();
        let degats : number = Math.round(attaque.lancerAttaque() * (this.degats * 0.10));
        console.log(`${this.nom} attaque ${adversaire.nom} avec ${attaque.nom} et inflige ${degats}`);
        adversaire.defendre(degats);
    }

    public get classe(): Classe {
        return this._classe;
    }
    public set classe(value: Classe) {
        this._classe = value;
    }
}