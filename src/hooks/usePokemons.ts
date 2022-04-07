import { useState } from "react";
import { useQuery } from "react-query";
import { PokemosService } from "../services/pokemons.service";
import { IPokemon } from "../types/pokemon";

export const usePokemons = () => {
  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery("pokemons", PokemosService.list);

  const [favorites, setFavorites] = useState<IPokemon[]>([]);

  const handleFavorite = (item: IPokemon) => {
    const exists = favorites?.find((i) => i.name === item.name);
    if (exists) {
      setFavorites(favorites.filter((i) => i.name !== item.name));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const isFavorite = (item: IPokemon) => {
    return !!favorites.find((i) => i.name === item.name);
  };

  return {
    pokemons,
    isLoading,
    error,
    favorites,
    isFavorite,
    handleFavorite,
  };
};
