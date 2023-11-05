/*CSE 121 PROJECT DAILY CALORIES NEEDS*/
/*AUTHOR: DAVID ANTONIO FAJARDO PONCE*/
/*Functions for the project*/
/*Function to calculate the basal metabolic rate*/
function basal_metabolic_rate() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let age = Number(document.getElementById("age").value);
  let gender = document.querySelector("#gender").value;
  if (gender == "male") {
    bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    return bmr;
  }
  if (gender == "female") {
    bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    return bmr;
  } else {
    bmr = "";
  }
}

/* BMR Listener */
const element = document.querySelector("#BMR_calculate");
element.addEventListener("click", displayBMR);

/* Function displayBMR() */

function displayBMR() {
  let bmr = basal_metabolic_rate();
  let element = document.querySelector("#bmr_calculus");
  element.textContent = `Your BMR is ${bmr} kilocalories per day`;
  return bmr;
}

/*Exclusively use template literals when building strings.*/

/*Function to calculate the daily calories needs */

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

/* Daily Calories Listener */

const daily_calories_element = document.querySelector("#calories");
daily_calories_element.addEventListener("click", displayDailyCaloriesNeeds);

/* Function displayDailyCaloriesNeeds() */

function displayDailyCaloriesNeeds() {
  let dailyCalories = dailyCaloriesNeeds();
  let element = document.querySelector("#daily_calories");
  element.textContent = `Your daily calories needs are 
  ${dailyCalories.toFixed(2)} kilocalories per day`;
  return dailyCalories;
}
/*Function to calculate the calories per meal*/
function caloriesPerMeal() {
  let dailyCalories = dailyCaloriesNeeds();
  let element = document.querySelector("#calories_per_meal");
  const caloriesPerMeal = dailyCalories / 3;
  element.value = caloriesPerMeal;
}
