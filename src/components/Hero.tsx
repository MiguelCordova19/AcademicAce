import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          El Az de tus Estudios comienza aquí.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Ayudamos en educación escolar y universitaria, programación Java, documentación y más.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5" />
            Comenzar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}