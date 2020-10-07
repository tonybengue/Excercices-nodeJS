// tableau 
var tab = [3, 2, "coucou",78, [1,2,3], 8];
console.log(tab);
console.log(tab[2]);
console.log(tab[4][1]);

console.log("--------------------");

/**
 * Objet sans prototype de référence
 * Avec propriétés
 * Methodes
 * this fait référence à l'objet courant
 */
var obj = {
    x : 8,
    message: "Salut JCVD",
    tab: ['a','b','c', 'd'],
    
    methode: function() {
        console.log(this.message);
        console.log(this.tab[1]);
    }
}

// Appel de la méthode
obj.methode();