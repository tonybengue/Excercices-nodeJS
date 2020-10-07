const http = require ('http');
const { parse } = require('querystring');

/*
// Wrap du html directement par chrome à l'arrivée au lieu de node
response.write('<h1>Premiere requete HTTP avec Node.js</h1>');
response.end();
*/

// Crée serveur
http.createServer((request, response) => {
    // Type de requete en POST
    if(request.method == 'POST') {
        let body = '';
        
        // Quand on reçoit des données de formulaire, envoit à body
        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        // Quant on a finit, on utilise une fonction anonyme
        request.on('end', () => {
            let data = parse(body);
            console.log("Donnees envoyees à l'url : " + request.url);
            console.log(data);
            
            // Code 200 OK
            response.writeHead(200,{'Content-type':'text/html'});
            response.write('Données du formulaire '+JSON.stringify(data));
            response.end();
        });
    } else {
        // Code 404 erreur
        response.writeHead(404,{'Content-type':'text/html'});
        response.write('Error 404');
        response.end();
    }
}).listen(8080); 
