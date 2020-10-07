const readline = require('readline');

// Création de l'interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Salut NodeJs");

// Appel de fonction une fois le premier paramètre entré
rl.question('Entrez quelque chose : ', (data)=> {
    console.log("Vous avez entré : " + data);
    rl.close();
})  
