/**
 * Si a l'appel il manque des paramètres => undefined
 * Si a l'appel il y a trop de paramètres => pas d'erreur
 */
// Prototype / Constructeur
function Rectangle (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

var rect = new Rectangle(2,7,5,6,'#ff00ff');
console.log(rect.color);

// Exemple ecrit en javascript moderne
function Rectangle2(config) {
    // Initialisation
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.color = '#000000';

    // parcourt les propriétés de l'objet et récupère la valeur si elle existe
    // variable de parcours IN objet
    for(var prop in this) {
        // objet à la propriété?
        if(config.hasOwnProperty(prop)) {
            // Objet est tableau associatif
            this[prop] = config[prop]; // propriétés pour l'instance
        }
    }
}

// Construction exemple par objet, cet exemple permet de mieux mémoriser les paramètres
var rect2 = new Rectangle2({
    color: '#555555',
    x: 8,
    width:6,
    height:4
});

console.log(rect2);