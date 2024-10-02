// gets pokemon data
const fetchPokemonData = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    return pokemonData;
};
// displays pokemon data based on user input
document.addEventListener("DOMContentLoaded", (event) => {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", async () => {
        const userInput = document.getElementById("form-input-1").value.toLowerCase();
        const pokemonCharacterData = await fetchPokemonData(userInput);
        const pokemonDetailsContainer = document.getElementById("pokemon-data");
        pokemonDetailsContainer.innerHTML = `
            <div class="d-flex justify-content-center my-5">
                <h2 class="display-3 text-white">${pokemonCharacterData.name.charAt(0).toUpperCase() + pokemonCharacterData.name.slice(1)}</h2>
                <img src="${pokemonCharacterData.sprites.front_default}" alt="${pokemonCharacterData.name}">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md mb-3 mb-md-0 text-white">
                        <h3>Abilities:</h3>
                        <ul>
                            ${pokemonCharacterData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="col-md text-white">
                        <h3>Base Experience:</h3>
                        <p>${pokemonCharacterData.base_experience}</p>
                    </div>
                </div>
            </div>
        `;
    });
  });