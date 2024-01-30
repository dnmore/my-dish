import Category from "../category/category.component";
import { CategoriesContainer } from "./categories.styles";


const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <Category key={category.idCategory} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default Categories;
