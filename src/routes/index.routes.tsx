import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Pokemons } from "../pages/Pokemons/Pokemons";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateProps } from "../store/createStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onSignIn, onSignOut } from "../store/modules/session/actions";
import { GuestRoutes } from "./guest.routes";
import { LoggedRoutes } from "./logged.routes";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const dispatch = useDispatch();

  // Include auth state changed in a separated file
  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(onSignIn({ user, providerId: null, operationType: "signIn" }));
      } else {
        dispatch(onSignOut());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const { session } = useSelector((state: StoreStateProps) => state.session);

  return (
    <NavigationContainer>
      {session ? <LoggedRoutes /> : <GuestRoutes />}
    </NavigationContainer>
  );
};
