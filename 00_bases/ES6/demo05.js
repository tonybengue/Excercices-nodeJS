const tab = [1,2,3];
tab.push(4);
tab[5] = 'abc';
console.log(tab);

//tab = [10,11,12]; // erreur car constante n'autorise pas de nouvelle affcetation
const obj = {
    x: 5,
    setX: function(val) {
        this.x = val;
    }
}
console.log("P1 : " + obj.x); // sortie

obj.x = 18;
console.log("P2 : " + obj.x); // peut y acceder de l'exterieur malgré le fait que cela soit une constante

obj.setX = 24;
console.log("P3 : " + obj.x); // ne peut pas modifier l'instance de x