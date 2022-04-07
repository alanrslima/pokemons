import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// import { Container } from './styles';

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);
      // TODO: Verificação dos dados de input
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario criado com sucesso");
      setLoading(false);
    } catch (error) {
      // TODO: caso de erro
      console.log(error);
    }
  };

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignup,
  };
};
