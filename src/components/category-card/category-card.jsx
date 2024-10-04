import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="group relative mx-auto border border-gray-200 shadow-md rounded-sm overflow-hidden ">
      <div className="aspect-h-1 aspect-w-1 group-hover:scale-105  lg:aspect-none lg:h-48 transition-all duration-1000 ease-in-out">
        <img
          
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <div className="mt-4 p-4 ">
        <div>
          <NavLink
            to={`/${strCategory}`}
            className="text-lg font-bold border-b-2 border-b-transparent hover:border-b-mint-green "
          >
            {strCategory}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
