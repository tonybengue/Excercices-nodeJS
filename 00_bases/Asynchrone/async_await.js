const fs = require('fs');
/*
Se base sur les promesses.
    async/await : générateur de promesses
*/
console.log('Début'); //1
let userId = 14;

async function run() {
    let user = await getUserInfo(userId);
    console.log('Apres await ', user); // 7 exécuté apres celle au dessus, sur de recuperer l'utilisateur
}
run();

console.log('Fin du programme');//3

function getUserInfo(id) {
    // promesse ( traitement asyncrone)
    return new Promise((resolve, reject) => {
        console.log('Lecture du fichier');//2
        fs.readFile('data.json', 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Erreur de lecture du fichier'));
                return;
            }
            
            console.log('Fichier lu');//4
            let user = JSON.parse(data);
            console.log('ici', user);//5
            resolve(user);//6
        });
    });
}
