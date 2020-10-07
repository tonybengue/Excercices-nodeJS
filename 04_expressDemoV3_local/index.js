const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const { profs } = require('./profs-data');
const result = require('./result');
const config = require('./config');
const app = express();

// Use morgan
app.use(morgan('dev'));
// Use bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// MiddleWare ( intervient avant le traitement get), d'effectue avant la requete, peuvent s'accumuler
app.use((req, res, next) => {
    console.log("URL : " + req.url);
    next();
    console.log('response ' + res.statusCode);
});

// Url de départ
app.get('/', (req, res) => {
    res.send('Hello Express');
});


let profRouteur = express.Router();

profRouteur.route('/')
    .get((req, res) => {
        let retour = profs.slice(0, req.query.max);
        if(retour.length > 0 ) {
            res.json(result.success(retour));
        } else {
            res.json(result.success(profs));
        }
    })

        // POST
    .post((req, res) => {
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

profRouteur.route('/:id')
    .get((req, res) => {
        //res.send('Prof id n° ' + req.params.id);

        // filter : récupérer les éléments d'un tableau filtré
        let enseignant = profs.filter(obj => {
            return obj.id == req.params.id;
        });
        if(enseignant.length == 1) {
            //res.json(enseignant[0])
            res.json(result.success(enseignant[0]));
        } else {
            res.json(result.success([]));
            //res.json([]); // tableau vide
        }
    })

    // PUT, pouvoir changer non ou bureau
    .put((req, res) => {
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
    })

    // Suppression de professeur
    .delete((req, res) => {
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

app.use(config.routeAPI + 'profs', profRouteur)

app.listen(8080, () => {
    console.log('Listening 8080');
});


