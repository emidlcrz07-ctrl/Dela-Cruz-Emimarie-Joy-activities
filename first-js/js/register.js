function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const fullname = document.getElementById('fullname').value.trim();

    if (username === "" || password === "" || confirmPassword === "" || fullname === "") {
        error.innerHTML= "Please fill this up";
        error.style.color = 'black';
        error.style.backgroundColor = 'yellow';
        error.style.visibility = 'visible';
        return;
    }

    if (password !== confirmPassword) {
        error.innerHTML = "Wrong password: passwords do not match";
        error.style.color = 'black';
        error.style.backgroundColor = 'red';
        error.style.visibility = 'visible';
        return;
    }

    if (username === "Emimarie" && password === "zathary" && fullname === "Emimarie Dela Cruz") {
        error.innerHTML= "Login successful";
        error.style.color = 'black';
        error.style.backgroundColor = 'pink';
        error.style.visibility = 'visible';

    } else {
        error.innerHTML = "Username, full name, or password is incorrect";
        error.style.color = 'black';
        error.style.backgroundColor = 'red';
        error.style.visibility = 'visible';
    }
}
