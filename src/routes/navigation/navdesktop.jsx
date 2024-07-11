import { NavLink } from "react-router-dom";
import { routes } from "./routes";
import { ReactComponent as Logo } from "../../assets/Logo-nav.svg";

export const NavDesktop = () => {
  return (
    <div className="hidden lg:px-16 w-full lg:flex lg:items-center lg:justify-between gap-5 text-base text-gray-900 p-5">
      <div>
        <Logo />
      </div>

      <ul className="flex items-center gap-10">
        {routes.map((route) => {
          const { Icon, path, title } = route;
          return (
            <li key={title}>
              <NavLink
                to={path}
                className="flex items-center gap-1 font-normal text-slate-900 hover:text-orange-500 transition-all ease-in-out delay-150 duration-500"
              >
                <Icon />
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
