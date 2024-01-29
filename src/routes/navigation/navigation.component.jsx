import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as RecipeLogo } from "../../assets/logo.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <RecipeLogo className="logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/search">
            <ArrowRight />
            SEARCH BY INGREDIENT
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
