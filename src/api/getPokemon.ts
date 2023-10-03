import axios from "axios";
import instance from "./instance"

export const getPokemonDetaiWithURL = async (url: string) => {
    const response = await axios.get(url);

    return response;
}

export const getPokemonDetailAPI = async (pokemonId: string) => {
    const response = await instance.get(`/pokemon/${pokemonId}`);

    return response;
}

export const getPokemonSpeciesAPI = async (pokemonId: string) => {
    const response = await instance.get(`/pokemon-species/${pokemonId}`);

    return response;
}

export const getPokemonEvolutionAPI = async (pokemonId: string) => {
    const response = await instance.get(`/evolution-chain/${pokemonId}`);

    return response;
}
