const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = "";

    if (bmi < 18.6) {
      message = "You are underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "Your BMI is normal";
    } else {
      message = "You are overweight";
    }

    // show result + message
    results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>${message}</span>`;
  }
});
