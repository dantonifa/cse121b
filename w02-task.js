/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "David Antonio Fajardo Ponce";
const currentYear = new Date().getFullYear();
const profilePicture = "imagesplaceholder.png";
/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
/* Step 5 - Array */
let foodArray = [
  "Baleada",
  "pork and ",
  "grilled chicken",
  "tilapia soup",
  "mondongo soup",
  "pork tamal",
  "tomato and cabbage salad",
  "horchata",
  "Carlota",
  "pizza",
];
