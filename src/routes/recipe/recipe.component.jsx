import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import RecipeBody from "../../components/recipe-body/recipe-body.component";

import { RecipeContainer } from "./recipe.styles";

const Recipe = () => {
  const location = useLocation();
  const { from } = location.state;
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${from}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, [from]);

  return (
    <RecipeContainer>
      {recipe.map((detail) => {
        return (
          <RecipeBody detail={detail} key={from} />
          
        );
      })}
    </RecipeContainer>
  );
};

export default Recipe;
