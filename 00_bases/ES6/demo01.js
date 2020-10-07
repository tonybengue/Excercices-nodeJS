/**
 * Fonctions
 */

 // Fonction nommée
function f1() {
    console.log("Je suis la fonction : F1");
}
// Fonction anonyme
var f2 = function() {
    console.log("Je suis la fonction : F2");
}

f1();
f2();

// Stockage dans une variable
var f2bis = f2;
f2bis();

// Fonction qui retourne une autre fonction
function generateur(ajout) {
    return function (val) {
        return val + ajout;
    }
}
var add5 = generateur(5);
console.log(add5('Le résultat est : ' + 6));