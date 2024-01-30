import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as RecipeLogo } from "../../assets/logo.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { NavigationContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Link to="/">
          <RecipeLogo />
        </Link>

        <NavLink to="/search">
          <ArrowRight />
          SEARCH BY MAIN INGREDIENT
        </NavLink>
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
