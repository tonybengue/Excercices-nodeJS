// Somme façon ES5
var sommeES5 = function(x, y) {
    return x + y;
}
// Somme façon ES6
let sommeES6 = (x, y) => x + y;

console.log("Somme 1 : " + sommeES5(5,6));
console.log("Somme 2 : " + sommeES6(5,6));

// Fonction anonyme stockée dans la variable affiche
let affiche = (message) => console.log(message);
// Stocke la fonction avec un paramètre et l'affiche
var x = affiche("Toto");
console.log(x); // undefined

let double = x => 2 * x;
console.log(double(50)); //100

// Fonction anonyme
let ligne = () => console.log('-------------');
ligne();

let min = (x, y) => {
    if (x, y) return x;
    return y;
};

let creerPoint = (_x, _y) => ({
    x : _x,
    y : _y 
});

let p = creerPoint(6,8);
console.log(p);

let tab1 = [1, 12, 34, 89];

// Version ES5
tab1.forEach(function(val, index, t) {
    t[index]++;
});
console.log(tab1);

// Version ES6
tab1.forEach((val, index, t) => t[index]++);
console.log(tab1);