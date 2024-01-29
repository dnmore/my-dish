import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card.component";

const RecipesListByIngredient = ({ parameter }) => {
  const [ingredientRecipes, setIngredientRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${parameter}`)
      .then((response) => response.json())
      .then((data) => setIngredientRecipes(data.meals));
  }, [parameter]);

  return (
    <div className="recipes-list-container">
      {ingredientRecipes.map((card) => {
        return <RecipeCard card={card} key={card.idMeal} />;
      })}
    </div>
  );
};

export default RecipesListByIngredient;
