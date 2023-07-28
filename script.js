// Set the date when the text should disappear (30 years from July 27, 2023)
var disappearingDate = new Date("2053-02-31");

// Calculate the time remaining between now and the disappearing date
var timeRemaining = disappearingDate.getTime() - new Date().getTime();

// Calculate the duration of the fade animation based on the remaining time
var fadeDuration = timeRemaining / 1000;

// Set the animation duration as a CSS variable
document.documentElement.style.setProperty('--fade-duration', fadeDuration + 's');

// Function to generate a random number between min and max (inclusive)
function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to apply the flicker effect to a punctuation element
function flickerPunctuation(punctuation) {
    punctuation.classList.add('flicker-on');
    const flickerDuration = getRandomInterval(100, 600); // Generate a semi-random time interval between 0.1 and 0.6 seconds

    setTimeout(() => {
        punctuation.classList.remove('flicker-on');
    }, flickerDuration);
}

// Function to handle flickering for all punctuation marks
function handleFlickering() {
    const punctuationList = document.querySelectorAll('.flicker');
    punctuationList.forEach((punctuation) => {
        const flickerInterval = getRandomInterval(1000, 3000); // Generate a semi-random interval between 1 and 3 seconds for each punctuation mark
        setInterval(() => flickerPunctuation(punctuation), flickerInterval);
    });
}

// Call the handleFlickering function to start the flickering effect for all punctuation marks
handleFlickering();
