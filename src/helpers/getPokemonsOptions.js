


const getPokemons = () => {
    //Creamos un arreglo de 650 espacios
    const pokemonsArr = Array.from( Array(650));
    //Numeramos de 1 a 650
    return pokemonsArr.map( ( _ , index) => index + 1 )
}

const getPokemonsOptions = () => {
    //Se mezcla el arreglo aleatoriamente
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 );
    //Extramos las primeras 4 opciones
    getPokemonsNames( mixedPokemons.splice(0,4) )
}

const getPokemonsNames = ( [a,b,c,d] = [] ) => {
    console.log(a,b,c,d)
}

export default getPokemonsOptions