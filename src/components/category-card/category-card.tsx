import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Category } from "../../types/definitions";

type CategoryCardProps = {
  category: Category;
}

const CategoryCard = ({ category } : CategoryCardProps) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="group relative mx-auto border border-gray-200 shadow-md rounded-sm overflow-hidden  min-w-80 min-h-64">
      <div className="aspect-h-1 aspect-w-1 group-hover:scale-105  lg:aspect-none lg:h-48 transition-all duration-1000 ease-in-out">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="mt-4 p-4 ">
        <div>
          <NavLink
            to={`/${strCategory}`}
            className="flex items-center gap-1 text-sm uppercase font-semibold text-sky-blue hover:gap-2 transition-all duration-1000 ease-in-out"
          >
            {strCategory} <FaArrowRightLong className="text-sky-blue" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
