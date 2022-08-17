<template>
    <div>
        <h2>¿Quien es ese Pokemon?</h2>
        <PokemonPicture :pokemonId="4" :showPokemon="true" />
        <PokemonOptions />
    </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

export default {
    components: { 
        PokemonPicture,
        PokemonOptions    
    }
}
</script>

<style>

</style>