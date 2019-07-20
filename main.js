let openCloseBtn = document.querySelector('#open-close');
let loginFormStatus = 0;
let finalLoginBtn = document.querySelector('#login-btn');

openCloseBtn.addEventListener('click', () => {
    // console.log(event);
    let formOutside = document.querySelector('#form-outside');
    if(loginFormStatus == 0) {
        openCloseBtn.value = "CLOSE";
        formOutside.style.right = 0 + "px";
        loginFormStatus = 1;
    } else {
        formOutside.style.right = -280 + "px";
        loginFormStatus = 0;
        openCloseBtn.value = "LOGIN";
    }
});

finalLoginBtn.addEventListener('click', () => {
    // console.log(event);

    let userName = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let errorString = document.querySelector('#error');

    if(userName == "" && password == "") {
        errorString.innerHTML = "Please Enter the Username and Password."
    } else if(!isNaN(userName.charAt(0))) {
        errorString.innerHTML = "Please Enter the valid Username";
    } else if(userName !== "" && password == "") {
        errorString.innerHTML = "Please Enter the Password."
    } else if(userName == "" && password !== "") {
        errorString.innerHTML = "Please Enter the Password."
    } else if(userName == "admin" && password == "Admin@123") {
        errorString.innerHTML = "Login Successful";
    }
    else {
        errorString.innerHTML = "Username and Password is Incorrect.";
    }
});