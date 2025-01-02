 // Declare variables to store movement interval and meme 
let movementInterval;
const programmingMeme = document.getElementById('programming-meme');

// Function to start moving the meme image
function startMoving() {
    // Disable the start button and enable the stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // set a new time interval 
    movementInterval = setInterval(() => {
        const randomX = Math.random() * (window.innerWidth - programmingMeme.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - programmingMeme.offsetHeight);

        programmingMeme.style.left = `${randomX}px`;
        programmingMeme.style.top = `${randomY}px`;
    }, 500);// Move every 500 milliseconds
}

// Function to stop moving the meme 
function stopMoving() {
    // Enable the start button and disable the stop button
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;

    // Clear the interval to stop movement
    clearInterval(movementInterval);
}
