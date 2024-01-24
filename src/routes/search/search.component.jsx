import { useState } from "react";
import RecipesListByIngredient from "../../components/recipes-list-by-ingredient/recipes-list-by-ingredient.component";

import "./search.styles.scss";


export default function Search() {
  const [mainIngredient, setMainIngredient] = useState("");
  const [parameter, setParameter] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setParameter(mainIngredient.toLocaleUpperCase());
    setMainIngredient("");
  };

  return (
    <div className="search-container">
      <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="type here"
        value={mainIngredient}
        onChange={(event) => {
          setMainIngredient(event.target.value);
        }}
      ></input>
      <button type="Submit">Search</button>
      <h3>{parameter}</h3>
    </form>
    <RecipesListByIngredient parameter={parameter} />
    </div>
    

  );
}

