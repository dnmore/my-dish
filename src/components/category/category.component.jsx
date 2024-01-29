import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

import "./category.styles.scss";

const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="category-container">
      <div className="background-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>

      <div className="category-body-container">
        <h2>{strCategory}</h2>
        <Link className="recipes-nav-link" to="/recipes" state={{ from: `${strCategory}` }}>
          RECIPES
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Category;
