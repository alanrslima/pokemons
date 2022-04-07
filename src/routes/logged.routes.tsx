import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokemons } from "../pages/Pokemons/Pokemons";
import { Profile } from "../pages/Profile/Profile";

const Stack = createNativeStackNavigator();

export const LoggedRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemons" component={Pokemons} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
