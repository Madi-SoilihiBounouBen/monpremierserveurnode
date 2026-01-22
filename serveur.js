// Ici, je code mon serveur0

/**
 * J'importe le package (module) http. Le module HTTP est stocké dans la variable http.
 * L'instruction require() permet d'importer le module.
 */ 
const http = require('http');

//Je crée mon serveur en utilisant le package HTTP
//req = requet, res = réponse
const server = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur !");
});

// Je précise l'adresse et le port du serveur
server.listen(3000);