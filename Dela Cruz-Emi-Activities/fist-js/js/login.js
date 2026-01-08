function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm password = document.getElementById('confirm password').value;
    const full name = document.getElementById('full name').value;

 
   if((password !== confirmPassword)) {
    alert("Wrong password: passwords do not match" );
   }
   
   if (username === "Emimarie" && password ==="zathary" && fullname === "Emimarie Dela Cruz") {
   } else {
    alert("Username or password is incorrect");
   }
}