// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Simulate stream count updates
function simulateStreamCountUpdate() {
    const artistCards = document.querySelectorAll('.artist-card');

    artistCards.forEach(card => {
        const streamCountElement = card.querySelector('.stream-count');
        let currentCount = parseInt(streamCountElement.textContent);

        // Randomly increase stream count between 1 and 100
        const newStreams = Math.floor(Math.random() * 100) + 1;
        currentCount += newStreams;

        streamCountElement.textContent = currentCount;
    });
}

// Call the simulateStreamCountUpdate function every 10 seconds
setInterval(simulateStreamCountUpdate, 10000);

// Handle form submission for uploading music
const uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(uploadForm);
    const fileName = formData.get('music-file').name;

    alert(`Music file "${fileName}" uploaded successfully!`);
    uploadForm.reset();
});

// Simulate user login/logout
const loginButton = document.querySelector('.btn-login');
const logoutButton = document.createElement('a');

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    alert('Logged in successfully!');

    // Change login button to logout
    loginButton.textContent = 'Logout';
    loginButton.classList.add('btn-logout');
    loginButton.classList.remove('btn-login');
    
    // Add event listener to logout button
    loginButton.removeEventListener('click', handleLogin);
    loginButton.addEventListener('click', function() {
        alert('Logged out successfully!');
        
        // Revert back to login
        loginButton.textContent = 'Login';
        loginButton.classList.add('btn-login');
        loginButton.classList.remove('btn-logout');
    });
});

// Function to handle user login
function handleLogin(event) {
    event.preventDefault();
    alert('Logged in successfully!');
}

// Add event listener to login button
loginButton.addEventListener('click', handleLogin);
