import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

import {
  CategoryContainer,
  CategoryBackgroundImage,
  CategoryBodyContainer,
  CategoryNavLink,
} from "./category-card.styles";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <CategoryContainer>
      <CategoryBackgroundImage>
        <img src={strCategoryThumb} alt={strCategory} />
      </CategoryBackgroundImage>

      <CategoryBodyContainer>
        <h2>{strCategory}</h2>
        <CategoryNavLink
          to="/recipes"
          state={{ from: `${strCategory}` }}
        >
          RECIPES
          <ArrowRight />
        </CategoryNavLink>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryCard;
