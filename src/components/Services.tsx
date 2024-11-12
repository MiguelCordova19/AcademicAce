import React from 'react';
import { BookOpen, Code, FileText, GraduationCap, ClipboardCheck, Brain } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Tutoría Escolar",
    description: "Apoyo personalizado en todas las materias escolares"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Nivel Universitario",
    description: "Ayuda en materias universitarias"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Programación Java",
    description: "Desarrollo de proyectos y enseñanza de programación"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Trabajos y Documentos",
    description: "Asistencia en la elaboración de trabajos académicos"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Preparación de Exámenes",
    description: "Estrategias y práctica para exámenes importantes"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Escuela Nocturna",
    description: "Zoom y estudios en línea desde la comodidad de tu casa"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}