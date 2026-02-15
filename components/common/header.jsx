'use client'

import { useState } from "react"
import React from 'react'
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
      <header className='bg-slate-950/80 text-white p-6 sticky top-0 z-50 shadow-lg backdrop-blur-sm w-full border-slate-700 border-b'>
        <nav className="max-w-8xl mx-auto flex items-center justify-between py-4">
          <a href="#" className="text-xl md:text-[30px] font-bold font-montserrat">
            🍸 ShakerMap
          </a>
          <div className=" hidden sm:flex items-center gap-6 text-sm md:text-lg font-poppins">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/cocktails" className="text-slate-300 hover:text-white transition-colors">
              Cocktails
            </Link>
          </div>
          <button
            className="md:hidden text-xl font-poppins"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          
        </nav>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden flex flex-col text-center gap-4 p-4 bg-transparent cursor-pointer font-poppins">
            <a href="/">Home</a>
            <a href="/cocktails">Cocktails</a>
          </div>
        )}
      </header>
  )
}

export default Header
