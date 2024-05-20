
import { Outlet } from "react-router-dom";
import { NavDesktop } from "./navdesktop";
import { NavMobile } from "./navmobile";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavMobile />
        <NavDesktop />
        <Outlet />
      </nav>
    </div>
  );
};
