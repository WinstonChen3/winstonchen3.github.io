import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPCvjd-ZWpztpz4n8q_STe_7LE8jGEk4",
  authDomain: "techlab-4abf7.firebaseapp.com",
  projectId: "techlab-4abf7",
  storageBucket: "techlab-4abf7.appspot.com",
  messagingSenderId: "690313655478",
  appId: "1:690313655478:web:88e5891a8f35bda1fc6217",
  measurementId: "G-4XS6FDRS30"
};

// Initialize Firebase without error handling
const firebaseApp = initializeApp(firebaseConfig);

// Get the Auth service for the app
const auth = getAuth(firebaseApp);

// Sign up function
document.getElementById('signup-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('floatingEmail').value;
  const password = document.getElementById('password').value;

  // Form validation
  const emailInput = document.getElementById('floatingEmail');
  const passwordInput = document.getElementById('password');
  if (!emailInput.value || !passwordInput.value) {
    document.getElementById('error-message').innerText = "Please fill out all fields.";
    return; // Prevent form submission if fields are empty
  }

  // Validate email format (using a simple regex pattern)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById('error-message').innerText = "Please enter a valid email address.";
    return; // Prevent form submission if email format is invalid
  }
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed up successfully
    const user = userCredential.user;
    console.log('Signed up user:', user);
    // Redirect to equipment.html after successful sign-up
    window.location.href = "equipment.html";
  } catch (error) {
    // Handle sign-up errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Sign up error:', errorCode, errorMessage);
    // Display error message to the user
    document.getElementById('error-message').innerText = "Sign up failed. " + errorMessage;
  }
});