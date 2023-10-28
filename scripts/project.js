/*CSE 121 PROJECT DAILY CALORIES NEEDS*/
/*AUTHOR: DAVID ANTONIO FAJARDO PONCE*/
/*Functions for the project*/
function basal_metabolic_rate() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let age = Number(document.getElementById("age").value);
  let gender = document.querySelector("#gender").value;
  if (gender == "male") {
    bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    return bmr;
  } else {
    bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    return bmr;
  }
}
function dailyCaloriesNeeds() {
  let activity = document.querySelector("#activity").value;
  let bmr = basal_metabolic_rate();
  let element = document.querySelector("#daily_calories");

  if (activity == "sedentary") {
    const dailyCalories = bmr * 1.2;
    element.value = dailyCalories;
    return dailyCalories;
  } else if (activity == "light") {
    const dailyCalories = bmr * 1.375;
    element.value = dailyCalories;
    return dailyCalories;
  } else if (activity == "moderate") {
    const dailyCalories = bmr * 1.55;
    element.value = dailyCalories;
    return dailyCalories;
  } else if (activity == "hard_exercise") {
    const dailyCalories = bmr * 1.725;
    element.value = dailyCalories;
    return dailyCalories;
  } else {
    const dailyCalories = bmr * 1.9;
    element.value = dailyCalories;
    return dailyCalories;
  }
}
/* Event Listeners */
const daily_calories_element = document.querySelector("#calories");
daily_calories_element.addEventListener("click", dailyCaloriesNeeds);
