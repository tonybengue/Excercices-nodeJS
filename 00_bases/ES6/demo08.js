// destructuration
let tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//let [a,b,c,,,,,,d] = tab;

// Spread opeator
//let [a,b,c,...d] = tab;
//console.log(a,b,c,d);

//let [...a] = tab;
//console.log(a);

let obj = {
    nom :"Bengué",
    bureau: 210
};

// Va chercher les champs souhaités
let {prenom, nom, bureau} = obj;
console.log(prenom, nom, bureau);