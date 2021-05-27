import { Attaque } from "./attaque";

export class BasicAttaque implements Attaque {

    private _nom: string;
    private _degats: number;
    private _chanceToucher: number;


    public constructor(nom: string, degats: number, chanceToucher: number) {

        this._nom = nom;
        this._degats = degats;
        this._chanceToucher = chanceToucher;

    }

    lancerAttaque(): number {
        let returnDegats: number = 0;

        let rand: number = Math.random() * 100;

        if (this._chanceToucher >= rand){

            returnDegats = this.degats;

        } else {

            console.log(`echec de l'attaque`);

        }

        return returnDegats;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }

    public get chanceToucher(): number {
        return this._chanceToucher;
    }
    public set chancesToucher(value: number) {       
        if (value >= 0 && value <= 100) {

            this._chanceToucher = value;

        } else {

            this._chanceToucher = 0;
        }
    }

}