/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getItemsData(url) {

    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return null;
        });
}

async function getItemsDataFromUrl(url) {
    const data = await getItemsData(url);
    drawItems(data);
    console.log(data);
}

function drawItems(data) {
    const itemGrid = document.getElementById("output");

    data.forEach((dataItem) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const avatar_url = document.createElement("img");
        avatar_url.src = dataItem.avatar_url;
        avatar_url.classList.add("item-image");

        const itemLogin = document.createElement("h2");
        itemLogin.textContent = dataItem.login;

        itemContainer.append(avatar_url, itemLogin);
        itemGrid.append(itemContainer);
    });
}



document.addEventListener("DOMContentLoaded", function () {
    let showUser = document.getElementById("btn")
    showUser.onclick = () => getItemsDataFromUrl(ENDPOINT);
});

function hide() {
    document.getElementById("message").style.display = "none"
}


document.getElementById("btn").addEventListener("click", hide);