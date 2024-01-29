import { RecipeBodyContainer, IngredientsList } from "./recipe-body.styles";

const RecipeBody = ({ detail }) => {
  return (
    <RecipeBodyContainer>
      <h2>{detail.strMeal}</h2>
      <img src={detail.strMealThumb} alt={detail.strMeal} />

      <h3>Ingredients</h3>
      <IngredientsList>
        <li>
          <p>
            {detail.strMeasure1} {detail.strIngredient1}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure2} {detail.strIngredient2}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure3} {detail.strIngredient3}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure4} {detail.strIngredient4}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure5} {detail.strIngredient5}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure6} {detail.strIngredient6}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure7} {detail.strIngredient7}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure8} {detail.strIngredient8}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure9} {detail.strIngredient9}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure10} {detail.strIngredient10}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure11} {detail.strIngredient11}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure12} {detail.strIngredient12}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure13} {detail.strIngredient13}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure14} {detail.strIngredient14}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure15} {detail.strIngredient15}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure16} {detail.strIngredient16}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure17} {detail.strIngredient17}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure18} {detail.strIngredient18}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure19} {detail.strIngredient19}
          </p>
        </li>
        <li>
          <p>
            {detail.strMeasure20} {detail.strIngredient20}
          </p>
        </li>
      </IngredientsList>
      <h3>How to prepare {detail.strMeal}</h3>
      <p>{detail.strInstructions}</p>
    </RecipeBodyContainer>
  );
};

export default RecipeBody;
