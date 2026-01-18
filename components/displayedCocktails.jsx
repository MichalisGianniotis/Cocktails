'use client'

import React from 'react'
import { useState } from "react";
import cocktails from "@/data/cocktails";


const displayedCocktails = () => {

  const [search, setSearch] = useState("");
  // const [visibleCount, setVisibleCount] = useState(3);
  

  const filteredCocktails = cocktails.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const Cocktails = search === "" 
  ? filteredCocktails.slice(0, 3) // show only first 3 by default
  : filteredCocktails;


  return (
    <Input 
      placeholder="Search cocktails..." 
      onChange={e => setSearch(e.target.value)} 
      className={'bg-gray-800 text-white border-gray-700 w-full max-w-md '}
    />
  )
}

export default displayedCocktails

