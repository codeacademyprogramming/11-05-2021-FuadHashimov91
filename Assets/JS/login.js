const email_inp = document.getElementById("email");
const password_inp = document.getElementById("password");
const form = document.querySelector("#form");


let obj ={
    name:"Admin",
    surName:"Admin"
}


form.addEventListener("submit",formControl);



function formControl(e){
    e.preventDefault();
    let email = email_inp.value;
    let password = password_inp.value;
    (email === obj.name && password === obj.surName)? 
        document.location = "http://127.0.0.1:5500/Index.html":
        document.location = "http://127.0.0.1:5500/Login.html";
}