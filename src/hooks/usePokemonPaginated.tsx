import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/ability/?limit=40&offset=20')

    const loadPokemons = async () => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList( response.data.results )
    }
    
    const mapPokemonList = ( pokemonList: Result[] ) => {
        pokemonList.forEach (poke => console.log(poke.url))
    }

    useEffect(() => {
    
        loadPokemons();

    }, [])

    return{
        simplePokemonList
    }
}
