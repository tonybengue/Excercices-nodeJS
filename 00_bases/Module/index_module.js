const conversation = require('./module');

conversation.direBonjour();

console.log(conversation.auteur); // avant modification
conversation.auteur = 'Coucou'; // modification
console.log(conversation.auteur); // aprés modification

conversation.direAuRevoir(); // erreur car par déclaré comme exporté