// ES5
function PointES5 (x, y) {
    this.x = x;
    this.y = y;
}
PointES5.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
}
var p = new PointES5(4, 6);
console.log(p.x);

// ES6 (https://fr.wikipedia.org/wiki/Sucre_syntaxique)
class PointES6 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._color = '#000000';
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    // Getter
    get color() {
        console.log("Appel du getter");
        return this._color;
    }
    // Setter
    set color(c) {
        console.log("Appel du setter");
        this._color = c;
    }
}
let p2 = new PointES6(4,6);
console.log(p2.x);

p2.color = '#FFFFFF';
console.log(p2);

p2.color = '#AAAAAA';
console.log(p2);
console.log(p2.color);

// Héritage, PointMobile hérite des propriétés de PointES6
class PointMobile extends PointES6 {
    constructor(x,y ,vx, vy) {
        super(x, y);
        this.vx = vx;
        this.vy = vy;
    }
}



