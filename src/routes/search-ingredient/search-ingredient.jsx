import { useState, Fragment } from "react";

import RecipesListByIngredient from "../../components/recipes-list-by-ingredient/recipes-list-by-ingredient";

export default function SearchIngredient() {
  const [mainIngredient, setMainIngredient] = useState("");
  const [parameter, setParameter] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setParameter(mainIngredient.toLocaleUpperCase());
    setMainIngredient("");
  };

  return (
    <Fragment>
      <div
        className="mx-auto
        max-w-2xl
        px-4
        py-12
        sm:px-6
        sm:py-10
        lg:max-w-7xl
        lg:px-8"
      >
        <label className="block text-lg font-bold leading-6 text-gray-900 mb-4">
          Search Ingredient
        </label>
        <form onSubmit={onSubmitHandler}>
          <input
            className="block w-60 flex-1 border-2 rounded-lg border-gray-400 bg-transparent shadow-lg  py-1.5 pl-1 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-0 sm:text-sm sm:leading-6"
            type="text"
            placeholder="type ingredient here"
            value={mainIngredient}
            onChange={(event) => {
              setMainIngredient(event.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <RecipesListByIngredient parameter={parameter} />
      </div>
    </Fragment>
  );
}
