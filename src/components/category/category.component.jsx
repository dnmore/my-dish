import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

import { CategoryContainer, CategoryBackgroundImage, CategoryBodyContainer } from "./category.styles";


const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <CategoryContainer>
      <CategoryBackgroundImage>
        <img src={strCategoryThumb} alt={strCategory} />
      </CategoryBackgroundImage>

      <CategoryBodyContainer>
        <h2>{strCategory}</h2>
        <Link className="recipes-nav-link" to="/recipes" state={{ from: `${strCategory}` }}>
          RECIPES
          <ArrowRight />
        </Link>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Category;
