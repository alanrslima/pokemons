import styled from "styled-components/native";
import AwesomeIcons from "@expo/vector-icons/FontAwesome";

export const Container = styled.View`
  padding: 16px;
  background: white;
  border: 0.5px solid #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface IStar {
  favorite?: boolean;
}
export const Star = styled(AwesomeIcons).attrs((props: IStar) => ({
  name: props.favorite ? "star" : "star-o",
  size: 25,
  color: props.favorite ? "gold" : "#ccc",
}))``;
