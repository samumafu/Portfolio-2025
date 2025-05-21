'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Reproductor de Música',
    description: 'Python | Flask | Reproductor con interfaz gráfica',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-blue-500'
  },
  {
    title: 'Gestión de Citas Médicas',
    description: 'Python | Seguimiento de citas | Cálculo del hospital más cercano',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-indigo-500'
  },
  {
    title: 'Gestión de Inventario',
    description: 'Python | Django | App para control de inventario',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-purple-500'
  },
  {
    title: 'Sistema de Parqueadero',
    description: 'Java | Spring Boot | Control de parqueadero',
    image: 'https://images.pexels.com/photos/3841440/pexels-photo-3841440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Imagen reemplazada
    color: 'bg-pink-500'
  },
  {
    title: 'E-commerce Platform',
    description: 'Next.js | Node.js | PostgreSQL | Plataforma de comercio electrónico',
    image: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-blue-600'
  },
  {
    title: 'API RESTful',
    description: 'Java | Spring Boot | PostgreSQL | API REST para gestión de proyectos',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-indigo-600'
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Mis Proyectos
          </h2>
          <p 
            className={cn(
              "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Una selección de proyectos en los que he trabajado, mostrando mis habilidades 
            en diferentes tecnologías y áreas de desarrollo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <figure 
              key={index}
              className={cn(
                "bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden group",
                "hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className={`absolute inset-0 opacity-50 ${project.color}`}></div>
              </div>
              <figcaption className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <footer className="flex justify-end mt-4">
                  <a 
                    href="https://github.com/samumafu" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar perfil de GitHub"
                  >
                    <Github size={20} />
                  </a>
                </footer>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
}
