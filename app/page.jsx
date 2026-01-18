'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import cocktails from "@/data/cocktails";
import Image from "next/image";
import Link from "next/link";
import { X, Target, Clock } from "lucide-react";


export default function CocktailApp() {
  const [search, setSearch] = useState("");
  // const [visibleCount, setVisibleCount] = useState(3);
  const [loaded, setLoaded] = useState(false);

  const filteredCocktails = cocktails.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedCocktails = filteredCocktails;

  const handleClear = () => {
    setSearch("");
  };
  return (
      <div className="min-h-screen w-full bg-gray-900 text-white p-10 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="main">
        <h1 className="text-4xl font-bold text-center mb-8">🍹 Cocktail Recipes</h1>
        <div className="max-w-md mx-auto mb-6 relative">
          <Input 
            placeholder="Search cocktails..." 
            value={search}
            onChange={e => setSearch(e.target.value)} 
            className={'bg-gray-800 text-white border-gray-700 w-full max-w-md h-10 pr-8'}
          />
          {search && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-0 h-10 flex items-center text-2xl cursor-pointer"
            >
              <X className= "h-4 w-4"/>
            </button>
          )}
        </div>
        
        <div className="grid min-[440px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">

          {displayedCocktails.length === 0 ? (
              <p className="text-center col-span-full text-lg text-gray-300 italic break-all">
              No results found for "<span className="font-bold">{search}</span>"
            </p>
          ) : (
            displayedCocktails.map((cocktail, index) => (
              // bg-linear-to-br from-black to-green-700
                <Card key={index} className={`text-white shadow-lg rounded-2xl border-3 border-gray-500 pb-0 mt-4 h-[430px] ${ cocktail.name === "Mojito" ? "bg-linear-to-br from-black to-green-700":
                cocktail.name === "Margarita" ? "bg-linear-to-br from-black to-yellow-300": 
                cocktail.name === "Old Fashioned" ? "bg-linear-to-br from-black to-orange-500" :
                cocktail.name === "Negroni" ? "bg-linear-to-br from-black to-red-600" : ""}`}>
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={cocktail.image}
                      alt={cocktail.name}
                      fill
                      className="object-cover rounded-t-2xl"
                      onLoad={() => setLoaded(true)}
                      style={{
                          opacity: loaded ? 1 : 0,
                          transition: "opacity 0.5s ease",
                          display: "block",
                        }}
                      priority={index < 3} 
                    />
                  </div>
                  <CardContent className="p-4 bg-black/60 backdrop-blur-md rounded-b-xl h-[120px] flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-4">{cocktail.name}</h2>
                      <div className="flex flex-col text-sm text-gray-200">
                        <div className="flex items-center gap-2 mb-0.5">
                          <Clock className="w-4 h-4"/>
                          <span>{cocktail.prepTime}</span>
                        </div>

                        <div className="flex items-center gap-2 ">
                          <span className="font-sans font-normal text-gray-200">
                            <Target className="w-4 h-4 inline-block mr-1"/>
                            {cocktail.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))
          )}
        </div>
      </div>
  );
}
