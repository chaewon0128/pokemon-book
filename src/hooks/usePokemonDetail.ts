import { useQuery } from "@tanstack/react-query";
import { getPokemonDetailAPI, getPokemonSpeciesAPI } from "../api/getPokemon";
import { POKEMON_DETAIL, POKEMON_SPECIES } from "../constant";


const usePokemonDetail = (pokemonId: string) => {
    const { data: detailData, isLoading: isDetailLoading } = useQuery(
        [POKEMON_DETAIL, pokemonId],
        () => getPokemonDetailAPI(pokemonId),
        { enabled: !!pokemonId }
    );
    const { data: speciesData, isLoading: isSpeciesLoading } = useQuery(
        [POKEMON_SPECIES, pokemonId],
        () => getPokemonSpeciesAPI(pokemonId),
        { enabled: !!pokemonId }
    );

    const getKoreanInfo = (key: string) => {
        return speciesData?.data[key]?.find(
            (entry: { language: { name: string } }) =>
                entry.language.name === "ko"
        );
    };

    const koreanName = getKoreanInfo("names");
    const koreanInfo = getKoreanInfo("flavor_text_entries");


    const pokemonDetail = {
        ...detailData,
        korean_name: koreanName ? koreanName.name : 'N/A',
        korean_info: koreanInfo ? koreanInfo?.flavor_text : 'N/A',
        evolution_chain: speciesData?.data.evolution_chain
    };

    const isLoading = isDetailLoading || isSpeciesLoading;

    return { pokemonDetail, isLoading };
};

export default usePokemonDetail;

