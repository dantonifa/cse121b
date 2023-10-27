let weight_kg = Number(document.querySelector("#weight").value);
let height_cm = Number(document.querySelector("#height").value);
let age_years = Number(document.querySelector("#age").value);

function basal_metabolic_rate(weight_kg, height_cm, age_years, gender) {
  let gender = document.querySelector("#gender").value;
  if (gender == "male") {
    const bmr =
      66.5 + 13.75 * weight_kg + 5.003 * height_cm - 6.755 * age_years;
    return bmr;
  } else {
    const bmr =
      655.1 + 9.563 * weight_kg + 1.85 * height_cm - 4.676 * age_years;
    return bmr;
  }
}
function dailyCaloriesNeeds() {
  let activity = document.querySelector("#activity").value;
  if (activity == "sedentary") {
    const dailyCalories = bmr * 1.2;
    return dailyCalories;
  } else if (activity == "light") {
    const dailyCalories = bmr * 1.375;
    return dailyCalories;
  } else if (activity == "moderate") {
    const dailyCalories = bmr * 1.55;
    return dailyCalories;
  } else if (activity == "hard_exercise") {
    const dailyCalories = bmr * 1.725;
    return dailyCalories;
  } else {
    const dailyCalories = bmr * 1.9;
    return dailyCalories;
  }
}
const element = document.geyElementById("calories").innerHTML;
element.addEventListener("click", dailyCaloriesNeeds);
