import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ShoppingBag, Layout, PenTool, Server, Smartphone, Rocket, Lightbulb, Target, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:shadow-lg hover:-translate-y-1 group"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

const StartupSupport = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {language === 'en' ? 'Startup Support Services' : 'Podrška Startup Firmama'}
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Our team is here to think for you and help you start your journey in the digital world. We offer maximum flexibility when working with newly established companies.'
            : 'Naš tim je tu i da misli za vas i da vam pomogne da počnete sa radom u digitalnom svetu. Fleksibilnost je maksimalna u radu sa novootvorenim firmama.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card bg-gradient-to-br from-primary-50 to-secondary-50"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Lightbulb className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2">
            {language === 'en' ? 'Strategic Planning' : 'Strateško Planiranje'}
          </h4>
          <p className="text-gray-600">
            {language === 'en'
              ? 'Our experts will analyze your needs and propose an optimal package of solutions within your starting budget.'
              : 'Naš tim stručnjaka će saslušati vaše potrebe i predložiti paket optimalnih rešenja za Vaš startni budžet.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card bg-gradient-to-br from-primary-50 to-secondary-50"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2">
            {language === 'en' ? 'Complete Digital Presence' : 'Kompletno Digitalno Prisustvo'}
          </h4>
          <p className="text-gray-600">
            {language === 'en'
              ? 'From websites and logos to branding and software solutions - everything you need to establish your digital presence.'
              : 'Od web strana i logoa do brendinga i softverskih rešenja - sve što vam je potrebno za uspostavljanje digitalnog prisustva.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card bg-gradient-to-br from-primary-50 to-secondary-50"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h4 className="text-lg font-bold mb-2">
            {language === 'en' ? 'Ongoing Support' : 'Kontinuirana Podrška'}
          </h4>
          <p className="text-gray-600">
            {language === 'en'
              ? 'We provide continuous support and guidance as your business grows and evolves in the digital space.'
              : 'Pružamo kontinuiranu podršku i vođstvo dok vaše poslovanje raste i razvija se u digitalnom prostoru.'}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceIcons = [
    <Globe className="w-10 h-10 text-primary-500" />,
    <ShoppingBag className="w-10 h-10 text-primary-500" />,
    <PenTool className="w-10 h-10 text-primary-500" />,
    <Layout className="w-10 h-10 text-primary-500" />,
    <Server className="w-10 h-10 text-primary-500" />,
    <Smartphone className="w-10 h-10 text-primary-500" />,
  ];

  const services = t.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index],
  }));

  return (
    <section id="services" className="section bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <StartupSupport />
      </div>
    </section>
  );
};

export default Services;