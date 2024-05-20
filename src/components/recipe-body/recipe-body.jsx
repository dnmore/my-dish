import { Fragment } from "react";

const RecipeBody = ({ detail }) => {
  return (
    <Fragment>
      <div className="mt-4">
        <div className="mx-auto px-4 pb-16 pt-10 sm:px-6 ">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2">
              {detail.strMeal}
            </h1>
            <span className="text-red-500 font-bold">{detail.strArea}</span>
          </div>
        </div>

        <div className="overflow-hidden sm:rounded-lg">
          <img src={detail.strMealThumb} alt={detail.strMeal} />
        </div>

        <div className="py-10">
          <div className="mt-10 px-5">
            <h3 className="text-sm font-bold text-gray-900">Ingredients</h3>
            <div className="mt-4">
              <ol className="list-none space-y-2 pl-4 text-sm">
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
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-10">
            How To Prepare {detail.strMeal}
          </h2>
          <p className="text-base tracking-tight text-gray-900 text-justify">
            {detail.strInstructions}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeBody;
