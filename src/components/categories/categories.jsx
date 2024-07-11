import { Outlet } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Loader from "../loader/loader";
import CategoryCard from "../category-card/category-card";

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
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-10 lg:max-w-4xl lg:px-8">
          
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 ">
            {loading ? (
              <Loader/>
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
