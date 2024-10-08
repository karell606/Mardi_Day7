let clickCount = 0;

// Interaction lors du clic sur le robot
document.getElementById('robot').addEventListener('click', function() {
    document.getElementById('speech-bubble').innerText = 'Ouch, that hurts!';
    setTimeout(function() {
        document.getElementById('speech-bubble').innerText = 'Hello !';
    }, 2000);
});

// Interaction lors du survol du robot
document.getElementById('robot').addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris
    const y = event.offsetY; // Coordonnée Y de la souris
    document.getElementById('screen-text').innerText = 'X: ' + x + ', Y: ' + y; // Affiche les coordonnées
});

// Interaction lors de la saisie dans l'input
document.getElementById('robot-input').addEventListener('input', function() {
    document.getElementById('screen-text').innerText = "Don't worry, I'll take care of it!";
    setTimeout(function() {
        document.getElementById('screen-text').innerText = 'Bip bip bip !';
    }, 2000);
});

// Interaction lors des clics sur les yeux du robot
document.querySelectorAll('.eye-left-iris, .eye-right-iris').forEach(function(eye) {
    eye.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 10) {
            // Change la couleur des iris aléatoirement
            document.querySelectorAll('.eye-left-iris, .eye-right-iris').forEach(function(eye) {
                eye.style.fill = '#' + Math.floor(Math.random() * 16777215).toString(16);
            });//cette ligne de code attribue à la propriété fill de l'élément eye une couleur aléatoire en format hexadécimal, ce qui change la couleur de l'iris à chaque clic (ou lorsqu'une certaine condition est remplie). //
            //Ajoute le symbole # au début de la chaîne pour la rendre au format CSS des couleurs hexadécimales (par exemple, #ff0000 pour le rouge).//
            clickCount = 0; // Réinitialise le compteur
        }
    });
});
