const os = require('os');

console.log("Architecture CPU : " + os.arch());
console.log("CPU : " + os.cpus()[0].model);
console.log("Mémoire : " + os.totalmem);
console.log("Dossier Utilisateur : " + os.homedir);