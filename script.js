document.getElementById('ip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            document.getElementById('ip-address').value = ip;
            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = `<p>Votre adresse IP est: ${ip}</p>`;
            responseDiv.classList.add('visible');
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
