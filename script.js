document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please enter both username and password.';
        } else {
            // Clear any previous error messages
            errorMessage.textContent = '';
            // Here you would typically send the data to a server
            console.log('Login successful for:', username);
            alert(`Welcome, ${username}!`);
        }
    });
});