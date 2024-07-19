const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then((message) => {
        alert(message);
    });
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    fetch('signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then((message) => {
        alert(message);
    });
});