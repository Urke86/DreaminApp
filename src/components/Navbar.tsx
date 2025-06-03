import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: language === 'en' ? 'Services' : 'Usluge', target: 'services' },
    { name: language === 'en' ? 'EasyBook - Online Scheduling App' : 'EasyBook - Aplikacija za online zakazivanje', target: 'core-product' },
    { name: language === 'en' ? 'Portfolio' : 'Portfolio', target: 'portfolio' },
    { name: language === 'en' ? 'About' : 'O Nama', target: 'about' },
    { name: language === 'en' ? 'Contact' : 'Kontakt', target: 'contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <div className={`flex items-center transition-all duration-300 ${scrolled ? '-mt-4' : '-mt-2'}`}>
          <img 
            src="/Modern-Minimalist Logo for DreaminApp - Version 4 (2).png" 
            alt="DreaminApp Logo" 
            className="h-56 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-item font-medium hover:text-primary-500 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary-50"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <LanguageSelector />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="py-3 px-6 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;