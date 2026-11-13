import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CONTACT_EMAIL = 'dreaminapp.studio@gmail.com';

export default function Footer() {
  const { language } = useLanguage();
  const en = language === 'en';
  const navigation = [
    { href: '#hero', en: 'Home', sr: 'Početna' },
    { href: '#portfolio', en: 'Selected work', sr: 'Projekti' },
    { href: '#services', en: 'Expertise', sr: 'Usluge' },
    { href: '#about', en: 'Studio', sr: 'Studio' },
    { href: '#contact', en: 'Contact', sr: 'Kontakt' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#090E1B] py-14 text-white">
      <div className="container">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div className="max-w-sm">
            <a href="#hero" className="inline-block text-[28px] font-semibold tracking-[-.055em]">dreamin<span className="text-[#B4AAFF]">app</span><span className="text-[#8CE1CA]">.</span></a>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#9DAFC7]">{en ? 'Independent digital product studio creating purposeful SaaS, mobile and AI experiences.' : 'Nezavisni digitalni studio za promišljene SaaS, mobilne i AI proizvode.'}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 break-all text-sm font-medium text-[#D3CFFF] transition-colors hover:text-white">{CONTACT_EMAIL} <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8799B2]">{en ? 'Explore' : 'Istraži'}</p>
            <nav className="mt-6 flex flex-col items-start gap-3" aria-label={en ? 'Footer navigation' : 'Navigacija u podnožju'}>{navigation.map(item => <a key={item.href} href={item.href} className="text-sm text-[#C3CCDA] transition-colors hover:text-white">{en ? item.en : item.sr}</a>)}</nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8799B2]">{en ? 'Connect' : 'Poveži se'}</p>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a href="https://www.linkedin.com/company/dreaminapp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#C3CCDA] hover:text-white"><Linkedin size={16} aria-hidden="true" />LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href="https://github.com/Urke86" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#C3CCDA] hover:text-white"><Github size={16} aria-hidden="true" />GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-[#8192AB] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} DreaminApp. {en ? 'All rights reserved.' : 'Sva prava zadržana.'}</span>
          <span>{en ? 'Designed with intention. Built with care.' : 'Promišljeno dizajnirano. Pažljivo razvijeno.'}</span>
        </div>
      </div>
    </footer>
  );
}
