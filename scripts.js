document.addEventListener('DOMContentLoaded', () => {
    const authLink = document.getElementById('auth-link');
    if (localStorage.getItem('authToken')) {
        authLink.textContent = 'Logout';
        authLink.href = '#';
        authLink.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.href = 'index.html';
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate authentication (for demonstration purposes only)
            if (email === 'user@example.com' && password === 'password') {
                localStorage.setItem('authToken', 'sampleAuthToken');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Simulate user registration (for demonstration purposes only)
            localStorage.setItem('authToken', 'sampleAuthToken');
            window.location.href = 'index.html';
        });
    }
	const form = document.getElementById('reset_password-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        requestPasswordReset(email);
    });
});

function requestPasswordReset(email) {
    const messageDiv = document.getElementById('message');
    // Simulate a request to the server
    setTimeout(() => {
        messageDiv.textContent = `If an account with email ${email} exists, a password reset link has been sent.`;
    }, 1000);
});
