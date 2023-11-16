"use strict";
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {	
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('h2');
const popupForm = popup.querySelector('form');
const closeBtn = popup.querySelector('.close-btn');
const usernameInput = popup.querySelector('#name');
const emailInput = popup.querySelector('#email');

signupBtn.addEventListener('click', () => {
  popupTitle.textContent = 'Sign Up';
  popupForm.addEventListener('submit', handleSignup);
  popupOverlay.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
  popupTitle.textContent = 'Login';
  popupForm.addEventListener('submit', handleLogin);
  popupOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  closePopup();
});

function handleSignup(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;

  // Perform signup logic here
  // You can send the data to a server or perform client-side processing

  console.log('Sign up:', username, email);

  // Close the popup
  closePopup();
}

function handleLogin(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;

  // Perform login logic here
  // You can send the data to a server or perform client-side processing

  console.log('Login:', username, email);

  // Close the popup
  closePopup();
}

function closePopup() {
  popupForm.removeEventListener('submit', handleSignup);
  popupForm.removeEventListener('submit', handleLogin);
  popupOverlay.style.display = 'none';
  usernameInput.value = '';
  emailInput.value = '';
}