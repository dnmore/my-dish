import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RecipeDetails } from "../../types/definitions";

interface RecipeCardProps {
  card: RecipeDetails;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <div className="group relative min-h-60 overflow-hidden grid grid-cols-2 grid-rows-1 mx-auto w-full bg-warm-beige  shadow-md rounded-sm text-charcoal-gray">
      <div className="aspect-h-1 aspect-w-1 rounded-md  lg:aspect-none group-hover:scale-105 transition-all duration-1000 ease-in-out">
        <img src={strMealThumb} alt={strMeal} className="h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between p-4">
        <div>
          <h4 className="text-lg md:text-base font-bold "> {strMeal}</h4>
        </div>

        <NavLink
          to={`/recipe/${idMeal}`}
          className="flex items-center gap-1 text-sm uppercase font-semibold bg-warm-beige text-sky-blue hover:gap-2 transition-all duration-1000 ease-in-out"
        >
          Read <FaArrowRightLong className="text-sky-blue" />
        </NavLink>
      </div>
    </div>
  );
};

export default RecipeCard;
