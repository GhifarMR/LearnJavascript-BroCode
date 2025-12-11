function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;

  if (numOfDice < 1) {
    alert("Enter valid number");

  } else if (numOfDice > 10) {
    alert("Too large max 10");

  } else {
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const sumResult = document.getElementById("sumResult");
    let sum = 0;
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      sum += value;
      values.push(value);
      images.push(`<img src="./dice_images/${value}.png" alt=${value}>`);
    }

    diceResult.innerHTML = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images;
    sumResult.innerHTML = `Total : ${sum}`;
  }
}
