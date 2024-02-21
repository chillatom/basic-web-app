// Variable to keep track of the current rotation angle
// This variable is used to store the current angle at which the headshot image is rotated.
// It starts at 0 degrees and increments by 90 degrees with each rotation, resetting to 0 after reaching 360 degrees.
let currentRotationAngle = 0;

// Function to rotate the headshot image
// This function is triggered when the "Rotate Headshot" button is clicked.
// It increments the currentRotationAngle by 90 degrees, ensures it doesn't exceed 360 degrees,
// and applies the rotation to the headshot image by updating its CSS transform property.
function rotateHeadshot() {
    // Increment the rotation angle by 90 degrees
    currentRotationAngle += 90;
    // Ensure the rotation angle does not exceed 360 degrees
    if (currentRotationAngle >= 360) {
        currentRotationAngle -= 360;
    }
    // Select the headshot image by its ID and apply the rotation
    const headshotImage = document.getElementById('headshot');
    // Error handling in case the headshot element is not found in the DOM
    if (!headshotImage) {
        console.error('Headshot element not found in the DOM.');
        return;
    }
    headshotImage.style.transform = `rotate(${currentRotationAngle}deg)`;
}

// Make the rotateHeadshot function accessible from the global scope
window.rotateHeadshot = rotateHeadshot;

// Example of how to use DOMContentLoaded in this context, though not directly required for this task
document.addEventListener('DOMContentLoaded', function() {
    // This space is reserved for any code that needs to run after the DOM is fully loaded.
    // For this task, there's no need to add anything here unless there's additional functionality to initialize.
});
