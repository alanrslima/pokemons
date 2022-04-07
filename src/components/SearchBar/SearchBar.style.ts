import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px 16px;
  background: #dedede;
  border-radius: 10px;
  margin: 12px 16px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  flex: 1;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;
