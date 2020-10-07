/*
  faire une api pour gérer un parc d'équipement informatique 
    (ip, nom, description)
*/
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config'); // fichier de configuration à la base

const app = express(); // express

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

// Retourne la connexion à la base de données
app.getDb = function() {
  return db;
}

// Connexion à la base de donnée
db.connect((err) => {
  if(err) {
      throw err;
  }
  console.log('Connecté à la base de données');

  // Routeurs avec leurs paramètres
  require('./routers/parc-router')(express, app, db, config);
});

// Retourne le fichier de configuration
app.getConfig = function() {
  return config;
}

// Url de base
app.get('/', (req, res) => {
  res.send('Hello Express, chemin par défaut');
});

// Port d'écoute
app.listen(config.port, () => {
  console.log('Listening 8080');
});