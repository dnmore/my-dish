import { useState, useEffect } from "react";

import RecipeCard from "../recipe-card/recipe-card";
import Loader from "../loader/loader";

const RecipesListByArea = ({ parameter }) => {
  const [areaRecipes, setAreaRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAreaRecipes() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${parameter}`
        );

        const data = await response.json();
        setLoading(false);
        if (data) {
          setAreaRecipes(data.meals);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAreaRecipes();
  }, [parameter]);

  return (
    <div className="bg-off-white text-charcoal-gray" >
      <div className="mx-auto max-w-2xl px-4 py-24  lg:max-w-4xl">
        <h4 className="text-lg font-bold uppercase">
          {parameter}
        </h4>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 md:grid-cols-2 ">
          {loading ? (
           <Loader />
          ) : (
            areaRecipes.map((card) => {
              return <RecipeCard card={card} key={card.idMeal} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default RecipesListByArea;
