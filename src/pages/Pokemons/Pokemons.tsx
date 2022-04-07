import React from "react";
import { FlatList, View, Text } from "react-native";
import { usePokemons } from "../../hooks/usePokemons";

export const Pokemons: React.FC = () => {
  const { pokemons, error, isLoading } = usePokemons();

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={pokemons}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
