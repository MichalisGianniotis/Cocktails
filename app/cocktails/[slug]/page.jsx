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

  return (
      <div className={`min-h-screen lg:grid lg:grid-cols-2 lg:grid-rows-1 text-white w-full bg-black`}>
          <div className=" items-center mx-auto w-full h-[430px] lg:h-full relative ">
            <BackButton />
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              className="object-cover"
              style={{
                transition: "opacity 0.1s ease",
                display: "block",
              }}
              priority
            />
          </div>
          <CardContent className="p-6 bg-black/25 backdrop-blur-md rounded-b-xl">
            <h1 className= {`font-montserrat text-4xl md:text-5xl mb-6 text-center `}>{cocktail.name}</h1>

            <h2 className={`font-poppins font-semibold text-2xl md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r ${cocktail.gradient ?? "from-black to-gray-800"}`}>Υλικά</h2>
            <ul className={`font-poppins text-base md:text-lg list-disc list-inside mb-6 p-2`}>
              {cocktail.ingredients.map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>

            <h2 className={`font-poppins font-semibold text-2xl md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r ${cocktail.gradient ?? "from-black to-gray-800"}`}>Συνταγή</h2>
            <ol className={`font-poppins text-base md:text-lg list-decimal list-inside p-2`}>
              {cocktail.recipe.map((step, idx) => (
                <li key={idx} className="mb-2">{step}</li>
              ))}
            </ol>
          </CardContent>
      </div>
  );
}
export default DetailsPage
