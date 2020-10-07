const fs = require('fs');

let userId = 14;
/*
 Sans valeur de retour, avec callback. user est  la donnée attendues
 Passer le traitement suivant à la méthode qui définit le service 
 */
getUserInfo(userId, (user) => {
    // suite programme
    console.log('Informations obtenues', user) // 4
}); 
console.log('Fin du programme'); // 2

// Callback en 2eme param
function getUserInfo(id, callback) {
    let user;
    console.log('Lecture du fichier'); // 1
    fs.readFile('data.json', 'utf-8', (err, data) => {
        console.log('Fichier lu'); // 3
        user = JSON.parse(data);
        callback(user);
    });
}