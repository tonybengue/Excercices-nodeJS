const fs = require('fs');

// Cas synchrone
// Lit un fichier en un seul bloc
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log("Erreur : " + err.message);
        return;
    }
    console.log("Données lues : " + data);
});
console.log("Fin du programme");

/*
 buffer = fs.readFileSync('test.txt');
 console.log(buffer.toString());
*/
