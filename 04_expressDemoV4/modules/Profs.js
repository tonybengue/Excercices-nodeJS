// Variable pour contenir lé co à la BDD
let db;

/*
Pas de variable statique en JS dans les classes.
Les méthodes statiques existent en node
*/

// Autre manière d'exporter la classe
module.exports = (_db) => {
    db = _db;
    return Profs; // renvoit la classe
};

class Profs {

    static getAll(max){
        // Retourne promise
        return new Promise((resolve, reject) =>  {
            let limit = '';
            if(max > 0) {
                limit = " LIMIT 0,?";
            }
            // Requete Select 
            db.query("SELECT * FROM profs" + limit, [max], (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    // Récupère l'ID du professeur selectionné à http://127.0.0.1:8080/api/v1/profs/id
    static getById(id) {
        // promise
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM profs WHERE id = ?", [id], (err, datas) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(datas);
                }
            });
        });
    }

    // Création
    static create(data) {
        return new Promise((resolve, reject) => {
            // Requete, tableau de valeurs, 
            db.query("INSERT INTO profs (nom, bureau) VALUES (?,?)", 
            [data.nom, data.bureau], (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows.insertId);
                }
            })
        });
    }

    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE profs SET nom=?, bureau=? WHERE id=?", 
            [data.nom, data.bureau, id], (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        });
    }

    static delete(id) {
        // Retourne promise
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM profs WHERE id=?", 
            [id], (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        });
    }

}