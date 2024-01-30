import { useState } from "react";
import RecipesListByIngredient from "../../components/recipes-list-by-ingredient/recipes-list-by-ingredient.component";

import {
  SearchContainer,
  FormContainer,
  SearchInput,
  SearchButton,
} from "./search.styles";

export default function Search() {
  const [mainIngredient, setMainIngredient] = useState("");
  const [parameter, setParameter] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setParameter(mainIngredient.toLocaleUpperCase());
    setMainIngredient("");
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={onSubmitHandler}>
        <SearchInput
          type="text"
          placeholder="type ingredient here"
          value={mainIngredient}
          onChange={(event) => {
            setMainIngredient(event.target.value);
          }}
        ></SearchInput>
        <SearchButton type="Submit">SEARCH</SearchButton>
      </FormContainer>
      <RecipesListByIngredient parameter={parameter} />
    </SearchContainer>
  );
}
