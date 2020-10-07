//npm install express express-handlebars
const express = require('express');
const exphbs = require('express-handlebars');

let app = express()
app.engine('handlebars', exphbs({
    extname: 'handlebars',// nom extension
    defaultLayout: 'default', // nom fichier
    layoutsDir: 'layouts' // dossier
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    let matieres = [
        {
            promo: 'I3',
            matiere: 'Techno Web'
        },
        {
            promo: 'B3',
            matiere: 'Harmonisation Java'
        },
        {
            promo: 'B3',
            matiere: 'Développement Web'
        }    
    ];
    //res.send('Salut')
    res.render('index', {
        title: "Index Page",
        //layout: 'default',
        matieres: matieres
    });
})

app.listen(8080, () => {
    console.log('Listening 8080');
});
