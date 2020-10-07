const result = require('../result');

module.exports = (express, app, db, config) => {
    let profRouteur = express.Router();
    const Profs = require('../modules/Profs')(db); // fichier des classe

    // /api/v1/profs
    profRouteur.route('/')
        // Callback de get
        .get(async (req, res) => {
            try {
                let max = parseInt(req.query.max);
                if(req.query.max && isNaN(max)){
                    throw new Error('Paramètre max incorrect');
                }
                
                let data = await Profs.getAll(max); // récupère tous les profs
                res.json(result.success(data));
            } catch (error) {
                res.json(result.error(error.message));
            }
        })

        // POST
        .post(async (req, res) => {
            if (!req.body.nom) {
                res.json(result.error("Données non conformes"));
                return;
            }
        
            let prof = {
                nom: req.body.nom,
                bureau: req.body.bureau
            }
            try {
                let id = await Profs.create(prof);
                prof.id = id;
                res.json(result.success(prof));
            } catch (error) {
                res.json(result.error(error.message));
            }

            /* LOCAL
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
            */
        });

    // Récupère l'id passé du professeur à http://127.0.0.1:8080/api/v1/profs/id
    profRouteur.route('/:id')
        .get(async (req, res) => {
            try {
                let id = parseInt(req.params.id);
                if(isNaN(id)) {
                    throw Error("ID invalide");
                }
                
                let data = await Profs.getById(id);
                res.json(result.success(data));
            } catch (error) {
                res.json(result.error(error.message));
            }

            /* LOCAL
            let enseignant = profs.filter(obj => {
                return obj.id == req.params.id;
            });
            if (enseignant.length == 1) {
                res.json(result.success(enseignant[0]));
            } else {
                res.json(result.success([]));
            }
            */
        })

        // PUT, pouvoir changer non ou bureau
        .put(async (req, res) => {
            // find renvoit objet, findIndex renvoit indice
            if(!req.body.nom || !req.body.bureau) {
                res.json(result.error('Données non conformes'));
                return;
            }

            try {
                let id = parseInt(req.params.id);
                if(isNaN(id)) {
                    throw Error("ID invalide");
                }
                let prof = await Profs.getById(id);
                if(prof == undefined) {
                    throw new Error("Prof introuvable");
                }

                await Profs.update(id, {
                    nom: req.body.nom,
                    bureau: req.body.bureau
                });
                res.json(result.success(true));
            } catch (error) {
                res.json(result.error(error.message));
            }
/*
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
*/
        })

        // Suppression de professeur
        .delete(async (req, res) => {
            try {
                let id = parseInt(req.params.id);
                if(isNaN(id)) {
                    throw Error('Id Invalide');
                }
                let data = await Profs.delete(id);
                res.json(result.success(true));
            } catch (error) {
                res.json(result.error(error.message));
            }

            /*
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
            */
        });

    // Lie le routeur
    app.use(config.routeAPI + 'profs', profRouteur)
}