
'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com", 
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn"
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com", 
      label: "Twitter"
    },
  ];

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="flex flex-col">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <span className="relative flex h-10 w-10 overflow-hidden rounded-full bg-indigo-600 text-white items-center justify-center text-lg font-bold">
                SI
              </span>
              <span className="font-bold text-xl text-white">
                SAMUEL IBARRA
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Desarrollador Full Stack con experiencia en crear soluciones digitales efectivas 
              y visualmente atractivas.
            </p>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </article>

          <nav className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Secciones
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Contacto
              </h3>
              <address className="not-italic text-gray-400">
                <p className="mb-2">San Juan de Pasto, Colombia</p>
                <p className="mb-2">isamuelfelipe@gmail.com</p>
                <p className="mb-2">+573022181829</p>
              </address>
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>
            &copy; {currentYear} Samuel Ibarra. Todos los derechos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}