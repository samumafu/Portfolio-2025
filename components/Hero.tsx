'use client';

import { ArrowDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900"
    >
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <figure 
            className={cn(
              'relative flex justify-center transition-all duration-1000 transform',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <span className="relative flex h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-full bg-indigo-100 dark:bg-indigo-800 border-4 border-indigo-500">
              <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-indigo-600 dark:text-indigo-300">
                SI
              </span>
            </span>
          </figure>
          
          <div 
            className={cn(
              'text-center md:text-left transition-all duration-1000 delay-300 transform',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
              ¡Hola, soy Samuel!
            </h1>
            <h2 className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 mb-6">
              Desarrollador Full Stack
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Con 25 años de experiencia en programación, me especializo 
              en crear soluciones digitales efectivas y visualmente atractivas. 
              Diseño y desarrollo aplicaciones utilizando múltiples tecnologías 
              como Python, Java, JavaScript y frameworks modernos como 
              React, Next.js y Spring Boot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                Contáctame
              </a>
              <a 
                href="/SamuelIbarra_CV.pdf" 
                download 
                className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                Descargar CV
                <Download size={18} />
              </a>
            </div>
          </div>
        </header>
        
        <footer className="mt-16 flex justify-center">
          <a 
            href="#about" 
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowDown className="text-indigo-600 dark:text-indigo-400" />
          </a>
        </footer>
      </article>
    </section>
  );
}