import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card";
import { RecipesListSkeleton } from "../skeletons/skeletons";
import Pagination from "../pagination/pagination";

const RecipesListByIngredient = ({ parameter }) => {
  const [ingredientRecipes, setIngredientRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);

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
    setCurrentPage(1);
    getIngredientRecipes();
  }, [parameter]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  if (!ingredientRecipes) {
    return (
      <p className="px-4 text-sm text-coral-red bg-off-white text-center">
        No data to display for <strong>{parameter}</strong>, please try another
        ingredient
      </p>
    );
  } else {
    const currentRecipes = ingredientRecipes.slice(
      indexOfFirstRecipe,
      indexOfLastRecipe
    );

    const totalPages = Math.ceil(ingredientRecipes.length / recipesPerPage);
    return (
      <div className="bg-off-white text-charcoal-gray h-screen">
        <div className="mx-auto max-w-2xl px-4 py-10 lg:max-w-4xl ">
          <h4 className="text-lg font-bold ">{parameter}</h4>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-2 ">
            {loading ? (
              <RecipesListSkeleton />
            ) : (
              currentRecipes.map((card) => {
                return <RecipeCard card={card} key={card.idMeal} />;
              })
            )}
          </div>
          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
    );
  }
};

export default RecipesListByIngredient;
