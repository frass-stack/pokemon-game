import { getPokemons } from "@/helpers/getPokemonsOptions";

describe('getPokemons function', ()=>{
    test('Debe ser un arreglo de numeros y tener un tamaño de 650', ()=> {
        const pokemonArr = getPokemons()
        expect(pokemonArr.length).toBe(650)
        expect(pokemonArr[0]).toBe(1)
    })
    
})