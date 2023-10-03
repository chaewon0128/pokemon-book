import { getPokemonDetaiWithURL } from './../api/getPokemon';
import { useInfiniteQuery } from "@tanstack/react-query";
import { ALL_POKEMON } from '../constant';

const usePokemonList = () => {
    const {
        data,
        fetchNextPage: getPokemonNextPage,
        hasNextPage: isPokemonNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery([ALL_POKEMON], ({ pageParam = 'https://pokeapi.co/api/v2/pokemon' }) => getPokemonDetaiWithURL(pageParam), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage?.data.next
            return nextPage
        }
    })

    const allPokemons = data?.pages[0].data.results



    return { allPokemons, isFetchingNextPage, getPokemonNextPage, isPokemonNextPage }
}

export default usePokemonList;