import { shallowMount } from "@vue/test-utils";
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {

    test('snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 1,
                showPokemon: false
            }            
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 100,
                showPokemon: false
            }            
        })

        const [img1, img2] = wrapper.findAll('img')
        expect(img1.classes('hidden-pokemon')).toBe(true)
        expect(img1.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)
    })

    test('Debe mostrar la imagen del pokemon', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 100,
                showPokemon: true
            }            
        })
        console.log(wrapper.html())
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(img.classes('fade-in')).toBe(true)
        expect(img.classes('hidden-pokemon')).toBe(false)
    })

})