import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cocktails = [
  {
    id : 1,
    name: "Mojito",
    ingredients: "Ρούμι, Δυόσμος, Ζάχαρη, Λάιμ, Σόδα",
    image : "mojito2-removebg-preview.png",
    // image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  },
  {
    id : 2,
    name: "Margarita",
    ingredients: "Τεκίλα, Triple Sec, Χυμός Λάιμ, Αλάτι",
    image : "margarita3-removebg-preview.png"
    // image : "margarita.png",
    // image: "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
  },
  {
    id : 3,
    name: "Old Fashioned",
    ingredients: "Μπέρμπον ή ουίσκι, Ζάχαρη, Πικρά, Νερό, Πορτοκάλι",
    // Bourbon, Sugar, Bitters, Orange
    image : "Untitled_design2-removebg-preview.png",
    // image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
  },
  {
    id : 4,
    name : "Negroni",
    ingredients: "Τζιν, Campari, Γλυκό βερμούτ",
    image : "Untitled_design__1_-removebg-preview.png"
    // 410 * 410
  },
];

export default function CocktailApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">🍹 Cocktail Recipes</h1>
      <div className="max-w-md mx-auto mb-6">
        <Input placeholder="Search cocktails..." className={'bg-gray-800 text-white border-gray-700'}/>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cocktails.slice(0,3).map((cocktail) => (
          // bg-linear-to-br from-black to-green-700
          <Card key={cocktail.id} className={`text-white shadow-lg rounded-2xl ${ cocktail.name === "Mojito" ? "bg-linear-to-br from-black to-green-700":
           cocktail.name === "Margarita" ? "bg-linear-to-br from-black to-yellow-300": 
           cocktail.name === "Old Fashioned" ? "bg-linear-to-br from-black to-orange-500" :
           cocktail.name === "Negroni" ? "bg-linear-to-br from-black to-red-600" : ""}`}>

            <img src={cocktail.image} alt={cocktail.name} className="w-full h-65 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cocktail.name}</h2>
              <p className="text-sm">{cocktail.ingredients}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
