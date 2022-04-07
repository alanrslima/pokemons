import { useNavigation } from "@react-navigation/native";
import React from "react";
import { HeaderButton } from "../../components/HeaderButton/HeaderButton";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SimpleItem } from "../../components/SimpleItem/SimpleItem";
import { usePokemons } from "../../hooks/usePokemons";
import { Container, List } from "./Pokemons.style";

export const Pokemons: React.FC = () => {
  const { pokemons, error, isLoading } = usePokemons();

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => navigation.navigate("Profile")} />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <List
        ListHeaderComponent={() => <SearchBar />}
        keyExtractor={(item, index) => `${index}`}
        data={pokemons}
        renderItem={({ item }) => <SimpleItem title={item.name} />}
      />
    </Container>
  );
};
