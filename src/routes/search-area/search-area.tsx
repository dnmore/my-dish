import { ChangeEvent, useState } from "react";

import RecipesListByArea from "../../components/recipes-list-by-area/recipes-list-by-area";

type AreaOption = {
strArea: string
}
export default function SearchArea() {
  const areaOptions: AreaOption[]= [
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

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(event.target.value);
  };

  return (
    <div>
      <div className="bg-off-white text-charcoal-gray">
        <div className="mx-auto max-w-2xl px-4 pt-24 lg:max-w-4xl">
          <h3 className="text-xl font-bold uppercase">Search by area</h3>
          <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl">
            <select
              className="mt-1 min-w-48 max-w-80 h-10 pl-4 rounded-sm border-2 border-gray-400  py-1 text-base   focus:outline-none cursor-pointer"
              value={selectedArea}
              onChange={handleChange}
            >
              {areaOptions.map((option, i) => {
                return (
                  <option key={i}>
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
    </div>
  );
}
