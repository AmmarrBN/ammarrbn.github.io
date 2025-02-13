"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-300 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-400 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 3 + 1}rem`,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div
        className={`relative z-10 w-80 h-60 bg-red-500 rounded-lg shadow-lg cursor-pointer transition-all duration-500 ease-in-out ${isOpen ? "transform -translate-y-40" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`absolute inset-0 bg-white rounded-lg transition-all duration-500 ease-in-out ${isOpen ? "transform -rotate-x-180" : ""}`}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-red-500">
            <Heart className="w-16 h-16 mb-4" />
            <p className="text-xl font-bold">Click to open</p>
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-pink-200 rounded-lg p-6 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center justify-center h-full text-red-600">
            <h2 className="text-2xl font-bold mb-4">Happy Valentine's Day!</h2>
            <p className="text-center">
              Your love is the most precious gift I could ever receive. Thank you for being you and for being mine. I
              love you more than words can express!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

