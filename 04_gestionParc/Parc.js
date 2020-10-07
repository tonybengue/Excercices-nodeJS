// Variable pour contenir lé co à la BDD
let db;

/*
Pas de variable statique en JS dans les classes.
Les méthodes statiques existent en node
*/

// Expert de la base et de la class
module.exports = (_db) => {
    db = _db;
    return Parc; // renvoit la classe
};

class Parc {
    // GET -  Récupère toutes les entrées
    static getAll(max){
         // Retourne promise
        return new Promise((resolve, reject) =>  {
            // Valeur maximum
            let limit = '';
            if(max > 0) {
                limit = " LIMIT 0,?";
            }

            // Requete Select 
            db.query("SELECT * FROM parcs" + limit, 
            [max], 
            (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    // GET - Récupère l'ID sélectionné
    static getById(id) {

    }

    // POST - Création
    static create(data) {     
        return new Promise((resolve, reject) => {
            // Requete, tableau de valeurs, 
            db.query("INSERT INTO parcs (ip, nom, description) VALUES (?,?,?)", 
            [data.ip, data.nom, data.description],
            (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows.insertId);
                }
            })
        });
    }

    // PUT - Mise à jour
    static update(id, data) {       
    }

    // Suppression
    static delete(id) {
    }
}