import { Outlet } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import CategoryCard from "../../components/category-card/category-card";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        const data = await response.json();
        setLoading(false);

        if (data) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  return (
    <Fragment>
      <Outlet />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Categories
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>Loading..</>
            ) : (
              categories.map((category) => (
                <CategoryCard key={category.idCategory} category={category} />
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
