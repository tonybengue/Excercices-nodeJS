function somme (x, y) {
    return x + y;
}

let soustraction = (x,y) => x-y;
let multiplication = (x,y) => x*y;

class Prof {
    constructor(nom, bureau) {
        this.nom = nom;
        this.bureau = bureau;
    }
}

export {
    somme, soustraction, Prof
}