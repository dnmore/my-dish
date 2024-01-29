import { useState } from "react";
import RecipesListByIngredient from "../../components/recipes-list-by-ingredient/recipes-list-by-ingredient.component";

import { SearchContainer} from "./search.styles";


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
      <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="type here"
        value={mainIngredient}
        onChange={(event) => {
          setMainIngredient(event.target.value);
        }}
      ></input>
      <button type="Submit">SEARCH</button>
      
    </form>
    <RecipesListByIngredient parameter={parameter} />
    </SearchContainer>
    

  );
}

