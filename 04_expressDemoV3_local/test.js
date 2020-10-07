// Au moment du require, envoit de données par le fichier à inclure
let profs = require('./profs')('coucou') // pas typé donc accepte n'importe quoi

profs.getAll();