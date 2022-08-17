import pokemonApi from "@/api/PokemonApi";

describe( 'pokemonApi', () => {
    test( 'axios debe tener la baseURL', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    } )
} )