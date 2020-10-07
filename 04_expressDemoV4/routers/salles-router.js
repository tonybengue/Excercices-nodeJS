const result = require ('../result')

module.exports = (express, app, db, config) => {
    let sallesRouteur = express.Router(); // routeur
    const Salles = require('../modules/Salles')(db); // fichier des classe

    // Route par défaut : http://127.0.0.1:8080/api/v1/salles
    sallesRouteur.route('/')
        
    // GET Retourne toutes les salles
        .get(async (req, res) => {
            //console.log(app.getConfig());
            let max = parseInt(req.query.max);
            if(req.query.max && isNaN(max)){
                throw new Error('Paramètre max incorrect');
            }

           try {
                let data = await Salles.getAll(max); // récupère tous les profs
                res.json(result.success(data));
            } catch (error) {
                res.json(result.error(error.message));
            }
        })

        // POST Insere une salle
        .post(async (req, res) => {
            //console.log(app.getConfig());
            //console.log(res);

            // Vérification
            if (!req.body.niveau) {
                res.json(result.error("Données non conformes entrées"));
                return;
            }

            // Liaison des données reçues puis les passe dans la requete (Salles.js)
            let salle = {
                niveau: req.body.niveau,
                capacite: req.body.capacite,
                equipement: req.body.equipement,
                etage: req.body.etage
            }

            // 
            try {
                let id = await Salles.create(salle); 
                salle.id = id; 
                res.json(result.success(salle));
            } catch (error) {
                res.json(result.error(error.message));
            }
        });
    
    // Route par défaut : http://127.0.0.1:8080/api/v1/salles/id
    sallesRouteur.route('/:id')

        // GET - Récupère la salle entrée avec l'ID
        .get(async (req, res) => {
            console.log("ID n° " + req.params.id);
            try {
                let id = parseInt(req.params.id);

                if(isNaN(id) || !req.body.id) {
                    throw Error("ID invalide");
                }
                
                let data = await Salles.getById(id);
                res.json(result.success(data)); // Renvoit la sortie
            } catch (error) {
                res.json(result.error(error.message));
            }
        })

        // PUT - Modifier salle à partir de l'id
        /*
            find renvoit objet
            findIndex renvoit indice
        */
        .put(async (req, res) => {
            
            // Verification données entrées
            if (!req.body.niveau) {
                res.json(result.error("Données non conformes entrées"));
                return;
            }

            try {
                // Récup id de la requete
                let id = parseInt(req.params.id); 
                // verif id
                if(isNaN(id)) {
                    throw Error("ID invalide");
                }

                // Effectue la vérification de l'ID dans la salle
                let salle = await Salles.getById(id);
                if(salle == undefined) {
                    throw new Error("Salle introuvable");
                }

                // Mise à jour de la salle
                await Salles.update(id, {
                    niveau: req.body.niveau,
                    capacite: req.body.capacite,
                    equipement: req.body.equipement,
                    etage: req.body.etage
                });

                res.json(result.success(true));
            } catch( error) {
                res.json(result.error(error.message));
            }
         
        })

        // DELETE - Suppression de la salle
        .delete(async (req, res) => {
            try {
                // Récup id de la requete
                let id = parseInt(req.params.id);
                // Verif id
                if(isNaN(id)) {
                    throw Error('Id Invalide');
                }

                // Effectue requete avec la salle souhaitée
                let data = await Salles.delete(id);
                res.json(result.success(true)); // affichage
            } catch (error) {
                res.json(result.error(error.message));
            }
        });
    
    // l'URL sera accessible à /salles
    app.use(config.routeAPI + 'salles', sallesRouteur);
}