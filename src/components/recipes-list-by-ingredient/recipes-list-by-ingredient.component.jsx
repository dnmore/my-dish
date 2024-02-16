import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card.component";
import {
  RecipesListByIngredientContainer,
  Error,
} from "./recipes-list-by-ingredient.styles";

const RecipesListByIngredient = ({ parameter }) => {
  const [ingredientRecipes, setIngredientRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${parameter}`)
      .then((response) => response.json())
      .then((data) => setIngredientRecipes(data.meals));
  }, [parameter]);

  if (ingredientRecipes === null)
    return <Error>Oops.. this ingredient has not been found!</Error>;

  return (
    <RecipesListByIngredientContainer>
      {ingredientRecipes.map((card) => {
        return <RecipeCard card={card} key={card.idMeal} />;
      })}
    </RecipesListByIngredientContainer>
  );
};

export default RecipesListByIngredient;
