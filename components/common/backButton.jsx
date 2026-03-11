'use client';
import Link from 'next/link'
import { X } from 'lucide-react'

const BackButton = () => {
  return (
    <div className="relative">
        <Link 
            href="/cocktails" 
            className="absolute right-6 top-3 h-10 flex items-center text-2xl cursor-pointer z-2 "
        >
            <X className= "h-7 w-7"/>
        </Link>
    </div>
  )
}

export default BackButton
