document.addEventListener('DOMContentLoaded', function() {
    // Initializes headshot rotation functionality
    initHeadshotRotation();
    // Example of dynamically changing the profile
    document.getElementById('userName').textContent = 'Jane Doe';
    document.getElementById('bio').textContent = 'Jane's updated bio goes here. She is a web developer with a passion for creating user-friendly applications.';
});

// Initializes and manages the rotation of the headshot image
function initHeadshotRotation() {
    let currentRotation = 0;

    // Function to rotate the headshot image
    function rotateHeadshot() {
        currentRotation += 90;
        const headshot = document.getElementById('headshot');
        // Check if the headshot element exists before rotating
        if (headshot) {
            headshot.style.transform = `rotate(${currentRotation}deg)`;
        } else {
            console.error('Headshot element not found');
        }
    }

    // Attach the rotateHeadshot function to the button's onclick event
    document.querySelector('button').onclick = rotateHeadshot;
}
