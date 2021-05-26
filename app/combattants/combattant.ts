export interface Combattant {

    nom: string;
    degats: number;
    pointDeVie: number;


    /**
     * Appelle la méthode defendre de l'adversaire passé en paramètre
     * @param adversaire 
     */
    attaquer(adversaire : Combattant) : void;

    /**
     * Inflige des dégats au combattant
     * @param degats
     */
    defendre(degats : number) : void;

}