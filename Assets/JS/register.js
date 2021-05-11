const email_inp = document.getElementById("email");
const password_inp = document.getElementById("password");
const form = document.querySelector("#form");
let formBg = document.querySelector("#form-bg");



const url = "https://randomuser.me/api/";


form.addEventListener("submit",formControl);

let obj ={
    name:"Admin",
    surName:"Admin"
}


function formControl(e){
    e.preventDefault();
    let email = email_inp.value;
    let password = password_inp.value;
    // (email === obj.name && password === obj.surName)? console.log(true):console.log(false);
    if(email === obj.name && password === obj.surName){
        document.querySelector(".test").classList.add("form-bg")
        
        //getUser(url);
    }
    else{
        console.log(false);
    }
}

async function setUserData_sStorage(url) {
    let response = await fetch(url);
    let result = await response.json();

    await result.results.forEach(element => {
        let data = {
            name:element.name,
            email:element.email,
            gender:element.gender,
            city:element.location.city,
            country:element.location.country,
            postcode:element.location.postcode,
            username:element.login.username,
            age:element.dob.age,
            phone:element.phone,
            picture:element.picture.medium
        };
        sessionStorage.setItem("User_Data",JSON.stringify(data));
    });
}

setUserData_sStorage(url);

function getUserData_sStorage() {

    let s_storage =sessionStorage.getItem("User_Data");
    let userData = JSON.parse(s_storage);
    console.log(userData);

    return userData;
}
getUserData_sStorage();


function createUserTable() {
    
    let html = "";

    html = 
    `
    
    `


}
