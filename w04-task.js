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
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "San Pedro Sula, Honduras",
    length: "52 years",
  }
),
myProfile.placesLived.push(
  {
    place: "Guatemala City, Guatemala",
    length: "2 years"
  }
)
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").srs = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let ul = document.createElement("ul");
  ul.textContent = hobby;
  document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let li = document.createElement("li");
  li.textContent = place.place + ", " + place.length;
  document.querySelector("#places-lived").appendChild(li);
});


