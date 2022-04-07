import React from "react";
import { FormSignIn } from "../../components/FormSignIn/FormSignIn";
import { Container } from "./SignIn.style";

export const SignIn: React.FC = () => {
  return (
    <Container>
      <FormSignIn />
    </Container>
  );
};
