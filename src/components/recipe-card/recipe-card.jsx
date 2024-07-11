import { NavLink } from "react-router-dom";

const RecipeCard = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <div className="group relative mx-auto w-64">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
         
          <NavLink
            to={`/recipe/${idMeal}`}
            className="text-lg text-slate-900 font-bold hover:border-b-2 hover:border-orange-500"
          >
           {strMeal}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
