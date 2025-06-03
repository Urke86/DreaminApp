import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? t.items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === t.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="card text-center p-8 md:p-12"
          >
            <div className="mb-8">
              <Quote className="w-12 h-12 mx-auto text-primary-300" />
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8">
              "{t.items[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 mr-4 overflow-hidden rounded-full border-2 border-primary-200">
                <img 
                  src={t.items[currentIndex].image} 
                  alt={t.items[currentIndex].author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold">{t.items[currentIndex].author}</div>
                <div className="text-gray-600">{t.items[currentIndex].position}</div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label={t.prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {t.items.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === idx ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`${t.goToTestimonial} ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label={t.nextTestimonial}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;