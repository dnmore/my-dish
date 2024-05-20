
import { NavLink } from "react-router-dom";
import { routes } from "./routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-base bg-slate-800 text-white p-5">
      {routes.map((route) => {
        const { Icon, path, title } = route;
        return (
          <li key={title}>
            <NavLink
              to={path}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
