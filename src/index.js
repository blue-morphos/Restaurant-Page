import { initialPageLoadFunction } from "./modules/page-load";

import { menuFunction } from "./modules/menu";

import { contactFunction } from "./modules/contact";

//const content = document.getElementById("content");

const buttons = document.getElementById("buttons");


const homeButton = document.createElement("button");
homeButton.textContent= "Home";
homeButton.addEventListener('click', function(){

    initialPageLoadFunction();
});

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
menuButton.addEventListener('click', menuFunction);

const contactButton = document.createElement("button");
contactButton.textContent = "Contact";
contactButton.addEventListener('click', contactFunction);

buttons.append(homeButton, menuButton, contactButton);
//homeButton.onclick = initialPageLoadFunction();

