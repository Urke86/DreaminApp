import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
        <Globe className="w-5 h-5" />
        <span>{language === 'en' ? 'EN' : 'SR'}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => setLanguage('en')}
          className={`block w-full px-4 py-2 text-left hover:bg-gray-50 ${
            language === 'en' ? 'text-primary-600' : 'text-gray-700'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('sr')}
          className={`block w-full px-4 py-2 text-left hover:bg-gray-50 ${
            language === 'sr' ? 'text-primary-600' : 'text-gray-700'
          }`}
        >
          Srpski
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;