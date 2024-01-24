import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./recipe.styles.scss";

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
    <div className="recipe-container">
      {recipe.map((detail) => {
        return (
          <div className="recipe-body-container">
            <h2>{detail.strMeal}</h2>
            <img src={detail.strMealThumb} alt={detail.strMeal} />

            <h3>How to prepare {detail.strMeal}</h3>
            <p>{detail.strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
