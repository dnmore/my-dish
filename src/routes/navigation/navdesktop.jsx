import { NavLink } from "react-router-dom";

import { GiChefToque } from "react-icons/gi";

export const NavDesktop = () => {
  return (
    <div
      className="hidden fixed z-50 lg:px-16 w-full lg:flex lg:items-center lg:justify-between gap-5 px-2 py-4 bg-mint-green text-white opacity-90"
      
    >
      <NavLink
        to="/"
        className="flex gap-1 text-3xl font-bold tracking-tighter "
      >
        <GiChefToque />
        <h3>MyDish</h3>
      </NavLink>

      <div className="flex items-center gap-10 text-sm uppercase ">
        <NavLink to="/categories" className="border-b-2 border-transparent hover:border-white">Categories</NavLink>
        <NavLink to="/ingredient" className="border-b-2 border-transparent hover:border-white">Ingredient</NavLink>
        <NavLink to="/area" className="border-b-2 border-transparent hover:border-white">Area</NavLink>
      </div>
    </div>
  );
};
