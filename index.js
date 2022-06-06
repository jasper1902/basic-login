var jwt = localStorage.getItem("jwt");
if (!jwt) window.location.href = "./login.html"

const logout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "./login.html"
}

const loadUser = async () => {
    const response = await fetch("https://www.mecallapi.com/api/auth/user", {
        headers: {
            "Authorization": "Bearer "+jwt
        }
    });
    const result = await response.json();
    const user = result.user;
    console.log(user);
    document.getElementById("fname").innerHTML = user.fname + " " + user.lname;
    document.getElementById("userAvatar").src = user.avatar;
    document.getElementById("bio-email").innerHTML = user.email;
}


loadUser();