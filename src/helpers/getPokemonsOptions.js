import pokemonApi from "@/api/PokemonApi";



export const getPokemons = () => {
    //Creamos un arreglo de 650 espacios
    const pokemonsArr = Array.from( Array(650));
    //Numeramos de 1 a 650
    return pokemonsArr.map( ( _ , index) => index + 1 )
}

const getPokemonsOptions = async () => {
    //Se mezcla el arreglo aleatoriamente
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 );
    //Extraemos las primeras 4 opciones
    const pokemons = await getPokemonsNames( mixedPokemons.splice(0,4) )
    console.table(pokemons)
    return pokemons
}

export const getPokemonsNames = async ( [a,b,c,d] = [] ) => {
    //Realizamos las 4 peticiones 
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [ pk1, pk2, pk3, pk4 ] = await Promise.all(promiseArr)
    //Retornamos la informacion de las peticiones
    return [
        {name: pk1.data.name, id: pk1.data.id},
        {name: pk2.data.name, id: pk2.data.id},
        {name: pk3.data.name, id: pk3.data.id},
        {name: pk4.data.name, id: pk4.data.id}
    ]
}

export default getPokemonsOptions