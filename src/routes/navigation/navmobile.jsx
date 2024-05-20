import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { routes } from "./routes";
import { NavLink } from "react-router-dom";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden bg-slate-800 text-white">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className=" p-5 pt-0 bg-slate-800">
          <ul className="grid gap-2">
            {routes.map((route) => {
              const { Icon } = route;

              return (
                <li
                  key={route.title}
                  className="w-full bg-slate-800"
                >
                  <NavLink
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-5 bg-slate-800 text-white"
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
