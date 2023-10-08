/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
  name: "David Fajardo",
  photo: "images/placeholder.png",
  favoriteFoods: [
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
  ],
  hobbies: [
    "studying the scriptures",
    "genealogical search",
    "chess",
    "traveling",
    "singing hymns",
    "doing exercises",
    "cooking",
    "gardening",
  ],
  placesLived: [
    "San Pedro Sula, Honduras",
    "53 years",
    "Guatemala, Guatemala",
    "2 years",
  ],
};

/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").srs = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let ul = document.createElement("ul");
  ul.textContent = hobby;
  document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let dt = document.createElement("dt");
  dt.textContent = placeLived;
  document.querySelector("#places-lived").appendChild(dt);
});
