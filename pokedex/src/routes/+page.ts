import type { PageLoad } from "./$types";


let i = await Math.floor(Math.random() * 500) + 1;


export const load = async () => {
    const getPokemon = async () => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon  = await result.json();
        return {
            name: pokemon.name,
            id: pokemon.id,
            sprite: pokemon.sprites.front_default
           
        }
    };

    return {
        attributes: getPokemon()
    };
};