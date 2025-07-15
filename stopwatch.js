// DOM elements
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const statusDisplay = document.getElementById('status-display');

// Timer variables
let seconds = 0;
let timerInterval = null;
let isRunning = false;

// Function to update the timer display
function updateDisplay() {
    timerDisplay.textContent = seconds;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        
        // Clear any existing interval to prevent multiple intervals
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Set interval to increment by 3 seconds
        timerInterval = setInterval(() => {
            // Add 3 seconds
            seconds += 3;
            
            // Update the display
            updateDisplay();
            
            // Check if we've reached 30 seconds
            if (seconds >= 30) {
                // Stop the timer at 30 seconds
                stopTimer();
                seconds = 30; // Ensure display shows exactly 30
                updateDisplay();
                statusDisplay.textContent = 'Maximum time reached (30 seconds)';
            }
        }, 3000); // 3000 milliseconds = 3 seconds
        
        statusDisplay.textContent = 'Running - Incrementing by 3 seconds';
        console.log('Timer started');
    }
}

// Function to stop/pause the timer
function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        timerInterval = null;
        statusDisplay.textContent = 'Stopped at ' + seconds + ' seconds';
        console.log('Timer stopped at', seconds, 'seconds');
    }
}

// Function to reset the timer
function resetTimer() {
    // Stop the timer if it's running
    stopTimer();
    
    // Reset seconds to 0
    seconds = 0;
    
    // Update the display
    updateDisplay();
    
    statusDisplay.textContent = 'Reset - Ready to start';
    console.log('Timer reset');
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();
statusDisplay.textContent = 'Ready to start';

// Log that the stopwatch is ready
console.log('Stopwatch initialized and ready to use');