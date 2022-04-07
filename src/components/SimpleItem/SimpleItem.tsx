import React from "react";
import { Text } from "react-native";
import { Container, Star } from "./SimpleItem.style";

interface ISimpleItem {
  title?: string;
  onPressFavorite?: () => void;
}
export const SimpleItem: React.FC<ISimpleItem> = ({
  title,
  onPressFavorite,
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Star onPress={onPressFavorite} favorite={false} />
    </Container>
  );
};
