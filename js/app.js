var navBar = document.getElementById('navbar__list');

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




// myCustomDiv.addEventListener('click', respondToTheClick);


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


