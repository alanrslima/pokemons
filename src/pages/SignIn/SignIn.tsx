import React from "react";
import { View } from "react-native";
import { FormSignIn } from "../../components/FormSignIn/FormSignIn";
import { style } from "./SignIn.style";

export const SignIn: React.FC = () => {
  return (
    <View style={style.container}>
      <FormSignIn />
    </View>
  );
};
