// librairie externes
const express = require('express'); 
const morgan = require('morgan');
// https://grokonez.com/node-js/nodejs-restapis-how-to-create-nodejs-express-restapis-post-get-put-delete-requests
const bodyParser = require('body-parser') // permet de sortir en json

const { profs } = require('./profs'); // données en tableau : .filter à utiliser
const result = require('./result'); // fichier de statut
const app = express(); // invoque la fonction express

// Use morgan
app.use(morgan('dev'));

// Use bodyparser
app.use(bodyParser.json()); // veut JSON
app.use(bodyParser.urlencoded({extended:true})); 

/** MIDDLEWARE **/
//  intervient avant les reqûetes, peuvent s'accumuler
app.use((req, res, next) => {
    console.log("URL : " + req.url);
    next();// prochaine sortie
    console.log('response ' + res.statusCode);
});

/** GET - Recevoir **/
// Page d'accueil
app.get('/', (req, res) => {
    res.send('Hello Express');
});

// retourne tous les professeurs à l'url : http://localhost:8080/api/v1/profs?max=2
app.get('/api/v1/profs', (req, res) => {
    let retour = profs.slice(0, req.query.max); // tous les profs

    if(retour.length > 0 ) {
        res.json(result.success(retour));
    } else {
        res.json(result.success(profs));
    }
});

// retourne le prof ayant le numero souhaité : http://localhost:8080/api/v1/profs/2
app.get('/api/v1/profs/:id', (req, res) => {
    //res.send('Prof id n° ' + req.params.id); // affiche l'id

    // filter : récupérer les éléments d'un tableau filtré
    // récupere l'id passé en URL
    let enseignant = profs.filter(obj => {
        return obj.id == req.params.id;
    });
    if(enseignant.length == 1) {
        res.json(result.success(enseignant[0]));
    } else {
        res.json(result.success([]));
    }
});

// Test de parametres : http://localhost:8080/api/v1/profs/52/test3il
app.get('/api/v1/profs/:id/:test3il', (req, res) => {
    res.send('paramètres : ' + JSON.stringify(req.params));
});

/** POST - Ajout **/
app.post('/api/v1/profs/', (req, res) => {
   // res.send(req.body);

   // Si pas de nom fournit
    if (!req.body.nom) {
        res.json(result.error("Données non conformes"));
        return;
    }

   // Vérifie la présence d'un prof en double
    let found = profs.find( prof => {
        return prof.nom == req.body.nom;
    });
    if(found) {
        res.json(result.error('Enseignant déja présent'));
        return;
    }

    let prof = {
        id: profs[profs.length-1].id + 1, // dernier id + 1
        nom: req.body.nom,
        bureau: req.body.bureau
    }
    profs.push(prof);
    res.json(result.success(prof));
});

// PUT - Pouvoir changer non ou bureau
app.put('/api/v1/profs/:id', (req, res) => {
    // find renvoit objet, findIndex renvoit indice
    if(!req.body.nom || !req.body.bureau) {
        res.json(result.error('Données non conformes'));
        return;
    }

    let found = profs.find((prof) => {
        return prof.id == req.params.id;
    });

    if(!found) {
        res.json(result.error('Professeur introuvable'));
        return
    }

    let foundByName = profs.find((prof) => {
        return prof.nom == req.body.nom;
    });
    if(foundByName && foundByName.id != req.params.id) {
        res.json(result.error('Un professeur porte déja ce nom ' +  foundByName.id));
        return;
    }
    found.nom = req.body.nom;
    found.bureau = req.body.bureau;
    res.json(result.success(found));
});

// DELETE - Suppression de professeur
app.delete('api/v1/profs/:id', (req, res) => {
    let found = profs.findIndex((prof) => {
        return prof.id == req.params.id;
    });

    // Si ne trouve pas retourne -1
    if (found == -1) {
        res.json(result.error('Professeur introuvable'));
        return;
    }

    // Indice trouvé
    profs.slice(found, 1);
    res.json(result.success(true));
});

// Port d'écoute
app.listen(8080, () => {
    console.log('Listening 8080');
});