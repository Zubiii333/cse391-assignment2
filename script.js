// Array of fortune messages
const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "Adventure can be real happiness.",
    "All your hard work will soon pay off.",
    "Believe in yourself and others will too.",
    "Change can hurt, but it leads a path to something better.",
    "Curiosity kills boredom. Nothing can kill curiosity.",
    "Determination is what you need now."
  ];

// DOM elements
const fortuneBox = document.getElementById('fortune-box');
const greenBtn = document.getElementById('green-btn');
const yellowBtn = document.getElementById('yellow-btn');
const blueBtn = document.getElementById('blue-btn');
const orangeBtn = document.getElementById('orange-btn');

// Color pairs (background color and corresponding font color)
const colorPairs = {
    green: { bg: 'green', font: 'red' },
    yellow: { bg: 'yellow', font: 'red' },
    blue: { bg: 'blue', font: 'white' },
    orange: { bg: 'orange', font: 'black' }
};

// Array of font families and sizes
const fontFamilies = ['Arial', 'Georgia', 'Verdana', 'Courier New', 'Trebuchet MS'];
const fontSizes = ['1.2rem', '1.3rem', '1.4rem', '1.5rem', '1.6rem'];

// Function to get a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to display a random fortune
function displayRandomFortune() {
    const randomFortune = getRandomItem(fortunes);
    fortuneBox.textContent = randomFortune;
    console.log("Displayed fortune:", randomFortune);
}

// Function to change colors and style based on button color
function changeColors(bgColor, fontColor) {
    fortuneBox.style.backgroundColor = bgColor;
    fortuneBox.style.color = fontColor;
    
    // Use a contrasting border color instead of matching the background
    // This ensures the border is always visible
    const borderColor = fontColor; // Using the font color for the border makes it visible
    fortuneBox.style.borderColor = borderColor;
    fortuneBox.style.borderWidth = '3px'; // Make border slightly thicker for better visibility
    fortuneBox.style.borderStyle = 'solid';
    
    // Also change font family and size slightly
    const newFamily = getRandomItem(fontFamilies);
    const newSize = getRandomItem(fontSizes);
    fortuneBox.style.fontFamily = newFamily;
    fortuneBox.style.fontSize = newSize;
    
    console.log(`Changed to: bg=${bgColor}, font=${fontColor}, border=${borderColor}, family=${newFamily}, size=${newSize}`);
}

// Event listeners for color buttons
greenBtn.addEventListener('click', function() {
    displayRandomFortune();
    changeColors(colorPairs.green.bg, colorPairs.green.font);
});

yellowBtn.addEventListener('click', function() {
    displayRandomFortune();
    changeColors(colorPairs.yellow.bg, colorPairs.yellow.font);
});

blueBtn.addEventListener('click', function() {
    displayRandomFortune();
    changeColors(colorPairs.blue.bg, colorPairs.blue.font);
});

orangeBtn.addEventListener('click', function() {
    displayRandomFortune();
    changeColors(colorPairs.orange.bg, colorPairs.orange.font);
});

// Function to apply a random color from the available color pairs
function applyRandomColor() {
    // Get all color keys from the colorPairs object
    const colorKeys = Object.keys(colorPairs);
    // Select a random color key
    const randomColorKey = getRandomItem(colorKeys);
    // Get the color pair for the random key
    const selectedColor = colorPairs[randomColorKey];
    // Apply the colors
    changeColors(selectedColor.bg, selectedColor.font);
    console.log(`Applied random color: ${randomColorKey}`);
}

// Display a random fortune when the page loads
window.addEventListener('load', function() {
    displayRandomFortune();
    applyRandomColor();
});