// valeur par défaut passée à la fonction
function afficherProf(nom, prenom, bureau = 210) {
    console.log(nom + " " + prenom);
}

afficherProf("Ruchaud", "William"); 
afficherProf("Gaudin", "Hervé", 610); 