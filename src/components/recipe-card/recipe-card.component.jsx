import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { CardContainer, CardBackgroundImage, CardBodyContainer } from "./recipe-card.styles";

const RecipeCard = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <CardContainer>
      <CardBackgroundImage>
        <img src={strMealThumb} alt={strMeal} />
      </CardBackgroundImage>
      <CardBodyContainer>
        <h3>{strMeal}</h3>
        <Link
          className="recipes-nav-link"
          to="/recipes/recipe"
          state={{ from: `${idMeal}` }}
        >
          RECIPE
          <ArrowRight />
        </Link>
      </CardBodyContainer>
    </CardContainer>
  );
};

export default RecipeCard;
