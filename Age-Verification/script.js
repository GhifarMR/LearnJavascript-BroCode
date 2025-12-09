const input = document.getElementById("myInput");
const submit = document.getElementById("mySubmit");
const result = document.getElementById("result");

submit.onclick = function () {
  age = input.value;

  if (age >= 18) {
    result.innerHTML = "You are old enough to enter this site";
  } else if (age <= 0) {
    result.innerHTML = "Enter valid age";
  } else {
    result.innerHTML = "You must be 18+ to enter this site";
  }
};
