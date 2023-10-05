import { atom } from "recoil";

export const allPokemonState = atom({
  key: 'allPokemonState',
  default: [],
});

export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});