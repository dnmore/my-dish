import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card";

const RecipesListByIngredient = ({ parameter }) => {
  const [ingredientRecipes, setIngredientRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getIngredientRecipes() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parameter}`
        );
        const data = await response.json();
        setLoading(false);

        if (data) {
          setIngredientRecipes(data.meals);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getIngredientRecipes();
  }, [parameter]);

  if (!ingredientRecipes) {
    return (
      <p className="text-center text-red-500">
        No data to display for <strong>{parameter}</strong> , please type
        another ingredient
      </p>
    );
  } else {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {parameter}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>Loading..</>
            ) : (
              ingredientRecipes.map((card) => {
                return <RecipeCard card={card} key={card.idMeal} />;
              })
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default RecipesListByIngredient;
