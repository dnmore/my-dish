import photo from "../../assets/hero.png";
export default function Home() {
  return (
    <div className="max-w-7xl h-screen w-full flex flex-wrap gap-4 justify-center items-center text-charcoal-gray">
      <div className="flex flex-col   max-w-xl pt-32 px-4 lg:px-16 ">
        <h1 className="text-4xl font-extrabold tracking-tight bg-transparent text-mint-green">
          Discover Delicious Recipes in a Few Clicks
        </h1>
        <p className="text-base md:text-lg">
          Browse by category, search by ingredient, or explore global
          cuisines—quick, easy, and flavorful!
        </p>

        <div className="pt-6">
          <h3 className="text-xl font-bold text-mint-green">Hungry yet?</h3>
          <p className="text-base">
            Start Browsing and let the culinary adventure begin!
          </p>
        </div>
      </div>
      <div className="flex flex-col pb-4 max-w-xl md:pt-32 px-4 lg:px-16 ">
        <img
          src={photo}
          alt="Two preview dishes of a dessert and a soup"
          width={571}
          height={500}

        />
      </div>
    </div>
  );
}
