import React from 'react';
import { Code, Moon, GraduationCap, FileEdit } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Reemplaza el BookOpen por tu imagen */}
          <img 
            src="images/AcademicAce.png" // Coloca aquí la ruta a tu imagen
            alt="Academic Ace Logo" 
            className="h-8 w-8 object-contain" // Mantiene las mismas dimensiones que tenía el ícono
          />
          <span className="text-2xl font-bold">Academic Ace</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-indigo-200 transition-colors">Servicios</a>
          <a href="#programs" className="hover:text-indigo-200 transition-colors">Programas</a>
          <a href="#night-school" className="hover:text-indigo-200 transition-colors">Escuela Nocturna</a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}