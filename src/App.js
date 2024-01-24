import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import RecipesList from "./components/recipes-list/recipes-list.component";
import Recipe from "./components/recipe/recipe.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<RecipesList />} />
        <Route path="recipes/recipe" element={<Recipe />} />
      </Route>
    </Routes>
  );
};

export default App;
