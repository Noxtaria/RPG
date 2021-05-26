import { Combattant } from "./combattant";
import { Personnage } from "./personnage";

export abstract class AbstractCombattant implements Combattant {

    private _pointDeVie: number;
    private _degats: number; 
    private _nom: string;


    public constructor(pointDeVie: number, degats: number, nom: string){

        this._pointDeVie = pointDeVie;
        this._degats = degats;
        this._nom = nom;

    }
    attaquer(adversaire: Combattant): void {
      
        console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.degats}`)
        adversaire.defendre(this.degats);
        console.log(`Il reste à ${adversaire.nom} ${adversaire.pointDeVie} pdv.`)
        
    }


    defendre(degats: number): void {

        this.pointDeVie -= degats;

    }

    public get pointDeVie(): number {
        return this._pointDeVie;
    }
    public set pointDeVie(value: number) {
        this._pointDeVie = value;
    }

    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

}