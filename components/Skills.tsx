'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const technicalSkills = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "TailwindCSS",
  "PostgreSQL",
  "Spring Boot",
  "Django",
  "Git",
  "Vercel",
];

const softSkills = [
  "Trabajo en equipo",
  "Comunicación",
  "Resolución de problemas",
  "Gestión del tiempo",
  "Pensamiento crítico",
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Tecnologías y Habilidades
          </h2>
          <p 
            className={cn(
              "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Las herramientas y tecnologías con las que trabajo, así como mis habilidades profesionales.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Tecnologías
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center",
                    "transition-all duration-700 delay-[calc(100ms*var(--index))] transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center",
                    "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}