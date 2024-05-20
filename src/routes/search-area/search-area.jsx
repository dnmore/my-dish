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
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <label className="block text-lg font-bold leading-6 text-gray-900 mb-4">
          Select Area
        </label>
        <select
          className="mt-1 max-h-56 w-32 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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

      <div>
        <RecipesListByArea parameter={selectedArea} />
      </div>
    </Fragment>
  );
}
