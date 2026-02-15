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
import Header from "@/components/common/header";




export default function CocktailsPage() {
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
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 to-slate-900  text-white" role="main">
        <Header />
        <div className="p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat">Cocktails</h1>
          <p className="text-center mb-8 md:text-lg font-poppins">Βρες τη συνταγή που σου ταιριάζει</p>
          <div className="max-w-md mx-auto mb-6 relative">
            <Input 
              placeholder="Αναζήτηση cocktail..." 
              value={search}
              onChange={e => setSearch(e.target.value)} 
              className={'bg-gray-900 text-white border-gray-700 w-full max-w-md h-10 pr-8'}
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
                Δεν βρέθηκαν αποτελέσματα για "<span className="font-bold">{search}</span>"
              </p>
            ) : (
              displayedCocktails.map((cocktail, index) => (
                <Link key={cocktail.slug}  href={`cocktails/${cocktail.slug}`} className="scale-100 hover:scale-97 transition-transform">
                  <Card className={`text-white shadow-lg border-2 border-slate-700 rounded-2xl p-0 mt-4 h-[430px] bg-black`}>
                    <div className="relative w-full h-full ">
                      <Image
                        src={cocktail.image}
                        alt={cocktail.name}
                        fill
                        className="object-cover rounded-2xl"
                        // onLoad={() => setLoaded(true)}
                        priority={index < 3} 
                      />
                    </div>
                    <CardContent className="m-0.5 absolute bottom-0 left-0 w-[99%] p-4 bg-black/50 backdrop-blur-md rounded-b-xl  flex flex-col justify-between ">
                      <div>
                        <h2 className="text-xl font-bold mb-4 font-poppins">{cocktail.name}</h2>
                        <div className="flex flex-col text-sm text-gray-200">
                          <div className="flex items-center gap-2 mb-0.5">
                            <Clock className="w-4 h-4"/>
                            <span className="font-sans">{cocktail.prepTime}</span>
                          </div>

                          <div className="flex items-center gap-2 ">
                            <span className="font-sans text-gray-200">
                              <Target className="w-4 h-4 inline-block mr-1"/>
                              {cocktail.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
  );
}

