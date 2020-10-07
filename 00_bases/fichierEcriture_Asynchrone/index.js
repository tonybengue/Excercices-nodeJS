const fs = require('fs');
const readline = require('readline'); 

// Pour le branchement à l'interface
const response = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Saisie afin d'ajouter du texte
response.question('Texte à ajouter : ', (data)=> {
    console.log("Vous avez entré le texte : " + data);

    // Ecriture
    fs.writeFile('saisie.txt', data, 'utf-8', (err) => {
        if(err) throw err;
        console.log('Données enregistrées');
    });

    // Fermeture de l'écriture
    response.close();
});
