'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const workExperience = [
  {
    title: "Desarrollador Full Stack",
    company: "Proyectos Académicos y Personales",
    period: "2022 - Presente",
    description: "Desarrollo de soluciones web y móviles usando Next.js, Vite, React, Spring Boot, Flet, y SDKs de Google, AWS y Azure.",
  },
  {
    title: "Desarrollador Front-end",
    company: "Freelance / Proyectos Personales",
    period: "2021 - 2022",
    description: "Interfaces modernas con React, TailwindCSS y frameworks modernos como Vite y Next.js.",
  },
];

const education = [
  {
    degree: "Ingeniería en Software",
    institution: "Universidad Cooperativa de Colombia",
    period: "2021 - Actualidad",
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
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
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Experiencia Laboral
          </h2>
          <p
            className={cn(
              "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Mi trayectoria profesional y formación académica.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Experiencia Profesional
            </h3>
            <ol className="relative border-l-2 border-indigo-200 dark:border-indigo-800 ml-3">
              {workExperience.map((job, index) => (
                <li
                  key={index}
                  className={cn(
                    "mb-10 ml-6",
                    "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <h4 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                    <span className="mx-2 text-sm font-normal text-gray-500 dark:text-gray-400">@{job.company}</span>
                  </h4>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {job.period}
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    {job.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Formación Académica
            </h3>
            <ol className="relative border-l-2 border-indigo-200 dark:border-indigo-800 ml-3">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className={cn(
                    "mb-10 ml-6",
                    "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <h5 className="mb-1 text-base font-medium text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </h5>
                  <time className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </time>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </section>
  );
}
