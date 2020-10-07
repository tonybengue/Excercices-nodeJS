console.log('Début');

let p1 = new Promise((resolve, reject) => {
    // Simule échange
    setTimeout(() => {
        resolve('Resultat p1')
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    // Simule échange
    setTimeout(() => {
        resolve('Resultat p2')
    }, 1500);
});

// .all lance actions en paralle et attend qu'elles se terminent pour les retourner 
Promise.all([p1, p2]).then((result) => {
    console.log(result);
});

// .race : Lance les actions en simultané fournit la premiere promise terminée
Promise.race([p1, p2]).then((result) => {
    console.log(result);
});
console.log('Fin');
