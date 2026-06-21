const pokemonCard = document.querySelector(".pokemon-card")
const errorMessage = document.getElementById("error")
async function pokemonFetching() {
    try {
        const inputName = document.getElementById('pokemon').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
        const jsonPokemon = await response.json()

        pokemonCard.classList.add("active")
        errorMessage.innerHTML = ""

        const pokemonName = document.getElementById('pokemon-name');
        const pokemonNumber = document.getElementById('pokemon-number');
        const pokemonType1 = document.querySelectorAll('.pokemon-types p')[0];
        const pokemonType2 = document.querySelectorAll('.pokemon-types p')[1];
        const pokemonFrontImg = document.querySelectorAll('.pokemon-img img')[0];
        const pokemonBackImg = document.querySelectorAll('.pokemon-img img')[1];

        const pokemonStat = document.querySelectorAll(".pokemon-stat .pokemon-text")
        const pokemonStatBar = document.querySelectorAll(".stat-bar>div")

        const pokemonAbility1 = document.querySelectorAll(".pokemon-ability .pokemon-text")[0]
        const pokemonAbilityValue1 = document.querySelectorAll(".pokemon-ability .ability-stat")[0]
        const pokemonAbility2 = document.querySelectorAll(".pokemon-ability .pokemon-text")[1]
        const pokemonAbilityValue2 = document.querySelectorAll(".pokemon-ability .ability-stat")[1]

        const pokemonHeight = document.getElementById('pokemon-height');
        const pokemonWeight = document.getElementById('pokemon-weight');
        const pokemonHp = document.getElementById('pokemon-xp');

        pokemonName.innerHTML = jsonPokemon.name
        pokemonNumber.innerHTML = "#" + String(jsonPokemon.id).padStart(3, '0');
        pokemonType1.innerHTML = jsonPokemon.types[0].type.name
        if (jsonPokemon.types[1]) {
            pokemonType2.innerHTML = jsonPokemon.types[1].type.name;
            pokemonType2.style.display = 'flex';
        } else {
            pokemonType2.style.display = 'none';
        }
        pokemonFrontImg.setAttribute('src', jsonPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default)
        pokemonBackImg.setAttribute('src', jsonPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default)

        for (let i = 0; i < pokemonStat.length; i++) {
            pokemonStat[i].innerHTML = jsonPokemon.stats[i].base_stat
            pokemonStatBar[i].style.right = `${100 - (jsonPokemon.stats[i].base_stat / 225) * 100}%`
        }

        pokemonAbility1.innerHTML = jsonPokemon.abilities[0].ability.name
        pokemonAbilityValue1.innerHTML = jsonPokemon.abilities[0].is_hidden ? "hidden" : "main"
        pokemonAbility2.innerHTML = jsonPokemon.abilities[1].ability.name
        pokemonAbilityValue2.innerHTML = jsonPokemon.abilities[1].is_hidden ? "hidden" : "main"

        pokemonHeight.innerHTML = jsonPokemon.height / 10 + " m"
        pokemonWeight.innerHTML = jsonPokemon.weight / 10 + " kg"
        pokemonHp.innerHTML = jsonPokemon.base_experience

    } catch (error) {
        console.error(error);
        pokemonCard.classList.remove("active")
        errorMessage.innerHTML = "Wrong input or something went wrong. Try again!"
    }
}

const btnPokemon = document.getElementById('pokemon-btn');
btnPokemon.addEventListener('click', pokemonFetching)