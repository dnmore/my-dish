import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import { Navbar } from "./routes/navigation/navbar";
import Categories from "./routes/categories/categories";
import RecipesListByCategory from "./routes/recipes-list-by-category/recipes-list-by-category";
import Recipe from "./routes/recipe/recipe";
import SearchIngredient from "./routes/search-ingredient/search-ingredient";
import SearchArea from "./routes/search-area/search-area";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/:category" element={<RecipesListByCategory />} />
          <Route path="recipe/:id" element={<Recipe />} />
          <Route path="ingredient" element={<SearchIngredient />} />
          <Route path="area" element={<SearchArea />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
