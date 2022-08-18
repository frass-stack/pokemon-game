import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { pokemons } from '../mocks/pokemon.mocks'

describe('PokemonOptions Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe haber 4 li y cada uno tener el nombre del pokemon que corresponde', () => {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        expect(l1.text()).toBe('pikachu')
        expect(l2.text()).toBe('charmander')
        expect(l3.text()).toBe('venusaur')
        expect(l4.text()).toBe('mew')
    })

    test('Debe haber emitir el id correspondiente mediante el evento "emit"', () => {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')

        expect(wrapper.emitted('selecction')[0]).toEqual([5])
        expect(wrapper.emitted('selecction')[1]).toEqual([10])
        expect(wrapper.emitted('selecction')[2]).toEqual([15])
        expect(wrapper.emitted('selecction')[3]).toEqual([20])
    })
})