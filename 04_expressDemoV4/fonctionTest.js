// Au moment du require, envoit de données par le fichier à inclure
let salles = require('./modules/salles')('coucou') // pas typé donc accepte n'importe quoi

salles.getAll();