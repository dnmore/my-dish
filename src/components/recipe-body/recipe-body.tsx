import { Fragment } from "react";
import { GiKnifeFork, GiCarrot } from "react-icons/gi";
import { RecipeDetails } from "../../types/definitions";

interface RecipeBodyProps {
  details: RecipeDetails;
}

const RecipeBody: React.FC<RecipeBodyProps> = ({ details }) => {
  return (
    <Fragment>
      <div className="mx-auto py-6 w-full text-charcoal-gray">
        <div className="flex flex-wrap gap-1 mt-4 px-6">
          <span className="py-1 px-3 mr-2 bg-sky-blue text-white text-xs uppercase rounded-sm">
            {details.strCategory}
          </span>
          <span className="py-1 px-3 bg-sky-blue text-white text-xs  uppercase rounded-sm">
            {details.strArea}
          </span>
        </div>
        <div className="py-2 px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {details.strMeal}
          </h2>
          <div className="h-1 w-20 bg-mint-green"></div>
        </div>
      </div>
      <div className="mt-4 text-charcoal-gray grid grid-cols-1 md:grid-cols-2 md:shadow-lg md:rounded-sm">
        <div>
          <img
            className="w-full object-cover"
            src={details.strMealThumb}
            alt={details.strMeal}
          />
        </div>

        <div className="p-5 bg-warm-beige">
          <div className="flex gap-2 items-center mb-8">
            <GiCarrot className="text-4xl text-mint-green" />
            <div>
              <h3 className="font-bold tracking-tight text-xl">Ingredients</h3>
              <div className="h-1 w-20 bg-mint-green"></div>
            </div>
          </div>

          <div className="mt-4">
            <ol className="list-none grid grid-cols-1 gap-2 md:grid-cols-2 pl-4 text-sm">
              <li>
                <p>
                  {details.strMeasure1} {details.strIngredient1}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure2} {details.strIngredient2}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure3} {details.strIngredient3}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure4} {details.strIngredient4}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure5} {details.strIngredient5}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure6} {details.strIngredient6}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure7} {details.strIngredient7}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure8} {details.strIngredient8}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure9} {details.strIngredient9}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure10} {details.strIngredient10}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure11} {details.strIngredient11}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure12} {details.strIngredient12}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure13} {details.strIngredient13}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure14} {details.strIngredient14}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure15} {details.strIngredient15}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure16} {details.strIngredient16}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure17} {details.strIngredient17}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure18} {details.strIngredient18}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure19} {details.strIngredient19}
                </p>
              </li>
              <li>
                <p>
                  {details.strMeasure20} {details.strIngredient20}
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="flex gap-2 items-center mb-8">
          <GiKnifeFork className="text-4xl text-mint-green" />
          <div>
            <h3 className="font-bold tracking-tight text-xl">
              How To Prepare {details.strMeal}
            </h3>
            <div className="h-1 w-20 bg-mint-green"></div>
          </div>
        </div>
        <div className="px-8">
          <p className="text-sm leading-8">{details.strInstructions}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeBody;
