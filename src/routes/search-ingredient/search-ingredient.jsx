import { useState, Fragment } from "react";
import { BiSearch } from "react-icons/bi";
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
       <div className="w-full h-40  bg-orange-500"></div>
      <div className="mx-auto pt-6 px-8 max-w-3xl -mt-32 bg-slate-100">
        <div className="py-4 px-6 text-center">
          <h1 className="lg:text-6xl text-5xl font-extrabold tracking-tight text-gray-900">
            Search by ingredient
          </h1>
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
        
        <form className="flex items-center flex-wrap gap-2" onSubmit={onSubmitHandler}>
          <input
            className="block max-w-80 h-10 pl-4 flex-1 bg-transparent border-2 border-gray-400 py-1.5 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-0 sm:text-sm sm:leading-6"
            type="text"
            placeholder="what are you looking for?"
            value={mainIngredient}
            onChange={(event) => {
              setMainIngredient(event.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-600/75 px-6 h-10 text-xl font-semibold text-white"
          > 
            <BiSearch />
          </button>
        </form>
      </div>
        </div>
      </div>
      
      <div>
        <RecipesListByIngredient parameter={parameter} />
      </div>
    </Fragment>
  );
}
