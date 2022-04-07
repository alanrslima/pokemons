import React from "react";
import { TextInputProps } from "react-native";
import { Container, Label, InputText } from "./Input.style";

interface Input extends TextInputProps {
  label?: string;
}
export const Input: React.FC<Input> = ({ label, ...rest }) => {
  return (
    <Container>
      <Label>label</Label>
      <InputText {...rest} />
    </Container>
  );
};
