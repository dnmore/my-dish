import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import RecipesListByCategory from "./routes/recipes-list-by-category/recipes-list-by-category.component";
import Recipe from "./routes/recipe/recipe.component";
import Search from "./routes/search/search.component";


import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipesListByCategory />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
