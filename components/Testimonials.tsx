'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  
  {
    id: 1,
    content: "Samuel siempre fue alguien en quien podíamos confiar para resolver los problemas del proyecto. Tiene mucha paciencia y explica bien cuando alguien se pierde.",
    name: "Juan Vizuette",
    role: "Companero UCC",
    initials: "JV",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: 2,
    content: "Me gustó mucho trabajar con Samuel. Siempre estaba pendiente de que todo saliera bien y nos ayudaba cuando algo no funcionaba. Súper responsable.",
    name: "Valery Rosero",
    role: "Companera UCC",
    initials: "VR",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: 3,
    content: "Samuel entiende rápido las ideas y propone soluciones que uno no había pensado. Da gusto trabajar con él porque siempre suma al equipo.",
    name: "Jose Mafla",
    role: "Companero UCC",
    initials: "JM",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: 4,
    content: "Es de los que se toman en serio los trabajos en grupo. Siempre aportó con ideas buenas y ayudaba a mantener todo en orden. Muy comprometido.",
    name: "Diego Ceron",
    role: "Companero UCC",
    initials: "DC",
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: 5,
    content: "Samuel se nota que le gusta lo que hace. Siempre estaba investigando más allá y nos compartía cosas útiles. Aprendí bastante trabajando con él.",
    name: "Javier Ordones",
    role: "Companero UCC",
    initials: "JO",
    color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
];


export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev - testimonialsPerPage < 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
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

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Testimonios
          </h2>
          <p 
            className={cn(
              "max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Lo que dicen mis clientes y colaboradores sobre mi trabajo y profesionalismo.
          </p>
        </header>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <figure 
                key={testimonial.id}
                className={cn(
                  "bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md",
                  "border-t-4 border-indigo-500",
                  "transition-all duration-700 delay-[calc(150ms*var(--index))] transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ '--index': index } as React.CSSProperties}
              >
                <Quote className="h-8 w-8 text-indigo-400 mb-4" />
                <blockquote className="mb-6 text-gray-700 dark:text-gray-300">
                  {testimonial.content}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <span className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-medium ${testimonial.color}`}>
                    {testimonial.initials}
                  </span>
                  <div>
                    <cite className="not-italic font-medium text-gray-900 dark:text-white block">
                      {testimonial.name}
                    </cite>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonials}
              className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              aria-label="Testimonios anteriores"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              aria-label="Siguientes testimonios"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}