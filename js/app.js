//find element to append newer elements on
const navBar = document.getElementById("navbar__list");

// create menu
for (let i = 1; i <= 4; i++) {
  let newItem = document.createElement("li");
  newItem.setAttribute("class", "navbar__item");

  let newLink = document.createElement("a");
  newLink.innerHTML = "Section " + i;
  newLink.setAttribute("href", "#section" + i);

  let section = document.getElementById("section" + i);
  section.style.minHeight = "100vh";

  newItem.appendChild(newLink);
  navBar.appendChild(newItem);
}

const links = document.querySelectorAll("li.navbar__item > a");

links.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    //clear class att for each a link
    links.forEach(function (el) {
      if (el.classList.length > 0) {
        el.className = " ";
      }
    });

    // add class value 'active' for the clicked link
    if (el.classList.length <= 0) {
      el.classList.add("active");
    } else {
      el.className = " ";
    }
    
    //scroll smooth
    let scrollToDiv = document.querySelector(this.hash);
    scrollToDiv.scrollIntoView({
      behavior: "smooth",
    });
  });
});
