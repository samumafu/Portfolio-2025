'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Email",
      content: "isamuelfelipe@gmail.com",
      link: "mailto:isamuelfelipe@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Teléfono",
      content: "+573022181829",
      link: "tel:+573022181829"
    },
    {
      icon: <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Ubicación",
      content: "San Juan de Pasto, Colombia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            Contacto
          </h2>
          <p className={cn("max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-100 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo puedo ayudarte.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <aside className={cn("lg:col-span-1 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Estoy disponible para proyectos freelance, oportunidades de tiempo completo o simplemente para discutir ideas innovadoras.
            </p>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50">{item.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    <a href={item.link} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {item.content}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <section className={cn("lg:col-span-2 transition-all duration-700 delay-200 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíame un Mensaje</h3>

            {formStatus === 'success' && (
              <div className="p-4 mb-6 rounded bg-green-100 text-green-800 font-medium">¡Mensaje enviado correctamente!</div>
            )}

            {formStatus === 'error' && (
              <div className="p-4 mb-6 rounded bg-red-100 text-red-800 font-medium">Hubo un error al enviar el mensaje. Intenta de nuevo.</div>
            )}

            <form
              action="https://formspree.io/f/xrbqdnve"
              method="POST"
              onSubmit={() => setFormStatus('success')}
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
              <input type="hidden" name="_next" value="https://samuel-psi.vercel.app/?enviado=true" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <fieldset className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </fieldset>
                <fieldset className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </fieldset>
              </div>

              <fieldset className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </fieldset>

              <fieldset className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                />
              </fieldset>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors shadow-md"
                >
                  Enviar Mensaje
                  <Send size={18} />
                </button>
              </div>
            </form>
          </section>
        </div>
      </article>
    </section>
  );
}
