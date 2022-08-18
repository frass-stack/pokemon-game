import getPokemonsOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonsOptions";

describe('getPokemons function', ()=>{
    test('Debe ser un arreglo de numeros y tener un tamaño de 650', ()=> {
        const pokemonArr = getPokemons()
        expect(pokemonArr.length).toBe(650)
        expect(pokemonArr[0]).toBe(1)
    })

    test('Debe ser un arreglo de 4 pokemons', async ()=> {
        const pokemonArr = await getPokemonsNames([1,2,3,4])
        expect(pokemonArr[0].name).toBe('bulbasaur')
        expect(pokemonArr[1].name).toBe('ivysaur')
        expect(pokemonArr[2].name).toBe('venusaur')
        expect(pokemonArr[3].name).toBe('charmander')
    })

    test('Debe ser un arreglo de 4 pokemons mezclado', async ()=> {
        const pokemonArr = await getPokemonsOptions()
        expect(pokemonArr.length).toBe(4)
        expect(pokemonArr).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    })
    
})