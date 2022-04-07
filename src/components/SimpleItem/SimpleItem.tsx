import React from "react";
import { Text } from "react-native";
import { Container, Star } from "./SimpleItem.style";

interface ISimpleItem {
  title?: string;
  onPressFavorite?: () => void;
  favorite?: boolean;
}
export const SimpleItem: React.FC<ISimpleItem> = ({
  title,
  onPressFavorite,
  favorite,
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Star onPress={onPressFavorite} favorite={favorite} />
    </Container>
  );
};
