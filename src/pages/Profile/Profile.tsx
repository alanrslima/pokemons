import React from "react";
import { Button } from "../../components/Button/Button";
import { useSignOut } from "../../hooks/useSignOut";

import { Container } from "./Profile.style";

export const Profile: React.FC = () => {
  const { handleSignOut } = useSignOut();

  return (
    <Container>
      <Button title="Sair" onPress={handleSignOut} />
    </Container>
  );
};
