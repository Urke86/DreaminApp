import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CoreProduct from './components/CoreProduct';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MetaTags() {
  const { language } = useLanguage();
  
  React.useEffect(() => {
    document.documentElement.lang = language;
    
    const metaTags = {
      title: language === 'en' 
        ? 'DreaminApp | Web Design & Development Solutions'
        : 'DreaminApp | Web Dizajn & Development Rešenja',
      description: language === 'en'
        ? 'Modern web design, development, and online scheduling solutions for businesses of all sizes. Custom websites, e-commerce, branding, and more.'
        : 'Moderni web dizajn, development i online zakazivanje za biznise svih veličina. Izrada web sajtova, e-commerce, brending i više od toga.',
      keywords: language === 'en'
        ? 'web design, web development, online scheduling, appointment booking, e-commerce, branding, digital solutions'
        : 'web dizajn, izrada sajtova, online zakazivanje, rezervacija termina, e-commerce, brending, digitalna rešenja'
    };

    document.title = metaTags.title;
    document.querySelector('meta[name="title"]')?.setAttribute('content', metaTags.title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', metaTags.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metaTags.keywords);
    
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metaTags.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metaTags.description);
    
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', metaTags.title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', metaTags.description);
  }, [language]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <MetaTags />
      <div className="relative overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <CoreProduct />
          <Portfolio />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;