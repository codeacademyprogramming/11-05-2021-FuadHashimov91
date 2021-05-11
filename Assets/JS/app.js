// const email_inp = document.getElementById("email");
// const password_inp = document.getElementById("password");
// const form = document.querySelector("#form");


const dataUser = document.querySelector("#data-user");




const url = "https://randomuser.me/api/";


// form.addEventListener("submit",formControl);

// let obj ={
//     name:"Admin",
//     surName:"Admin"
// }


// function formControl(e){
//     e.preventDefault();
//     let email = email_inp.value;
//     let password = password_inp.value;
//     // (email === obj.name && password === obj.surName)? console.log(true):console.log(false);
//     if(email === obj.name && password === obj.surName){
//         document.location = "http://127.0.0.1:5500/Login.html";
        
//     }
//     else{
//         console.log(false);
//     }
// }

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
    return userData;
}

function createUserTable(data) {
    let html = "";
    html = 
    `
        <tr>
            <td><img src="${data.picture}"/></td>
            <td>${data.username}</td>
            <td>${data.gender}</td>
            <td>${data.name.title}-${data.name.first}-${data.name.last} </td>
            <td>${data.email}</td>
            <td>${data.age}</td>
            <td>${data.phone}</td>
            <td>${data.city}</td>
            <td>${data.country}</td>
            <td>${data.postcode}</td>
        </tr>
    `;
    dataUser.innerHTML = html;
    console.log(html)
}
createUserTable(getUserData_sStorage());