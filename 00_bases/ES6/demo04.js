/*
la variable n'existe pas : Exception
    console.log(variableNonDefinie)    

Déclaration
    var nom;
Définir
    var nom = 4;

Hoisting / remontée
    Toutes les déclarations de variables sont executées "en début de scope"
Scope / portée
    par défaut il est global. La fonction courante à défaut le scope global
*/

/**
 * Var
 * La variable va être redéclarée dans cet exemple
 */
/*
var nom = "William Ruchaud";
function demo(cond) {
    if(cond) {
        var nom = "Hervé Gaudin";
    }
    return nom;
}
console.log("Point 1 : " + demo(false)); //undefined
console.log("Point 2 : " + demo(true)); //hervé gaudin
console.log("Point 3 : " + nom); //william ruchaud
*/

/**
 * Let
 * Conservation de la même variable
 */
/*
let nom = "William Ruchaud";
function demo(cond) {
    if(cond) {
        let nom = "Hervé Gaudin";
    }
    return nom;
}
console.log("Point 1 : " + demo(false)); // William Ruchaud
console.log("Point 2 : " + demo(true)); // William Ruchaud
console.log("Point 3 : " + nom); // William Ruchaud
*/

 var prof = "William Ruchaud";

 function afficherBureau() {
    //var bureau = 210;
    bureau = 210;
    console.log("Point 1 : " + prof + " " + bureau);
 }

 afficherBureau(); // 1
 console.log("Point 2 : " + prof + " " + bureau); // 2

 function profDeRobotique() {
     console.log("Point 3 : " + prof); // 4
     var prof = "Hervé Gaudin"; // undefined point 3 car la déclaration est remontée d'une ligne
     console.log("Point 4 : " + prof); // 5
}

console.log("Point 5 : " + prof); // 3 ()
profDeRobotique(); 
console.log("Point 6 : " + prof); // 6 (première déclaration)