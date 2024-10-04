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
    <div className="bg-off-white text-charcoal-gray">
      <div className="mx-auto max-w-2xl px-4 py-24 lg:max-w-4xl ">
        <h3 className="text-xl font-bold uppercase">
          {category}
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-2 ">
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
