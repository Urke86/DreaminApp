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
import { Helmet } from 'react-helmet';

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

function SEOHelmet() {
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"DreaminApp\",\n  \"url\": \"https://www.dreaminapp.rs/\",\n  \"logo\": \"https://www.dreaminapp.rs/Modern-Minimalist%20Logo%20for%20DreaminApp%20-%20Version%204%20(2).png\",\n  \"description\": \"We transform your ideas into digital products – specialized in MVP development, SaaS solutions, and web applications.\",\n  \"sameAs\": [\n    \"https://www.linkedin.com/company/dreaminapp/\"\n  ]\n}\n      `}</script>
      <script type="application/ld+json">{`
        {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"url\": \"https://www.dreaminapp.rs/\",\n  \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"https://www.dreaminapp.rs/?s={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n  }\n}\n      `}</script>
      <script type="application/ld+json">{`
        {\n  \"@context\": \"https://schema.org/\",\n  \"@type\": \"Product\",\n  \"name\": \"EasyBook\",\n  \"sku\": \"EB-001\",\n  \"image\": [\n    \"https://www.dreaminapp.rs/Modern-Minimalist%20Logo%20for%20DreaminApp%20-%20Version%204%20(2).png\"\n  ],\n  \"description\": \"EasyBook je sveobuhvatna aplikacija za online zakazivanje termina za razne delatnosti.\",\n  \"brand\": {\n    \"@type\": \"Brand\",\n    \"name\": \"DreaminApp\"\n  },\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"EUR\",\n    \"price\": \"15.00\",\n    \"availability\": \"https://schema.org/InStock\",\n    \"url\": \"https://www.dreaminapp.rs/#core-product\",\n    \"itemCondition\": \"https://schema.org/NewCondition\",\n    \"priceValidUntil\": \"2025-12-31\",\n    \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"DreaminApp\"\n    }\n  },\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"4.9\",\n    \"reviewCount\": \"37\"\n  },\n  \"review\": [{\n    \"@type\": \"Review\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"Goran Palikuća\"\n    },\n    \"reviewRating\": {\n      \"@type\": \"Rating\",\n      \"ratingValue\": \"5\",\n      \"bestRating\": \"5\"\n    },\n    \"reviewBody\": \"EasyBook je unapredio naše poslovanje i olakšao zakazivanje za naše klijente!\"\n  }]\n}\n      `}</script>
      <script type="application/ld+json">{`
        {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 1,\n      \"name\": \"Početna\",\n      \"item\": \"https://www.dreaminapp.rs/\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 2,\n      \"name\": \"EasyBook\",\n      \"item\": \"https://www.dreaminapp.rs/#core-product\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 3,\n      \"name\": \"Portfolio\",\n      \"item\": \"https://www.dreaminapp.rs/#portfolio\"\n    },\n    {\n      \"@type\": \"ListItem\",\n      \"position\": 4,\n      \"name\": \"Kontakt\",\n      \"item\": \"https://www.dreaminapp.rs/#contact\"\n    }\n  ]\n}\n      `}</script>
      <script type="application/ld+json">{`
        {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Šta je EasyBook?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"EasyBook je aplikacija za online zakazivanje termina za različite delatnosti.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Kako mogu da integrišem EasyBook na svoj sajt?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Naš tim može integrisati EasyBook direktno na vaš postojeći sajt ili kreirati posebnu stranicu za zakazivanje.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Koje su cene EasyBook aplikacije?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Cene se kreću od 15€ do 60€ mesečno, u zavisnosti od paketa.\"\n      }\n    }\n  ]\n}\n      `}</script>
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