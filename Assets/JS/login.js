import { Admin } from '/Assets/Models/loginModel.js'

const email_inp = document.getElementById("email");
const password_inp = document.getElementById("password");
const form = document.querySelector("#form");


const formControl = (e) =>{
    e.preventDefault();

    let obj = new Admin();

    let email = email_inp.value;
    let password = password_inp.value;
    (email === obj.name && password === obj.surName)? 
        document.location = "http://127.0.0.1:5500/Index.html":
        document.location = "http://127.0.0.1:5500/Login.html";
}

form.addEventListener("submit",formControl);