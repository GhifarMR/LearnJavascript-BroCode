const myBox = document.getElementById("myBox");
const mybutton = document.querySelector("myButton");
let count = 0;
let lastNum = 0;

myButton.addEventListener("click", (event) => {
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * 4) + 1;
  } while (randomNum == lastNum);

  lastNum = randomNum;

  switch (randomNum) {
    case 1:
      myBox.style.backgroundColor = "red";
      myBox.textContent = "Ooouhh! 🥵";
      break;
    case 2:
      myBox.style.backgroundColor = "orange";
      myBox.textContent = "Stoppp! 😖";
      break;
    case 3:
      myBox.style.backgroundColor = "darkred";
      myBox.textContent = "OOouuff! 😵‍💫";
      break;
    case 4:
      myBox.style.backgroundColor = "tomato";
      myBox.textContent = "OUCH! 😟";
      break;
  }
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Dont do it 😏";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "green";
  myBox.textContent = "Click Me 😃";
});
