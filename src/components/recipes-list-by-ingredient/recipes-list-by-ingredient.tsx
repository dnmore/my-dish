import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card";
import { RecipesListSkeleton } from "../skeletons/skeletons";
import Pagination from "../pagination/pagination";
import { RecipeDetails } from "../../types/definitions";
import { getData } from "../../utils/data.utils";

type RecipesListByIngredientProps = {
  parameter: string;
};

const RecipesListByIngredient = ({
  parameter,
}: RecipesListByIngredientProps) => {
  const [ingredientRecipes, setIngredientRecipes] = useState<RecipeDetails[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getIngredientRecipes = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getData<{ meals: RecipeDetails[] }>(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parameter}`
        );
        if (data?.meals) {
          setIngredientRecipes(data.meals);
        } else {
          setError("No recipes found.");
        }
      } catch (error) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };
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
            ) : error ? (
              <p className="text-red-500 py-20 text-center">{error}</p>
            ) : currentRecipes ? (
              currentRecipes.map((card: RecipeDetails) => {
                return <RecipeCard card={card} key={card.idMeal} />;
              })
            ) : null}
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
