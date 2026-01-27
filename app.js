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

// J'ajoute un middleware qui gère la sécurité d'accès
app.use((req, res, next) => {
    //Je permet l'accès à mon API depuis n'importe quel origine
    res.setHeader('Access-Control-Allow-Origin','*');
    //J'autorise certaines en-têtes dans les requêtes reçues dans notre API. Les en-têtes autorisées sont : 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
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
        },

        {
            id: 2,
            nom: "Orange",
            description: "Fruit riche en vitamine C",
            prix: 3
        },

        {
            id: 3,
            nom: "Poire",
            description: "fruit à pépins comestible au goût doux et sucré",
            prix: 2
        }
    ];

    //En terme de réponse, je renvoie le tableau de fruits
    res.status(200).json(fruit);
});
/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;//fin du fichier. Donc ne pas coder en dessous de celui-ci