//find element to append newer elements on
var navBar = document.getElementById('navbar__list');
// create menu
for (let i = 1; i <= 4; i++) {
    const newItem = document.createElement("li");
    newItem.setAttribute("class","navbar__item");
    const newLink = document.createElement("a");
    newLink.innerHTML = "Section " + i;
    newLink.setAttribute("href","#section"+i);
    const section = document.getElementById("section"+i);
    section.style.minHeight = "100vh";
    newItem.appendChild(newLink);
    navBar.appendChild(newItem);
}
