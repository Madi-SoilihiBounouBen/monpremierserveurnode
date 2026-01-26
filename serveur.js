// Ici, je code mon serveur0

/**
 * J'importe le package (module) http. Le module HTTP est stocké dans la variable http.
 * L'instruction require() permet d'importer le module.
 */ 
const http = require('http');

// j'importe l'application express app.js
const app = require('./app');

//Je déclare une variable numéro de port
const numeroPort = 3000;    

// Je configure le numéro du port utiliser dans le serveur
app.set('port', numeroPort);

//Je crée mon serveur en utilisant le package HTTP
//req = requet, res = réponse

const server = http.createServer(app);
/*
const server = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur !");
});
*/

// Je récupère la date
const date = new Date();
// Je précise l'adresse et le port du serveur
server.listen(numeroPort, () => {
    console.log("Le serveur tourne sur le port " + numeroPort);
    console.log(date.toLocaleDateString());
    console.log( date.toLocaleTimeString());
    console.log("Le serveur tourne au port" + numeroPort);
});