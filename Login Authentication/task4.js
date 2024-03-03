function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation
    if (username === 'user' && password === 'pass') {
        // Redirect to secured page or perform desired actions
        alert('Login successful!');
    } else {
        errorMessage.innerHTML = 'Invalid username or password';
    }
}