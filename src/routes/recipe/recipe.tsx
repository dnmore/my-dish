import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import RecipeBody from "../../components/recipe-body/recipe-body";
import { RecipeSkeleton } from "../../components/skeletons/skeletons";
import { RecipeDetails } from "../../types/definitions";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data = await response.json();
        setLoading(false);

        if (data) {
          setRecipe(data.meals);
        }
      } catch (error) {
        setError("Failed to fetch recipe details");
        setLoading(false);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <Fragment>
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-4xl">
          {loading ? (
            <RecipeSkeleton />
          ) : error ? (
            <p className="text-red-500 py-20 text-center">{error}</p>
          ) : recipe ? (
            recipe.map((detail: RecipeDetails) => (
              <RecipeBody details={detail} key={detail.idMeal} />
            ))
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Recipe;
