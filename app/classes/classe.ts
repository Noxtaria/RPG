import { Attaque } from "../attaque/attaque";

export class Classe {

    private _nom: string;
    
    private _attaques: Attaque[];

    constructor(nom: string, attaques : Attaque[]) {

        this._nom = nom;
        this._attaques = attaques;

    }

    /**
     * Récupère une attaque aléatoire de la liste d'attaques et la renvoie
     */
    getAttaque = () : Attaque => {

        return this._attaques[Math.round(Math.random() * (this.attaques.length -1))];

    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get attaques(): Attaque[] {
        return this._attaques;
    }
    public set attaques(value: Attaque[]) {
        this._attaques = value;
    }
}