import React from "react";

import { Container, Message } from "./BoxAlert.style";

interface IBoxAlert {
  message?: string;
}
export const BoxAlert: React.FC<IBoxAlert> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
