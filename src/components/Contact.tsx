import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">¿Tienes alguna pregunta?</h3>
            <p className="text-gray-600">
              Estamos aquí para ayudarte en tu camino académico. Contáctanos para más información
              sobre nuestros servicios y programas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="h-5 w-5 text-indigo-600" />
                <span>+51 986 608 586</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="h-5 w-5 text-indigo-600" />
                <span>macasoi0819@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <span>Nuevo Chimbote, Santa, Ancash, Perú</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}