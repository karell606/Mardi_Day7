let currentRotation = 0;
function rotateCircle(step) {
    // a chque fois que le bouton reset rotation est clique le cercle revient a sa position iniatiale
    if (step === 0) {
        currentRotation = 0;
}   else {
   currentRotation += step;
}

  const circle = document.getElementById('circle');
  circle.style.transform = `rotate(${currentRotation}deg)`;
}
  document.querySelectorAll('.rotate-button').forEach(button => {
    button.addEventListener('click', function() {
        const step = parseInt(this.value); // [this] fait référence au bouton qui a été cliqué. Chaque bouton a une valeur (value), qui correspond au degré de rotation (comme 45, 90, -45, -90). Cette ligne convertit cette valeur en un entier avec parseInt() et la stocke dans [step]
        rotateCircle(step);
    });
});
