import cocktails from "@/data/cocktails";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/common/backButton";

const DetailsPage = async ({ params }) => {

    const { slug } = await params;
    console.log("Slug params:", slug);

    const cocktail = cocktails.find(c => c.slug === slug);

  if (!cocktail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <h1 className="text-3xl font-bold mb-4">🍹 Cocktail Not Found</h1>
        <Link href="/" className="text-blue-400 underline">Go back home</Link>
      </div>
    );
  }

    const gradientClass =
      cocktail.name === "Mojito"
        ? "from-black to-green-700"
        : cocktail.name === "Margarita"
        ? "from-black to-yellow-300"
        : cocktail.name === "Old Fashioned"
        ? "from-black to-orange-500"
        : cocktail.name === "Negroni"
        ? "from-black to-red-600"
        : "from-black to-gray-800";


  return (
      <div className={`min-h-screen text-white w-full bg-linear-to-br  ${gradientClass}`}>
          <div className="relative w-full h-[400px]">
            <BackButton />
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              className="object-cover rounded-t-2xl"
              style={{
                transition: "opacity 0.5s ease",
                display: "block",
              }}
              priority
            />
          </div>
          <CardContent className="p-6 bg-black/25 backdrop-blur-md rounded-b-xl">
            <h1 className="text-3xl font-bold mb-4">{cocktail.name}</h1>

            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {cocktail.ingredients.split(",").map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Recipe</h2>
            <p>{cocktail.recipe}</p>
          </CardContent>
      </div>
  );
}
export default DetailsPage
