async function fetchData(event) {
  event.preventDefault();
  
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const errorMessage = document.getElementById("errorMessage");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      errorMessage.textContent = "Couldn't get the data";
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = `${pokemonSprite}`;
    imgElement.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
}
