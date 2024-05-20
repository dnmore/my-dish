import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 max-w-64 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-slate-900 font-bold">{strCategory}</h3>
          <NavLink
            to={`/${strCategory}`}
            className="mt-1 text-sm  text-indigo-500"
          >
            View Recipes 
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
