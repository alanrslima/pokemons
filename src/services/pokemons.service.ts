import { IPokemon } from "../types/pokemon";

export const PokemosService = {
  list: async (): Promise<IPokemon[]> => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  },
};
