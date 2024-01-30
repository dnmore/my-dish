import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import RecipesList from "./routes/recipes-list/recipes-list.component";
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
          <Route path="recipes" element={<RecipesList />} />
          <Route path="recipes/recipe" element={<Recipe />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
