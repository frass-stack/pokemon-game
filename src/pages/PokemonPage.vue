<template>
    <div>
        <h2>¿Quien es ese Pokemon?</h2>
        <PokemonPicture :pokemonId="4" :showPokemon="true" />
        <PokemonOptions :pokemons="pokemonArr" />
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
            pokemonArr: []
        }
    },
    methods: {
        async mixPokemonArr(){
            this.pokemonArr = await getPokemonsOptions()
        }
    },
    mounted(){
        this.mixPokemonArr()
    }
}
</script>

<style>

</style>