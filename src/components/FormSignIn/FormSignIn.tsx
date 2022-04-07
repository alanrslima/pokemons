import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSignIn } from "../../hooks/useSignIn";
import { BoxAlert } from "../BoxAlert/BoxAlert";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label, WrapperSignUpMessage, LabelButton } from "./FormSignIn.style";

export const FormSignIn: React.FC = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSignIn,
    error,
    loading,
  } = useSignIn();

  const navigation = useNavigation();

  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  const buttonDisabled = !email.length || !password.length;

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
      {error && <BoxAlert message={error} />}

      <Button
        disabled={buttonDisabled}
        title="Logar"
        loading={loading}
        onPress={handleSignIn}
      />

      <WrapperSignUpMessage>
        <Label>
          Ainda não possui um conta?{" "}
          <LabelButton onPress={onPressSignUp}>Cadastre-se agora</LabelButton>
        </Label>
      </WrapperSignUpMessage>
    </>
  );
};
