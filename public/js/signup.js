const form = document.querySelector('form')
const emailInput = document.getElementById('email-login')
const usernameInput = document.getElementById('username-login')
const passwordInput = document.getElementById('password-login')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userData = {
        email: emailInput.value.trim(),
        username: usernameInput.value.trim(),
        password: passwordInput.value.trim()
    }

    console.log(usernameInput.value, passwordInput.value, emailInput.value)

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 200) {
            window.location.assign('/')
        }
    })
    .catch(err => console.log(err))
})