function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const error = document.getElementById('error');

    if((username == "emi") && (password == "marie")) {
        error.innerHTML= "Login successful";
        error.style.color = 'black';
        error.style.backgroundColor = 'green';
        error.style.visibility = 'visible';
    }

    else{
        error.innerHTML = "Invalid username or password";
        error.style.color = 'black';
        error.style.backgroundColor = 'red';
        error.style.visibility = 'visible';
    }
}