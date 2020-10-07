// Charge ressource externe
const axios = require('axios');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    //response.send('hello');
    axios.get('http://localhost:8080')
        .then((response) => {
            response.send('OK', response.date);
        })
        .catch((response) => {
            response.send('NEIN', error.message);
        })
});

app.listen(8090, () => {
    console.log('Listening 8090');
});