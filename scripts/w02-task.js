/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "David Antonio Fajardo Ponce";
const currentYear = new Date().getFullYear();
const profilePicture = "images/placeholder.png";
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#Placeholder Image");
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */
var foodArray = [
  "Baleada",
  "pork",
  "grilled chicken",
  "tilapia soup",
  "mondongo soup",
  "pork tamal",
  "tomato and cabbage salad",
  "horchata",
  "Carlota",
  "pizza",
];
foodElement.innerHTML = `<strong>${foodArray.join(", ")}</strong>`;
var more_fav_food = ["pasta", "chicken soup", "tacos", "papaya"];
foodArray = foodArray.concat(more_fav_food);
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;
foodArray.shift();
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;
foodArray.pop();
foodElement.innerHTML += `<br><strong>${foodArray.join(", ")}</strong>`;
