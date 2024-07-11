import Categories from "../../components/categories/categories";

export default function Home() {
  return (
    <div>
      <div className="w-full h-40  bg-orange-500"></div>
      <div className="mx-auto pt-6 px-8 max-w-3xl -mt-32 bg-slate-100">
        <div className="py-4 px-6 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            Recipe finder
          </h1>
          <p className="my-6 text-base leading-8 text-gray-600">
            Browse our collections of recipes from around the world. 
            Looking for a category or a special ingredient? Inspired by an area? 
            You are covered for the perfect dish! 
          </p>
        </div>
      </div>
      <Categories />
    </div>
  );
}
