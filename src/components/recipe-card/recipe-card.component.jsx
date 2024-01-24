import { Link } from "react-router-dom";
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
      <Link to="/recipes/recipe" state={{from: `${idMeal}`}}>View Recipe</Link>
     </div>
      
    </div>
  );
};

export default RecipeCard;
