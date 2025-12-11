'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import cocktails from "@/data/cocktails";


export default function CocktailApp() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredCocktails = cocktails.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedCocktails = search === "" 
  ? filteredCocktails.slice(0, 3) // show only first 3 by default
  : filteredCocktails; 

  
  
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">🍹 Cocktail Recipes</h1>
      <div className="max-w-md mx-auto mb-6">
        <Input 
        placeholder="Search cocktails..." 
        onChange={e => setSearch(e.target.value)} 
        className={'bg-gray-800 text-white border-gray-700 w-full max-w-md '}/>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">

        {displayedCocktails.length === 0 ? (
            <p className="text-center col-span-full text-lg text-gray-300 italic break-all">
            No results found for "<span className="font-bold">{search}</span>"
          </p>
        ) : (
          displayedCocktails.map((cocktail) => (
            // bg-linear-to-br from-black to-green-700
            <Card key={cocktail.id} className={`text-white shadow-lg rounded-2xl border-3 border-gray-500 mt-6 ${ cocktail.name === "Mojito" ? "bg-linear-to-br from-black to-green-700":
            cocktail.name === "Margarita" ? "bg-linear-to-br from-black to-yellow-300": 
            cocktail.name === "Old Fashioned" ? "bg-linear-to-br from-black to-orange-500" :
            cocktail.name === "Negroni" ? "bg-linear-to-br from-black to-red-600" : ""}`}>
              <img src={cocktail.image} alt={cocktail.name} className="w-full h-65 object-cover rounded-t-2xl"/>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{cocktail.name}</h2>
                <p className="text-sm">{cocktail.ingredients}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
