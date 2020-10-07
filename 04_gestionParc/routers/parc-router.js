const result = require('../result');

module.exports = (express, app, db, config) => {
    let parcRouteur = express.Router();

    const Parc = require('../Parc')(db); 

    // /api/v1/parcs
    parcRouteur.route('/')
        // GET
        .get(async (req, res) => {
             try {
                // Récupère l'id max
                let max = parseInt(req.query.max);
                if(req.query.max && isNaN(max)){
                    throw new Error('Paramètre max incorrect');
                }
                
                let data = await Parc.getAll(max); // récupère tous les profs
                res.json(result.success(data));
            } catch (error) {
                res.json(result.error(error.message));
            }
        })
        
        // POST
        .post(async (req, res) => {

            console.log(req.body)
            
            // Vérification des données entrées
            if (!req.body.ip) {
                res.json(result.error("Données non conformes entrées"));
                return;
            }

            // Liaison des données reçues puis les passe dans la requete
            let parc = {
                ip: req.body.ip,
                nom: req.body.nom,
                description: req.body.description
            }

            try {
                // Apelle la fonction dans le dossier Parc
                let id = await Parc.create(parc); 
                parc.id = id; 
                res.json(result.success(parc));
            } catch (error) {
                res.json(result.error(error.message));
            }
        });

    // api/v1/profs/id
    parcRouteur.route('/:id')
   /*   
        
        .get(async (req, res) => {
        })

        // PUT, pouvoir changer non ou bureau
        .put(async (req, res) => {
        })

        // Suppression de professeur
        .delete(async (req, res) => {
        });
*/
    // Lie le routeur
    app.use(config.routeAPI + 'parcs', parcRouteur)
}