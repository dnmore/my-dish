import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo-mobile.svg";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden bg-orange-500 text-white pt-2">
      <div className="flex gap-1 items-center pb-3">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <Logo />
      </div>
      {isOpen && (
        <div className=" p-5 pt-0 bg-orange-500">
          <ul className="grid gap-2">
            {routes.map((route) => {
              const { Icon } = route;

              return (
                <li key={route.title} className="w-full">
                  <NavLink
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-5 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-all ease-in-out delay-150"
                    }
                    to={route.path}
                  >
                    <span className="flex gap-1 text-lg">{route.title}</span>
                    <Icon className="text-xl" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
