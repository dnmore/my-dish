import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import "./recipe-card.styles.scss";

const RecipeCard = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <div className="card-container">
      <div className="background-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-body-container">
        <h2>{strMeal}</h2>
        <Link
          className="recipe-nav-link"
          to="/recipes/recipe"
          state={{ from: `${idMeal}` }}
        >
          RECIPE
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
