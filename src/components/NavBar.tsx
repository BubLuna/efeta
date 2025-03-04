
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Início', path: '#start' },
    { name: 'Sobre', path: '#info' },
    { name: 'Histórico', path: '#historico' },
    { name: 'Inscrições', path: '#inscricoes' },
    { name: 'FAQ', path: '#faq' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-2 bg-white/90 shadow-sm backdrop-blur-sm' 
          : 'py-4 bg-efeta-500 text-white shadow-md'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-50">
          <Logo size={isScrolled ? 'sm' : 'md'} className={isScrolled ? '' : 'text-white'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-md font-medium transition-all duration-200',
                isScrolled
                  ? location.pathname === item.path
                    ? 'text-efeta-600 bg-efeta-50'
                    : 'text-gray-600 hover:text-efeta-500 hover:bg-gray-50'
                  : location.pathname === item.path
                    ? 'text-efeta-500 bg-white'
                    : 'text-white hover:bg-efeta-600/50'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className={cn(
            "ml-2 transition-colors",
            isScrolled
              ? "bg-efeta-500 hover:bg-efeta-600"
              : "bg-white text-efeta-500 hover:bg-efeta-50"
          )}>
            Inscreva-se
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden z-50 p-2 transition-colors",
            isScrolled
              ? "text-gray-700 hover:text-efeta-500"
              : "text-white hover:text-efeta-50"
          )}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 z-40 flex flex-col p-6 pt-24 transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'bg-white opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          )}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-3 rounded-md font-medium text-lg border-b border-gray-100',
                  location.pathname === item.path
                    ? 'text-efeta-600 bg-efeta-50'
                    : 'text-gray-600 hover:text-efeta-500 active:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-efeta-500 hover:bg-efeta-600 transition-colors">
              Inscreva-se
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
