import React from "react";
import { Button, TextInput, View } from "react-native";
import { useSignIn } from "../../hooks/useSignIn";
import { useSignOut } from "../../hooks/useSignOut";
import { Input } from "../Input/Input";

// import { Container } from './styles';

export const FormSignIn: React.FC = () => {
  const { email, password, setEmail, setPassword, handleSignIn } = useSignIn();

  const { handleSignOut } = useSignOut();

  return (
    <View>
      <Input
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input value={password} onChangeText={setPassword} secureTextEntry />
      {/* <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      /> */}
      <Button title="Logar" onPress={handleSignIn} />
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};
