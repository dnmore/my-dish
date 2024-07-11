import { Fragment } from "react";

const RecipeBody = ({ detail }) => {
  return (
    <Fragment>
      
      <div className="mx-auto py-6 px-8 w-full -mt-32 bg-slate-100">
        <div className="py-4 px-6">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 mb-4">
          {detail.strMeal}
          </h1>
          <span className="py-2 px-3 mr-2 bg-slate-900 text-white text-sm font-bold">{detail.strCategory}</span>
          <span className="py-2 px-3 bg-slate-900 text-white text-sm  font-bold">{detail.strArea}</span>
          
        </div>
      </div>
      <div className="mt-4">
        

        <div className="overflow-hidden sm:rounded-lg">
          <img src={detail.strMealThumb} alt={detail.strMeal} />
        </div>

        <div className="py-10">
          <div className="mt-10 px-5">
            <h3 className="text-xl font-bold text-gray-900">Ingredients</h3>
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
          <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-10">
            How To Prepare {detail.strMeal}
          </h3>
          <p className="text-base tracking-tight leading-relaxed  text-gray-900 text-justify">
            {detail.strInstructions}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeBody;
