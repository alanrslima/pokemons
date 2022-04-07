import { useNavigation } from "@react-navigation/native";
import React from "react";
import { HeaderButton } from "../../components/HeaderButton/HeaderButton";
import { SimpleItem } from "../../components/SimpleItem/SimpleItem";
import { usePokemons } from "../../hooks/usePokemons";
import { IPokemon } from "../../types/pokemon";
import { Container, List } from "./Pokemons.style";

export const Pokemons: React.FC = () => {
  const { pokemons, error, isLoading, handleFavorite, isFavorite } =
    usePokemons();

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => navigation.navigate("Profile")} />
      ),
    });
  }, [navigation]);

  if (isLoading) {
    // return loading
  }

  if (error) {
    // return error page
  }

  // TODO: Include pagination
  return (
    <Container>
      <List
        // ListHeaderComponent={() => <SearchBar />} // TODO: include search feature
        keyExtractor={(_, index) => `${index}`}
        data={pokemons}
        renderItem={({ item }: { item: IPokemon }) => (
          <SimpleItem
            favorite={isFavorite(item)}
            onPressFavorite={() => handleFavorite(item)}
            title={item.name}
          />
        )}
      />
    </Container>
  );
};
