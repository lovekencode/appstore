function payer(amount, orderId) {
    fetch('/payer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, orderId }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.url) {
            window.location.href = data.url; // Redirige l'utilisateur vers l'URL de paiement MonCash
        } else {
            alert('Erreur lors de la création du paiement');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}
