const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const expressOasGenerator = require('express-oas-generator'); // swagger

// Données locales
const { profs } = require('./profs-data');
//const Profs = require('./profs');
const config = require('./config');

// Express - coeur de l'application
const app = express();

// Swagger
expressOasGenerator.init(app, {});

// Accepte toutes les connexions ( pratique pour du local )
app.use(cors());
app.use(morgan('dev')); // middleware

// Utilise le parseur pour la sortie en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Instancie et connecte à la BDD
const db = mysql.createConnection({
    host : config.db.host,
    user : config.db.user,
    password : config.db.password,
    database : config.db.database
});

// Connexion à la base de donnée
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connecté à la base de données');

    // Rajout des routeurs avec les paramètres à passer
    require('./routers/profs-router')(express, app, db, config);
    require('./routers/salles-router')(express, app, db, config);
});

// Retourne le fichier de configuration
app.getConfig = function() {
    return config;
}

// Retourne la connexion à la base de données
app.getDb = function() {
    return db;
}

// Url de base
app.get('/', (req, res) => {
    res.send('Hello Express');
});

// Port d'écoute
app.listen(config.port, () => {
    console.log('Listening 8080');
});