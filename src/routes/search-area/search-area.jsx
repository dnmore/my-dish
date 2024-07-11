import { useState, Fragment } from "react";

import RecipesListByArea from "../../components/recipes-list-by-area/recipes-list-by-area";

export default function SearchArea() {
  const areaOptions = [
    {
      strArea: "American",
    },
    {
      strArea: "British",
    },
    {
      strArea: "Canadian",
    },
    {
      strArea: "Chinese",
    },
    {
      strArea: "Croatian",
    },
    {
      strArea: "Dutch",
    },
    {
      strArea: "Egyptian",
    },
    {
      strArea: "Filipino",
    },
    {
      strArea: "French",
    },
    {
      strArea: "Greek",
    },
    {
      strArea: "Indian",
    },
    {
      strArea: "Irish",
    },
    {
      strArea: "Italian",
    },
    {
      strArea: "Jamaican",
    },
    {
      strArea: "Japanese",
    },
    {
      strArea: "Kenyan",
    },
    {
      strArea: "Malaysian",
    },
    {
      strArea: "Mexican",
    },
    {
      strArea: "Moroccan",
    },
    {
      strArea: "Polish",
    },
    {
      strArea: "Portuguese",
    },
    {
      strArea: "Russian",
    },
    {
      strArea: "Spanish",
    },
    {
      strArea: "Thai",
    },
    {
      strArea: "Tunisian",
    },
    {
      strArea: "Turkish",
    },
    {
      strArea: "Unknown",
    },
    {
      strArea: "Vietnamese",
    },
  ];
  const [selectedArea, setSelectedArea] = useState("American");

  const handleChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <Fragment>
       <div className="w-full h-40  bg-orange-500"></div>
      <div className="mx-auto pt-6 px-8 max-w-3xl -mt-32 bg-slate-100">
        <div className="py-4 px-6 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            Search by area
          </h1>
          <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
       
        <select
          className="mt-1 min-w-48 max-w-80 h-10 pl-4 border-2 border-gray-400 bg-white py-1 text-base text-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          value={selectedArea}
          onChange={handleChange}
        >
          {areaOptions.map((option) => {
            return (
              <option key={option.strArea} value={option.value}>
                {option.strArea}
              </option>
            );
          })}
        </select>
      </div>
        </div>
      </div>
      

      <div>
        <RecipesListByArea parameter={selectedArea} />
      </div>
    </Fragment>
  );
}
