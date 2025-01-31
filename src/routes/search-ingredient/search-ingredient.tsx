import { FormEvent, useState } from "react";
import RecipesListByIngredient from "../../components/recipes-list-by-ingredient/recipes-list-by-ingredient";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchIngredient() {
  const [mainIngredient, setMainIngredient] = useState("");
  const [parameter, setParameter] = useState("");

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParameter(mainIngredient.toLocaleUpperCase());
    setMainIngredient("");
  };

  return (
    <div className="bg-off-white text-charcoal-gray h-screen">
      <div >
        <div className="mx-auto max-w-2xl px-4 pt-24 lg:max-w-4xl">
          <h3 className="text-xl font-bold uppercase">
            Search by main ingredient
          </h3>
          <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl">
            <form
              className="flex items-center flex-wrap gap-2"
              onSubmit={onSubmitHandler}
            >
              <input
                className="block max-w-80 h-10 pl-4 flex-1 rounded-sm bg-transparent border-2 border-gray-400 py-1.5 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-0 text-sm leading-6"
                type="text"
                placeholder="what are you looking for?"
                value={mainIngredient}
                onChange={(event) => {
                  setMainIngredient(event.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="bg-mint-green px-6 h-10 rounded-sm text-xl font-semibold text-white uppercase"
              >
                <IoSearchSharp />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <RecipesListByIngredient parameter={parameter} />
      </div>
    </div>
  );
}
