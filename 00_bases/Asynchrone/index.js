const fs = require('fs');

let userId = 14;
let x = getUserInfo(userId);
// Sera tjrs exécuté avant la  fin de getUserInfo
// x vaudra toujours undefined
console.log('Fin du programme', x);

/**
 * Récupère données d'un utilisateur
 * Demarre lecture fichier, effectue un traitement et le retourne
 * Quant on travaille avec de l'asyncrone il faut savoir sortir le resultat des callbacks
 */
function getUserInfo(id) {
    let user;
    console.log('Lecture du fichier');
    fs.readFile('data.json', 'utf-8', (err, data) => {
        console.log('Fichier lu');
        user = JSON.parse(data);
        console.log('ici', user);
        return user; // return du callback mais pas de la fonction
    });
    //return user; // return exécuté avant le readFile en haut ( problème de l'asyncrone )
}

/*
console.log('A');
// Execute au bout d'un certain délais
setTimeout(() => {
    console.log('B');
}, 3000);
console.log('C');
*/