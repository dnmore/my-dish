import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card";
import { RecipesListSkeleton } from "../skeletons/skeletons";
import Pagination from "../pagination/pagination";
import { RecipeDetails } from "../../types/definitions";
import { getData } from "../../utils/data.utils";

type RecipesListAreaProps = {
  parameter: string;
};

const RecipesListByArea = ({ parameter }: RecipesListAreaProps) => {
  const [areaRecipes, setAreaRecipes] = useState<RecipeDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAreaRecipes = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getData<{ meals: RecipeDetails[] }>(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${parameter}`
        );

        if (data?.meals) {
          setAreaRecipes(data.meals);
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
    getAreaRecipes();
  }, [parameter]);

  

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = areaRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(areaRecipes.length / recipesPerPage);

  return (
    <div className="bg-off-white text-charcoal-gray">
      <div className="mx-auto max-w-2xl px-4 py-10  lg:max-w-4xl">
        <h4 className="text-lg font-bold uppercase">{parameter}</h4>
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
};
export default RecipesListByArea;
