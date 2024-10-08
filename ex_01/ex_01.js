function reduceOpacity() {
    const square = document.getElementById('square');
    square.style.opacity = parseFloat(square.style.opacity) * 0.5;
}

function resetOpacity() {
    const square = document.getElementById('square');
    square.style.opacity = 1;
}

const square = document.getElementById('square');
square.addEventListener('mouseover', reduceOpacity);
square.addEventListener('mouseout', resetOpacity);
