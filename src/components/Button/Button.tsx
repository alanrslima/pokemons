import React from "react";

import { Container, Title, Loading } from "./Button.style";

interface IButton {
  onPress?: () => void;
  title?: string;
  loading?: boolean;
}
export const Button: React.FC<IButton> = ({ onPress, title, loading }) => {
  return (
    <Container onPress={onPress}>
      {loading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
};
