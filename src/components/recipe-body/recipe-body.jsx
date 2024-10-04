import { Fragment } from "react";
import { GiKnifeFork, GiCarrot } from "react-icons/gi";

const RecipeBody = ({ detail }) => {
  return (
    <Fragment>
      <div className="mx-auto py-6 w-full text-charcoal-gray">
        <div className="flex flex-wrap gap-1 mt-4 px-6">
          <span className="py-1 px-3 mr-2 bg-sky-blue text-white text-xs uppercase rounded-sm">
            {detail.strCategory}
          </span>
          <span className="py-1 px-3 bg-sky-blue text-white text-xs  uppercase rounded-sm">
            {detail.strArea}
          </span>
        </div>
        <div className="py-2 px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {detail.strMeal}
          </h2>
          <div className="h-1 w-20 bg-mint-green"></div>
        </div>
      </div>
      <div className="mt-4 text-charcoal-gray grid grid-cols-1 md:grid-cols-2 md:shadow-lg md:rounded-sm">
        <div>
          <img className="w-full object-cover" src={detail.strMealThumb} alt={detail.strMeal} />
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
            </ol>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="flex gap-2 items-center mb-8">
          <GiKnifeFork className="text-4xl text-mint-green" />
          <div>
            <h3 className="font-bold tracking-tight text-xl">
              How To Prepare {detail.strMeal}
            </h3>
            <div className="h-1 w-20 bg-mint-green"></div>
          </div>
        </div>
        <div className="px-8">
          <p className="text-sm leading-8">{detail.strInstructions}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeBody;
