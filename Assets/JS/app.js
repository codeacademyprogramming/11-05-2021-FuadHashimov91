import {setUserData_sStorage,getUserData_sStorage} from '/Assets/Models/userApi.js';
// Server
const url = "https://randomuser.me/api/";

const dataUser = document.querySelector("#data-user");
const logOut = document.querySelector("#log-out");



setUserData_sStorage(url);
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
}
createUserTable(getUserData_sStorage());


const logOutPage = _ => {
    sessionStorage.clear();
    document.location ="http://127.0.0.1:5500/Login.html";
}
logOut.addEventListener("click",logOutPage);