'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex justify-between items-center h-16">
          <figure className="flex items-center">
            <Link href="#home" className="flex items-center gap-2">
              <span className="relative flex h-10 w-10 overflow-hidden rounded-full bg-indigo-600 text-white items-center justify-center text-lg font-bold">
                SI
              </span>
              <span className="font-bold text-xl hidden sm:block text-indigo-700 dark:text-indigo-400">
                SAMUEL IBARRA
              </span>
            </Link>
          </figure>

          <menu className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </menu>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </section>

        {mobileMenuOpen && (
          <menu className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="block">
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="px-3 py-2">
              <ThemeToggle />
            </li>
          </menu>
        )}
      </nav>
    </header>
  );
}