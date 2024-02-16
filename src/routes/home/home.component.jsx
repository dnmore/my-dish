import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import CategoryCard from "../../components/category-card/category-card.component";
import { CategoriesContainer } from "./home.styles";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);


  return (
    <>
      <Outlet />
      <CategoriesContainer>
        {categories.map((category) => {
          return <CategoryCard key={category.idCategory} category={category} />;
        })}
      </CategoriesContainer>
    </>
  );
}

export default Home;
