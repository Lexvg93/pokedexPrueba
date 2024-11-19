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