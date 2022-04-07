import React from "react";
import { render } from "@testing-library/react-native";

import { FormSignUp } from "../../src/components/FormSignUp/FormSignUp";

describe("<FormSignUp />", () => {
  it("renders default elements", () => {
    const { getAllByText } = render(<FormSignUp />);
    expect(getAllByText("E-mail").length).toBe(1);
    expect(getAllByText("Senha").length).toBe(1);
    expect(getAllByText("Confirme sua senha").length).toBe(1);
    expect(getAllByText("Logar").length).toBe(1);
  });
});
