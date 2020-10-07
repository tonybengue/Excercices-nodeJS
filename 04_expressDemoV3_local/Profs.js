// Variable pour contenir les informations à la BDD
let db;

/*
Pas de variable statique en JS dans les classes.
Les méthodes statiques existent
*/

// Autre manière d'exporter la classe
module.exports = (_db) => {
    db = _db;
    return Profs; // renvoit la classe
};

class Profs {
    static getAll(){
        console.log(db);
    }
}