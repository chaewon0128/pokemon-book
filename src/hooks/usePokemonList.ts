import { getPokemonDetaiWithURL } from './../api/getPokemon';
import { useInfiniteQuery } from "@tanstack/react-query";
import { ALL_POKEMON } from '../constant';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const usePokemonList = () => {
    const {
        data,
        fetchNextPage: getPokemonNextPage,
        hasNextPage: isPokemonNextPage,
        isFetchingNextPage,
        isLoading
    } = useInfiniteQuery([ALL_POKEMON], ({ pageParam = 'https://pokeapi.co/api/v2/pokemon' }) => getPokemonDetaiWithURL(pageParam), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage?.data.next
            if (!nextPage) return;
            return nextPage
        },
        select: (data) => ({
            pages: data.pages.flatMap((page) => page.data),
            pageParams: data.pageParams,
        }),
    })

    const { inView, ref } = useInView();
    const allPokemons = data?.pages;


    useEffect(() => {
        if (inView) {
            getPokemonNextPage();

        }
    }, [inView]);

    return { allPokemons, isFetchingNextPage, isPokemonNextPage, isLoading, ref }
}

export default usePokemonList;