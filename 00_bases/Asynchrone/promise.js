const fs = require('fs');

let userId = 14;

/*
Promesses en séquences
*/
let x = getUserInfo(userId)
.then((user) => {
        console.log('Données user : ', user); // remonte dans le then. 5
})
.catch((error) => {
    console.log('Erreur ' + error.message);
});
// Sera tjrs exécuté avant la  fin de getUserInfo
// x vaudra toujours undefined
console.log('Fin du programme', x); // 2

/**
 * Récupère données d'un utilisateur
 * Demarre lecture fichier, effectue un traitement et le retourne
 * Quant on travaille avec de l'asyncrone il faut savoir sortir le resultat des callbacks
 * On peut mettre plusieurs .then à la suite et un seul .catch
 * 
 * reject : quand cela echoue
 * resolve : données à fournir
 */
function getUserInfo(id) {
    // promesse ( traitement asyncrone)
    return new Promise((resolve, reject) => {

        console.log('Lecture du fichier'); // 1
        fs.readFile('data.json', 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Erreur de lecture du fichier'));
                return;
            }
            
            // La lecture à réussit
            console.log('Fichier lu'); //3
            let user = JSON.parse(data);
            console.log('ici', user); //4
            resolve(user); // 
        });
    });

}
