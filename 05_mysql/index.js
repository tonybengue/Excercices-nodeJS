const mysql = require('mysql');

// Crée la connexion à la cdd
const db = mysql.createConnection({
    host: 'localhost',
    database: 'nodejs',
    user: 'root',
    password: ''
});

// Connexion à msql
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connecté à la base de données');
})

/*
Emplacement du programme 
    Penser à echapper en cas de valeur passée au point d'interrogation
    Convertir chaine en entier avant car par défaut les données envoyées sur un formulaire sont des string
*/
// Insert
db.query("INSERT INTO profs (nom, bureau) VALUES (?, ?)",
    ["Renaud Dardilhac", 215 ], (err, data) =>  {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log(data);
});

// Selection
db.query('SELECT * FROM profs', (err, data) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log(data);
});
db.end(); //fermeture de la connexion