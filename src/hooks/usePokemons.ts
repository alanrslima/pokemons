import { useQuery } from "react-query";
import { PokemosService } from "../services/pokemons.service";

export const usePokemons = () => {
  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery("pokemons", PokemosService.list);

  return {
    pokemons,
    isLoading,
    error,
  };
};
