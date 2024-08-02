import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <div className="text-black font-bold ml-3 mb-5">
        <Link href={'/'}>Go to Home</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadoww-md cursor-pointer hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                        <p>
                          <span className="font-semibold">Rating:</span>{" "}
                          {recipe.rating}
                        </p>
                        <div className="font-semibold">{recipe.cuisine}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
