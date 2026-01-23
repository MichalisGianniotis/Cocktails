'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import cocktails from "@/data/cocktails";
import { Clock, Target } from "lucide-react";
import Image from "next/image";
import descriptions from "@/data/descriptions";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white p-4">
      {/* Hero Section */}
      <section className="px-6 pt-28 pb-32 text-center min-h-[70vh] flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-poppins"
        >
          🍸 ShakerMap
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-300 max-w-xl mx-auto mb-8 font-montserrat">
          Ανακαλύψτε κλασικά και μοντέρνα κοκτέιλ, υλικά και συνταγές σε ένα καθαρό και όμορφο περιβάλλον.
        </motion.p>

        {/* <div className="max-w-md mx-auto flex items-center gap-2 bg-slate-800 rounded-2xl p-3 shadow-lg">
          <Search className="text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search cocktails..."
            className="bg-transparent outline-none flex-1 text-slate-200"
          />
        </div> */}
      </section>

      {/* Featured Cocktails */}
      <section className="px-6 pb-20 flex flex-col">
        <h2 className="text-2xl font-semibold mb-6 mx-auto font-poppins">🔥 Δημοφιλή Cocktails</h2>
        <div className="grid min-[440px]:grid-cols-2 md:grid-cols-3  gap-6">
          {cocktails.slice(0, 3).map((cocktail) => (
              <Link key={cocktail.slug}  href={`/cocktails/${cocktail.slug}`} className="scale-100 hover:scale-93 transition-transform">
                <Card className={`m-auto text-white shadow-lg rounded-2xl border-2 border-gray-500 p-0 mt-4 h-[430px] bg-black`}>
                  <div 
                  className="relative w-full h-full">
                    <Image
                      src={cocktail.image}
                      alt={cocktail.name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <CardContent className="p-4 m-0.5 absolute bottom-0 left-0 w-[99%] bg-black/60 backdrop-blur-md rounded-b-xl ">
                    <div>
                      <h2 className="text-xl font-bold mb-4 font-poppins">{cocktail.name}</h2>
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
              </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-10 text-center font-poppins">Πώς λειτουργεί</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {descriptions.map((step, index) => (
            <Card key={index} className="bg-slate-900 border-slate-700 rounded-2xl text-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{index + 1}</div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">{step.title}</h3>
                <p className="text-slate-400 text-sm font-montserrat">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      {/* <section className="px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-6">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Classic", "Tropical", "Strong", "Mock"].map((cat) => (
            <motion.div key={cat} whileHover={{ scale: 1.05 }}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 rounded-2xl text-gray-200">
                <CardContent className="p-6 text-center font-medium">{cat}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="px-6 pb-24 text-center font-poppins">
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 border-none rounded-3xl text-white">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold mb-4">Γίνε ο bartender της παρέας🍹</h2>
            <p className="text-indigo-100 mb-6">
              Μάθε συνταγές, ανακάλυψε νέα cocktails και αποθήκευσε τα αγαπημένα σου.
            </p>
            <Link href="/cocktails">
              <Button size="lg" className="rounded-xl bg-white text-slate-900 hover:bg-slate-100 cursor-pointer">
                Δες όλα τα cocktails
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm ">
        © {new Date().getFullYear()} ShakerMap · Made with 🍸
      </footer>
    </div>
  );
}
