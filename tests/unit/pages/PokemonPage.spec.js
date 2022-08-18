import { shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from "../mocks/pokemon.mocks";

describe('PokemonPage Component', () => {
    let wrapper;
    let mixPokemonArrSpy;
    beforeEach( () => {
        mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        wrapper = shallowMount( PokemonPage )
    } )

    test('Se debe llamar al metodo "mixPokemonArr" en el mounted', () => {
        expect(mixPokemonArrSpy).toHaveBeenCalled()
    })

    test('Debe hacer snapshot con una vez montado el componente', () => {
        wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Deben existir los componentes', () => {
        wrapper = shallowMount( PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions = wrapper.find('pokemon-options-stub')

        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOptions.exists()).toBeTruthy()

        expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
        expect(pokemonPicture.attributes('pokemonid')).toBe("5")
    })
})