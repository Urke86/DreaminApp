import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal = ({ isOpen, onClose, language }: { isOpen: boolean; onClose: () => void; language: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-md mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            {language === 'en' ? 'Thank you for subscribing!' : 'Hvala na prijavi!'}
          </h3>
          
          <p className="text-gray-600">
            {language === 'en' 
              ? 'We will keep you updated with our latest news and offers.'
              : 'Bićete u toku sa našim najnovijim vestima i ponudama.'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email) {
      setValidationMessage(language === 'en' ? 'This field is required.' : 'Ovo polje je obavezno.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/send-newsletter-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setEmail('');
      setShowModal(true);
    } catch (error) {
      console.error('Failed to subscribe:', error);
      setValidationMessage(language === 'en'
        ? 'An error occurred. Please try again.'
        : 'Došlo je do greške. Molimo pokušajte ponovo.');
      setTimeout(() => setValidationMessage(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/Modern-Minimalist Logo for DreaminApp - Version 4 (2).png" 
                alt="DreaminApp Logo" 
                className="h-56 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              {language === 'en' 
                ? 'We transform your ideas into digital products – specialized in MVP development, SaaS solutions, and web applications.'
                : 'Transformišemo vaše ideje u digitalne proizvode – specijalizovani za MVP razvoj, SaaS rešenja i web aplikacije'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{language === 'en' ? 'Services' : 'Usluge'}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Web Design' : 'Web Dizajn'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Web Development' : 'Web Razvoj'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'E-Commerce' : 'E-Commerce'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Mobile Apps' : 'Mobilne Aplikacije'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Branding & Logo' : 'Brending i Logo'}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{language === 'en' ? 'Quick Links' : 'Brzi Linkovi'}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Home' : 'Početna'}
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'About' : 'O Nama'}
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Services' : 'Usluge'}
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Portfolio' : 'Portfolio'}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 mr-1" /> 
                  {language === 'en' ? 'Contact' : 'Kontakt'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{language === 'en' ? 'Newsletter' : 'Bilten'}</h4>
            <p className="text-gray-400 mb-4">
              {language === 'en' 
                ? 'Subscribe to our newsletter to receive updates and exclusive offers.'
                : 'Prijavite se na naš bilten da biste primali novosti i ekskluzivne ponude.'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'en' ? 'Your email address' : 'Vaša email adresa'}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
              />
              {validationMessage && (
                <div className="text-red-600 text-sm">{validationMessage}</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'en' ? 'Subscribing...' : 'Prijavljivanje...'}
                  </span>
                ) : (
                  language === 'en' ? 'Subscribe' : 'Prijavite se'
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} DreaminApp. {language === 'en' ? 'All rights reserved.' : 'Sva prava zadržana.'}</p>
        </div>
      </div>

      <AnimatePresence>
        <SuccessModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          language={language}
        />
      </AnimatePresence>
    </footer>
  );
};

export default Footer;