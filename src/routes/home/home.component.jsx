import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Categories from "../../components/categories/categories.component";

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
    <Categories categories ={ categories }/>
    </>
    
  );
};

export default Home;