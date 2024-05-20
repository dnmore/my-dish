import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import RecipeBody from "../../components/recipe-body/recipe-body";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setLoading(false);

        if (data) {
          setRecipe(data.meals);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6">
            {loading ? (
              <>Loading...</>
            ) : (
              recipe.map((detail) => (
                <RecipeBody detail={detail} key={detail.idMeal} />
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Recipe;
