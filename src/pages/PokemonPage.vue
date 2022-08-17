<template>
    <h1 v-if="!pokemon" >Espere por favor...</h1>
    <div v-else >
        <h2>¿Quien es ese Pokemon?</h2>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selecction="checkAnswer" />
    </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonsOptions from '@/helpers/getPokemonsOptions'

//console.log(getPokemonsOptions())

export default {
    components: { 
        PokemonPicture,
        PokemonOptions    
    },
    data(){
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    methods: {
        async mixPokemonArr(){
            //Obtenemos las opciones de pokemons
            this.pokemonArr = await getPokemonsOptions()
            //Generamos la opcion correcta de entre las posiciones de pokemonArr
            const rnInt = Math.floor( Math.random() * 4 )
            //Asignamos la posicion correcta a el pokemon
            this.pokemon = this.pokemonArr[rnInt]
        },
        checkAnswer( pokemonId ){
            console.log(pokemonId)
            if(pokemonId === this.pokemon.id){
                this.showPokemon = true
            }
        }
    },
    mounted(){
        //Cuando esta montado el componente
        this.mixPokemonArr()
    }
}
</script>

<style>

</style>