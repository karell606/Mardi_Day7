const titleElement = document.querySelector('h1'); // Select the title element
const originalText = titleElement.innerText; // Store the original title text
const words = originalText.split(' '); // Split the title text into an array of words
let interval; // Variable to hold the interval for shuffling
let isShuffling = true; // Flag to check if shuffling is active


function shuffleWords() {
    if (isShuffling) {
        
        const shuffledWords = words.sort(() => Math.random() - 0.5);
        titleElement.innerText = shuffledWords.join(' '); 
    }
}


interval = setInterval(shuffleWords, 2000);


titleElement.addEventListener('mouseenter', () => {
    isShuffling = false; // Stop shuffling
});

// Resume shuffling when the mouse leaves the title
titleElement.addEventListener('mouseleave', () => {
    isShuffling = true; // Resume shuffling
});

// Copy the title text to clipboard on click and stop shuffling
titleElement.addEventListener('click', () => {
    navigator.clipboard.writeText(titleElement.innerText); // Copy the current title text to clipboard
    isShuffling = false; // Stop shuffling
});

// Resume shuffling when clicking outside of the title
document.addEventListener('click', (event) => {
    if (!titleElement.contains(event.target)) { // Check if the click is outside the title
        isShuffling = true; 
    }
});

// Alert box after pressing the '!' key
document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        setTimeout(() => {
            alert('42!'); // Show alert after 42 seconds
        }, 42000);
    }
});
