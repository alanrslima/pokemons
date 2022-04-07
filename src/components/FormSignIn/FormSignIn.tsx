import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSignIn } from "../../hooks/useSignIn";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label, WrapperSignUpMessage, LabelButton } from "./FormSignIn.style";

export const FormSignIn: React.FC = () => {
  const { email, password, setEmail, setPassword, handleSignIn } = useSignIn();

  const navigation = useNavigation();

  return (
    <>
      <Input
        value={email}
        onChangeText={setEmail}
        label="E-mail"
        keyboardType="email-address"
      />
      <Input
        value={password}
        label="Senha"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Logar" onPress={handleSignIn} />

      <WrapperSignUpMessage>
        <Label>
          Ainda não possui um conta?{" "}
          <LabelButton onPress={() => {}}>Cadastre-se agora</LabelButton>
        </Label>
      </WrapperSignUpMessage>
    </>
  );
};
