import { useState, useEffect } from "react";
import CategoryCard from "../../components/category-card/category-card";
import Pagination from "../../components/pagination/pagination";
import { CategoriesSkeleton } from "../../components/skeletons/skeletons";
import { Category } from "../../types/definitions";

const Categories= () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const [error, setError] = useState<string | null>(null);

 
  useEffect(() => {
    async function getCategories(){
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        const data = await response.json();
        setLoading(false);

        if (data) {
          setCategories(data.categories);
        }
      } catch (error) {
        setError("Failed to fetch categories");
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(categories.length / recipesPerPage);

  return (
    <div className="bg-off-white text-charcoal-gray">
      <div className="mx-auto max-w-2xl px-4 py-24 lg:max-w-4xl lg:px-8">
        <h3 className="text-xl font-bold uppercase">Categories</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 w-full">
          {loading ? (
            <CategoriesSkeleton />
          ) : error ? (
            <p className="text-red-500 py-20 text-center">{error}</p>
          ) : currentCategories ? (
            currentCategories.map((category:Category) => (
              <CategoryCard key={category.idCategory} category={category} />
            ))
          ) : null}
        </div>
        {!loading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}


export default Categories