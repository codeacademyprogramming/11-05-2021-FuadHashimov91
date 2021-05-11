export {setUserData_sStorage,getUserData_sStorage}

// get Api and add data to session-storage
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
// get data from session-storage
function getUserData_sStorage() {
    let s_storage =sessionStorage.getItem("User_Data");
    let userData = JSON.parse(s_storage);
    return userData;
}
