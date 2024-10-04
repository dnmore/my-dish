import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import Hamburger from "hamburger-react";

import { NavLink } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="lg:hidden pt-2 fixed z-50 w-full text-charcoal-gray shadow-md text-base bg-off-white"
    >
      <div className="flex gap-1 items-center pb-3">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <NavLink
          to="/"
          className="flex gap-1 text-3xl font-bold tracking-tighter"
        >
          <GiChefToque />
          <h3>MyDish</h3>
        </NavLink>
      </div>
      {isOpen && (
        <div className="p-5 pt-0 z-50 bg-off-white uppercase">
          <div className="grid gap-2 ">
            <NavLink
              to="/categories"
              className="hover:text-mint-green"
            >
              Categories
            </NavLink>
            <NavLink
              to="/ingredient"
              className="hover:text-mint-green"
            >
              Ingredient
            </NavLink>
            <NavLink
              to="/area"
              className="hover:text-mint-green"
            >
              Area
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
