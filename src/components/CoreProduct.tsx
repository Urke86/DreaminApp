import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Users, Star, Code, Building2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PricingCard = ({ 
  tier, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  tier: string; 
  price: string; 
  description: string; 
  features: string[]; 
  highlighted?: boolean; 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();
  const t = translations[language].coreProduct;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className={`card ${
        highlighted 
          ? 'border-2 border-primary-500 scale-105 shadow-glow relative z-10' 
          : 'border border-gray-200'
      } flex flex-col min-h-[600px]`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          {language === 'en' ? 'Most Popular' : 'Najpopularnije'}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{tier}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500">{language === 'en' ? '/month' : '/mesečno'}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Star className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className={`w-full btn ${highlighted ? 'btn-primary' : 'btn-secondary'}`}>
          {language === 'en' ? 'Choose Plan' : 'Izaberi Plan'}
        </button>
      </div>
    </motion.div>
  );
};

const IntegrationOption = ({ 
  icon, 
  title, 
  description,
  isRight = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  isRight?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, x: isRight ? 20 : -20 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: isRight ? 20 : -20 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      className="group perspective h-full"
    >
      <div className="card relative transform transition-all duration-500 hover:rotate-y-2 hover:scale-105 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 backdrop-blur-sm bg-white/90 p-8 rounded-2xl flex flex-col h-full">
          <div className="flex flex-col items-center text-center flex-grow">
            <motion.div 
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mb-6 shadow-lg"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <div className="text-primary-600">
                {icon}
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              {title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoreProduct = () => {
  const { language } = useLanguage();
  const t = translations[language].coreProduct;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [appRef, appInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="core-product" className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary-100 to-transparent rounded-tr-full -z-10" />
      
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <a 
            href="https://easybook1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4 transition-colors"
          >
            {language === 'en' ? 'Click to explore our EasyBook solution' : 'Klikni da istražiš naše EasyBook rešenje'}
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={appRef}
            initial={{ opacity: 0, x: -30 }}
            animate={appInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">{t.features.title}</h3>
            <p className="text-gray-600 mb-6">
              {t.features.description}
            </p>
            
            <div className="space-y-4">
              {t.features.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-100 rounded-lg p-2 mr-4">
                    {index === 0 && <Calendar className="w-6 h-6 text-primary-600" />}
                    {index === 1 && <Clock className="w-6 h-6 text-primary-600" />}
                    {index === 2 && <Users className="w-6 h-6 text-primary-600" />}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={appInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
            <img 
              src="https://images.pexels.com/photos/5699469/pexels-photo-5699469.jpeg" 
              alt="Scheduling application interface" 
              className="rounded-2xl shadow-xl relative transform hover:rotate-y-2 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-12"
          >
            {language === 'en' ? 'Choose Your Integration Path' : 'Izaberite Način Integracije'}
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <IntegrationOption
              icon={<Code className="w-10 h-10" />}
              title={language === 'en' ? 'Do you have a company website?' : 'Već imate sajt kompanije?'}
              description={language === 'en' 
                ? 'We will integrate our booking system directly into your existing website, enabling your clients to access online appointment booking for your services with just one click from your site.'
                : 'Instegrisaćemo naš sistem za zakazivanje direktno na vaš postojeći web sajt čime ćemo vam omogućiti da, jednim klikom, vaši klijenti direktno sa vašeg sajta pristupaju online zakazivanju termina vaših usluga.'}
            />
            <IntegrationOption
              icon={<Building2 className="w-10 h-10" />}
              title={language === 'en' ? 'Your company doesn\'t have a website?' : 'Vaša kompanija nema web sajt?'}
              description={language === 'en'
                ? 'Don\'t worry. Our team of experts can create a personalized booking page that you can start using immediately. We also offer website development services for your company where we would integrate our online booking system.'
                : 'Budite bez brige. Naš tim stručnjaka može da kreira personalizovanu stranicu za zakazivanje termina, koju odmah možete početi da koristite. Takođe, nudimo i uslugu izrade web sajta vaše kompanije na kojem bismo integirsali i naš sistem za online zakazivanje.'}
              isRight={true}
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-12">{t.pricing.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {t.pricing.plans.map((plan, index) => (
            <PricingCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProduct;