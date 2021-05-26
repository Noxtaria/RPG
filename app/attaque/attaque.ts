export interface Attaque {

    nom : string;
    degats : number;

    // Nombre compris entre 0 et 100
    chanceToucher: number;


    /**
     * Renvoie les dégâts de l'attaque si chanceToucher est
     *  inférieur à un nombre aléatoire
     */
    lancerAttaque(): number;
}