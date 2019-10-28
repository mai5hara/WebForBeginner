function alterMode() {
    var signUpLink = document.getElementById('sign_up_link');
    var logInLink = document.getElementById('log_in_link');
    var logInButton = document.getElementById('login_button');
    var signUpButton = document.getElementById('signup_button');

    signUpLink.classList.toggle('login_enabled');
    signUpLink.classList.toggle('login_disabled');
    logInLink.classList.toggle('login_enabled');
    logInLink.classList.toggle('login_disabled');

    if (logInLink.classList.contains('login_disabled')) {
        logInButton.style.display = "";
        signUpButton.style.display = "none";
    } else {
        logInButton.style.display = "none";
        signUpButton.style.display = "";
    }
}