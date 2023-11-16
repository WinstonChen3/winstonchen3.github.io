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
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.getElementById('closeBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

signupBtn.addEventListener('click', () => {
  popupTitle.textContent = 'Sign Up';
  popupForm.addEventListener('submit', handleSignup);
  popup.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
  popupTitle.textContent = 'Login';
  popupForm.addEventListener('submit', handleLogin);
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  closePopup();
});

function handleSignup(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // Perform signup logic here
  // You can send the data to a server or perform client-side processing
  
  console.log('Sign up:', username, password);
  
  // Close the popup
  closePopup();
}

function handleLogin(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // Perform login logic here
  // You can send the data to a server or perform client-side processing
  
  console.log('Login:', username, password);
  
  // Close the popup
  closePopup();
}

function closePopup() {
  popupForm.removeEventListener('submit', handleSignup);
  popupForm.removeEventListener('submit', handleLogin);
  popup.style.display = 'none';
  usernameInput.value = '';
  passwordInput.value = '';
}
