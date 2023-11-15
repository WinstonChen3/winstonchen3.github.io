// Get all the signup buttons on the page
const signUpButtons = document.querySelectorAll('.signup-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');

// Add event listeners to each signup button
signUpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });
});

// Hide the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});
// Get the form input elements
const nameInput = document.getElementById('name');
const creditCardInput = document.getElementById('credit-card');
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
  // Check if the credit card input is empty
  if (creditCardInput.value.trim() === '') {
    e.preventDefault(); // Prevent form submission
    alert('Please enter a credit card number.'); // Show an alert message
  }
});