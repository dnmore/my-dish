import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="group relative mx-auto">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-200 group-hover:opacity-75  lg:aspect-none lg:h-48">
        <img
          
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <NavLink
            to={`/${strCategory}`}
            className="text-lg text-slate-900 font-bold hover:border-b-2 hover:border-orange-500 "
          >
            {strCategory}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
