async function getPokemon(e) {
	e.preventDefault()
	const pokemonName = document.querySelector("#search").value

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => {
    
    console.log(response.status);
    console.log(response.url);

    if (response.status === 404) {
      throw new Error("That Pokemon Does Not exist...");
    }
    return response.json();
})
.then((data) => {
    let name = document.querySelector("#name");
    let defaultSprite = document.querySelector("#default-sprite");
    let shinySprite = document.querySelector("#shiny-sprite");

    name.innerText = data.name;
    defaultSprite.src = data.sprites.front_default;
    shinySprite.src = data.sprites.front_shiny;

    console.log(data);
  })
  .catch((error) => {
    let name = document.querySelector("#name");
    name.innerText = "Pokemon not found...";
    console.error(error);
  });
}

const form = document.querySelector("#pokemonForm")
form.addEventListener("submit", getPokemon)




