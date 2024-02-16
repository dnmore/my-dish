import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import RecipeCard from "../../components/recipe-card/recipe-card.component";
import { RecipesListContainer } from "./recipes-list-by-category.styles";

const RecipesListByCategory = () => {
  const location = useLocation() 
  const { from } = location.state
  const [categoryRecipes, setCategoryRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${from}`)
      .then((response) => response.json())
      .then((data) => setCategoryRecipes(data.meals));
  }, [from]);
 
  return (
    <RecipesListContainer>
      {categoryRecipes.map((card) => {
        return <RecipeCard card={card} key={card.idMeal} />;
      })}
    </RecipesListContainer>
  );
};

export default RecipesListByCategory;
