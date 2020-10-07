// Variable pour contenir lé co à la BDD
let db;

// Passe la base à ce module puis retourne la classe
module.exports = (_db) => {
    db = _db;
    return Salles; 
};

class Salles {
    // retourne toutes les salles
    static getAll(){
         // Retourne promise
         return new Promise((resolve, reject) =>  {
            // Requete Select 
            db.query("SELECT * FROM salles", (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        })
    }

     // Retourne salle spécifique
     static getById(id) {
        // promise
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM salles WHERE id = ?", 
                [id], (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

     // Création d'une salle
     static create(data) {
         // Promise
        return new Promise((resolve, reject) => {
            // Requete, tableau de valeurs, 
            db.query("INSERT INTO salles (niveau, capacite, equipement, etage) VALUES (?,?,?,?)", 
            [data.niveau, data.capacite, data.equipement, data.etage], 
            (err, rows) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(rows.insertId);
                }
            });
        });
    }
    
    // Mise à jour d'une salle
    static update(id, data) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE salles SET niveau=?, capacite=?, equipement=?," + 
            "etage=? WHERE id=?", 
             [data.niveau, data.capacite, data.equipement, data.etage, id], 
             (err, rows) => {
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
            db.query("DELETE FROM salles WHERE id=?", 
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