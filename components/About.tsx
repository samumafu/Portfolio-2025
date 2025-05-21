'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, Lightbulb, Users, Monitor, 
  Gamepad2, PawPrint, PartyPopper, Mountain 
} from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      const hobbies = document.getElementById('hobbies');
      const trigger = about || hobbies;
      if (trigger) {
        const position = trigger.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Desarrollo Full Stack',
      description: 'Desarrollo aplicaciones completas desde el frontend hasta el backend con las últimas tecnologías.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Soluciones Creativas',
      description: 'Encuentro soluciones innovadoras para resolver problemas complejos de manera eficiente.'
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Diseño UI/UX',
      description: 'Creo interfaces intuitivas y atractivas para mejorar la experiencia del usuario.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Trabajo en Equipo',
      description: 'Colaboro efectivamente en equipos multidisciplinarios para lograr objetivos comunes.'
    }
  ];

  const hobbies = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Videojuegos',
      description: 'Me encanta jugar videojuegos como una forma de entretenimiento y desafío mental.'
    },
    {
      icon: <PartyPopper className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Socializar',
      description: 'Disfruto conocer nuevas personas y compartir ideas en distintos entornos sociales.'
    },
    {
      icon: <Mountain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Pasear',
      description: 'Salir a caminar, explorar la naturaleza o simplemente disfrutar del aire libre me relaja.'
    },
    {
      icon: <PawPrint className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Mascotas',
      description: 'Me encantan los animales, disfruto pasar tiempo con mascotas y cuidarlas.'
    }
  ];

  return (
    <>
      {/* Acerca de Mí */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              Acerca de Mí
            </h2>
            <p 
              className={cn(
                "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              Soy un desarrollador apasionado por crear soluciones tecnológicas que resuelvan problemas 
              reales. Me especializo en desarrollo de aplicaciones con componentes en patrones de 
              diseño, desarrollo full-stack y gestión de bases de datos.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <figure 
                key={index}
                className={cn(
                  "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
                  "border-t-4 border-indigo-500",
                  "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    {feature.icon}
                  </div>
                  <figcaption>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </article>
      </section>

      {/* Mis Pasatiempos */}
      <section id="hobbies" className="py-24 bg-gray-50 dark:bg-gray-800">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              Mis Pasatiempos
            </h2>
            <p 
              className={cn(
                "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              Además del desarrollo, disfruto de una variedad de actividades que me permiten desconectar 
              y mantenerme creativo.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby, index) => (
              <figure 
                key={index}
                className={cn(
                  "bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
                  "border-t-4 border-indigo-500",
                  "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    {hobby.icon}
                  </div>
                  <figcaption>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {hobby.description}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
