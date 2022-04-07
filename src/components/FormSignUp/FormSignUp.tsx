import React from "react";
import { useSignUp } from "../../hooks/useSignUp";
import { BoxAlert } from "../BoxAlert/BoxAlert";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const FormSignUp: React.FC = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup,
    loading,
    error,
  } = useSignUp();

  const buttonDisabled =
    !email.length || !password.length || !confirmPassword.length;

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
      <Input
        value={confirmPassword}
        label="Confirme sua senha"
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {error && <BoxAlert message={error} />}

      <Button
        disabled={buttonDisabled}
        title="Cadastrar"
        loading={loading}
        onPress={handleSignup}
      />
    </>
  );
};
