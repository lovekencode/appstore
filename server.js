const express = require('express');
const bodyParser = require('body-parser');
const moncash = require('./moncashConfig'); // Assurez-vous que ce fichier est configuré correctement

const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes POST en JSON
app.use(bodyParser.json());

// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Route pour effectuer un paiement
app.post('/payer', (req, res) => {
    const { amount, orderId } = req.body;

    // Configuration de la requête de paiement
    const create_payment_json = {
        "amount": amount,
        "orderId": orderId
    };

    // Utilisation du SDK MonCash pour créer le paiement
    const payment_creator = moncash.payment;
    payment_creator.create(create_payment_json, function (error, payment) {
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Erreur lors de la création du paiement" });
        } else {
            console.log("Create Payment Response");
            // Récupération de l'URL de redirection pour le paiement et envoi au client
            res.json({ url: payment_creator.redirect_uri(payment) });
        }
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
