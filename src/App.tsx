import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudy18Holes from './components/CaseStudy18Holes';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Helmet } from 'react-helmet';

function MetaTags() {
  const { language } = useLanguage();
  
  React.useEffect(() => {
    document.documentElement.lang = language;
    
    const metaTags = {
      title: language === 'en' 
        ? 'DreaminApp | Digital Product Studio'
        : 'DreaminApp | Digitalni Studio',
      description: language === 'en'
        ? 'DreaminApp builds SaaS platforms, mobile applications and AI-powered digital products.'
        : 'DreaminApp razvija SaaS platforme, mobilne aplikacije i digitalne proizvode zasnovane na AI tehnologijama.',
      keywords: language === 'en'
        ? 'SaaS development, mobile app development, AI automation, digital product studio'
        : 'razvoj SaaS aplikacija, mobilne aplikacije, AI automatizacija, digitalni proizvodi'
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

function SEOHelmet() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DreaminApp",
        url: "https://www.dreaminapp.rs/",
        logo: "https://www.dreaminapp.rs/Modern-Minimalist%20Logo%20for%20DreaminApp%20-%20Version%204%20(2).png",
        description: "Digital product studio building SaaS platforms, mobile apps and AI-powered solutions."
      },
      {
        "@type": "WebSite",
        name: "DreaminApp",
        url: "https://www.dreaminapp.rs/"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

function App() {
  // Automatski skrol do sekcije na osnovu hash-a u URL-u
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Kratko kašnjenje da se DOM učita
    }
  }, []);

  return (
    <LanguageProvider>
      <SEOHelmet />
      <MetaTags />
      <div className="relative overflow-hidden bg-[#090E1B]">
        <a href="#main-content" className="skip-link">Preskoči na sadržaj / Skip to content</a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <Portfolio />
          <CaseStudy18Holes />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;