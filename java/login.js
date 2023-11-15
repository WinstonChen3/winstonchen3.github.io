// login.js
$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var username = $('#username').val();
    var password = $('#password').val();

    // Send a POST request to the server
    $.ajax({
      url: '/login',
      method: 'POST',
      data: { username: username, password: password },
      success: function(response) {
        // Handle the server response
        if (response.success) {
          $('#message').text('Login successful.');
        } else {
          $('#message').text('Login failed. Please try again.');
        }
      },
      error: function() {
        $('#message').text('An error occurred. Please try again later.');
      }
    });
  });
});
