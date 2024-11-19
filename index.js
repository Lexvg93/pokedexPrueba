const listaPokemon = document.querySelector('#listaPokemon');
const botonesHeader = document.querySelector('.btn-header');
let pokemons = [];
let url = 'https://pokeapi.co/api/v2/pokemon/';

const cargaPokemon = async()=>{
    for (let i=1; i<=151;i++){
        const response = await fetch(url+`${i}`);
        if(response.ok){
            const jsResponse = await response.json();
            pokemons.push(jsResponse);

        }
    }
}

const mostrarPokemon=(poke)=>{
    let tipos = poke.types.map((type)=>`<p class="${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join('');
    let pokeId = poke.id.toString();
    if(pokeId.length === 1){
        pokeId = "00"+pokeId; 
    }else if(pokeId.length===2){
        pokeId = "0"+pokeId;
    }

    const cuadroPokemon = document.createElement("div");
    cuadroPokemon.classList.add("pokemon"); 
    cuadroPokemon.innerHTML=`
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weigth}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(cuadroPokemon);
}