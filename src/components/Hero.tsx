import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import HeroCanvas from './3d/HeroCanvas';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gradient">{t.title}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary w-full sm:w-auto"
              >
                {t.exploreServices}
              </Link>
              
              <Link
                to="core-product"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-secondary w-full sm:w-auto"
              >
                {t.schedulingSolution} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            {/* This area is intentionally left empty as the 3D canvas fills the background */}
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="h-14 w-8 rounded-full border-2 border-primary-400 flex justify-center pt-2">
          <div className="h-3 w-1 rounded-full bg-primary-400 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;