import { Combattant } from "./combattant";

export class Groupe {

    private _combattants: Combattant[];


    constructor(combattants : Combattant[]) {

        this._combattants = combattants;
    }

    public get combattants_1(): Combattant[] {
        return this._combattants;
    }
    public set combattants_1(value: Combattant[]) {
        this._combattants = value;
    }

}