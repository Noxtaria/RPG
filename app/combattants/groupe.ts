import { Combattant } from "./combattant";

export class Groupe {

    private _combattants: Combattant[];
   

    constructor(combattants : Combattant[]) {

        this._combattants = combattants;

    }

    /**
     *  Cette méthode ajoute un combattant à la liste des combattants 
     */

     addCombattant = (combattant : Combattant): void => {

        this._combattants.push(combattant);

    }
    /**
     * Cette méthode vérifie que tous les combattants du groupe sont morts
     * @returns true si tous les combattants sont morts
     */
    estMort = () : boolean => {

        // Parcourir les listes des combattants
        // Si un des combattant est vivant, retourner false
        // Sinon retourner true si ils sont tous mort

        let result : boolean = true;

        for(let i : number = 0; i < this._combattants.length; i++){
            if(this._combattants[i].pointDeVie > 0){
                result = false;
                break;
            }
        }
        return result;
    }

    public get combattants(): Combattant[] {
        return this._combattants;
    }
    public set combattants(value: Combattant[]) {
        this._combattants = value;
    }
 
}