import Category from "../category/category.component";

const Categories = ({ categories }) => {
  return (
    <div className="container">
      {categories.map((category) => {
        return <Category key={category.idCategory} category={category} />;
      })}
    </div>
  );
};

export default Categories;
