const pokeconstainer = document.getElementById('poke-container')

const pokemon_count  = 50

const colos = {

}

const fetchPokemons = async ()=>{
    for(let i = 1; i<=pokemon_count;i++){
await getPokemon(i)
    }
}

const getPokemon = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const res = await fetch(url)
    const data = await res.json()
createPokemonCard(data)
}

fetchPokemons()

const createPokemonCard =(pokemon)=>{
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')


    const pokemonInnerHTML =`
    <div class="pokemon" style="background-color: rgb(222, 253, 224)">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}"
          />
        </div>
        <div class="info">
          <span class="number"></span>
          <h3 class="name">${pokemon.name}</h3>
          
        </div>
      </div>
      `

    pokemonEl.innerHTML = pokemonInnerHTML

    pokeconstainer.appendChild(pokemonEl)

}
