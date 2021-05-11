import {setUserData_sStorage,getUserData_sStorage} from '/Assets/Models/userApi.js';
// Server
const url = "https://randomuser.me/api/";

const dataUser = document.querySelector("#data-user");


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