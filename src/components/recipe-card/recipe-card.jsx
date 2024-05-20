import { NavLink } from "react-router-dom";

const RecipeCard = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 max-w-64 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-slate-900 font-bold">{strMeal}</h3>
          <NavLink
            to={`/recipe/${idMeal}`}
            className="mt-1 text-sm  text-indigo-500"
          >
            View Recipe
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
