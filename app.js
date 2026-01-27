// Icin nous créos notre application ExpressJs

// j'importe le framewordk Expressjs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();


app.use((req, res, next) => {
    console.log("Je suis un middleware dans le serveur")
    next();
});

/**
 * J'utilise un Middleware 2 pour retourner la réponse au client lorsqu'il fait la requête localhost:3000. La réponse est au format JSON
 */
/*app.use((req, res, next) => {
    res.json({message: "Vous êtes bien sur le serveur Ndovoo"});
    next();
});
*/

/**
 * J'utilise un Middleware 3 pour afficher le message dans la console
 */
app.use((req, res, nexte) => {
    console.log("Bonjour, je suis le serveur!");
    nexte();
    
});

// Je dessine mes Routes avex Express
app.use('/api/fruit', (req, res) => {
    console.log("Je passe dans la route /api/fruit");
    const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier riche en vitamine C",
            prix: 3
        }
    ];
    //En terme de réponse, je renvoie le tableau de fruits

    res.json(fruit);
});
/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;//fin du fichier. Donc ne pas coder en dessous de celui-ci