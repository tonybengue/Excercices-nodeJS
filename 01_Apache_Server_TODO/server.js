const http = require ('http')
const fs = require ('fs')

let stats = {}
http.createServer((request, response) => {
    let url = request.url;

    if(url == '/') {
        url = 'index.html';
    } else if(url == '/contact') {
        url = 'contact.html';
    } 

    file = 'html/' + url;

    fs.readFile(file, 'utf-8', (err, data)=> {
        if(err) {
            response.writeHead(404, {
                'Content-type': 'text/html'
            });
            response.write('File not found');
            response.end();
            return;
        }

        response.writeHead(200, {'Content-Type': 'text/html'}); // header
        response.write(data);
        response.end(); // stop the request
    });
}).listen(3000);