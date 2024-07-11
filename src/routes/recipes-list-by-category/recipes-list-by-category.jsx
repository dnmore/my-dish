import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import RecipeCard from "../../components/recipe-card/recipe-card";

const RecipesListByCategory = () => {
  const { category } = useParams();
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCategoryRecipes() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await response.json();
        setLoading(false);

        if (data) {
          setCategoryRecipes(data.meals);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        return;
      }
    }
    getCategoryRecipes();
  }, [category]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {category}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            <Loader />
          ) : (
            categoryRecipes.map((card) => (
              <RecipeCard card={card} key={card.idMeal} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesListByCategory;
