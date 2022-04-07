import React, { useState } from "react";

import { Container, Input, SearchButton } from "./SearchBar.style";
import FeatherIcons from "@expo/vector-icons/Feather";

export const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Input value={input} onChangeText={setInput} placeholder="Pesquisar" />
      <SearchButton>
        <FeatherIcons size={20} color="#aaa" name="search" />
      </SearchButton>
    </Container>
  );
};
