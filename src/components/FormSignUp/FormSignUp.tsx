import React from "react";
import { Button, TextInput, View } from "react-native";
import { useSignUp } from "../../hooks/useSignUp";

export const FormSignUp: React.FC = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup,
  } = useSignUp();

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        placeholder="Confirme sua senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};
