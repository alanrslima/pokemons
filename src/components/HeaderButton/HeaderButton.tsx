import React from "react";
import { Container } from "./HeaderButton.style";
import FeatherIcons from "@expo/vector-icons/Feather";

interface IHeaderButton {
  onPress?: () => void;
}
export const HeaderButton: React.FC<IHeaderButton> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <FeatherIcons name="user" size={20} />
    </Container>
  );
};
