const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

 
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

   
    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let passErr = document.getElementById("passwordError");


    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passErr.innerHTML = "";

    
    if (name === "") {
        nameErr.innerHTML = "Name cannot be empty";
        valid = false;
    }

    if (email === "") {
        emailErr.innerHTML = "Email cannot be empty";
        valid = false;
    }

    if (password.length < 6) {
        passErr.innerHTML = "Password must be at least 6 characters";
        valid = false;
    }


    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
