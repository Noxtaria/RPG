export abstract class AbstractCombattant {

    private _pointDeVie: number;
    private _degats: number; 
    private _nom: string;


    public constructor(pointDeVie: number, degats: number, nom: string){

        this._pointDeVie = pointDeVie;
        this._degats = degats;
        this._nom = nom;

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