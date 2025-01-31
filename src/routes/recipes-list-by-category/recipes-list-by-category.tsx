import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipesListSkeleton } from "../../components/skeletons/skeletons";
import RecipeCard from "../../components/recipe-card/recipe-card";
import Pagination from "../../components/pagination/pagination";
import { RecipeDetails } from "../../types/definitions";

const RecipesListByCategory = () => {
  const { category } = useParams();
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCategoryRecipes() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await response.json();
        setLoading(false);

        if (data) {
          setCategoryRecipes(data.meals);
        }
      } catch (error) {
        setError("Failed to fetch recipe details");
        setLoading(false);
        return;
      }
    }

    getCategoryRecipes();
  }, [category]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = categoryRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(categoryRecipes.length / recipesPerPage);

  return (
    <div className="bg-off-white text-charcoal-gray h-screen">
      <div className="mx-auto max-w-2xl px-4 py-24 lg:max-w-4xl ">
        <h3 className="text-xl font-bold uppercase">{category}</h3>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-2 ">
          {loading ? (
            <RecipesListSkeleton />
          ) : error ? (
            <p className="text-red-500 py-20 text-center">{error}</p>
          ) : currentRecipes ? (
            currentRecipes.map((card: RecipeDetails) => (
              <RecipeCard card={card} key={card.idMeal} />
            ))
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

export default RecipesListByCategory;
