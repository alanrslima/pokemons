import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";

const Stack = createNativeStackNavigator();

export const GuestRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
