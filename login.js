var jwt = localStorage.getItem("jwt");
if (jwt !== null) {
    window.location.href = './index.html'
}

const login = () => {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    data = {
        "username": username.value,
        "password": password.value
    }

    if (username !== '' && password !== '') {
        fetch("https://www.mecallapi.com/api/login", {method: 'POST',headers: {"Content-Type": "application/json"},body: JSON.stringify(data)})
        .then(response => response.json())
        .then(result => {
            if (result.status == 'ok') {
                 localStorage.setItem("jwt", result.accessToken)
                 window.location.href = './index.html'
            } else {
                Swal.fire(
                    result.status,
                    result.message,
                    'error'
                )
            }
    })
    }
    return false;
}
