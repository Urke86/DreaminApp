import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language } = useLanguage();
  const en = language === 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { href: '#portfolio', label: en ? 'Work' : 'Projekti' },
    { href: '#services', label: en ? 'Expertise' : 'Usluge' },
    { href: '#about', label: en ? 'Studio' : 'Studio' },
    { href: '#contact', label: en ? 'Contact' : 'Kontakt' },
  ];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || isOpen ? 'border-white/10 bg-[#0A1020]/95 shadow-[0_10px_40px_rgba(0,0,0,.18)] backdrop-blur-xl' : 'border-transparent bg-[#0A1020]/50 backdrop-blur-sm'}`}>
      <div className="container flex h-[78px] items-center justify-between gap-5">
        <a href="#hero" aria-label="DreaminApp — home" onClick={() => setIsOpen(false)} className="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[13px] bg-gradient-to-br from-[#9E91FF] via-[#7568EB] to-[#5AD9C6] text-[#0B1020] shadow-[0_5px_20px_rgba(107,92,255,.24)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 18V6h5.3c4.7 0 8.4 2.6 8.4 6s-3.7 6-8.4 6H5Z" stroke="currentColor" strokeWidth="2.2"/><path d="m10 15 3-3-3-3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-[21px] font-semibold tracking-[-.055em] text-white">dreamin<span className="text-[#AEAAFF]">app</span><span className="text-[#93E6D4]">.</span></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label={en ? 'Main navigation' : 'Glavna navigacija'}>
          {links.map(link => <a href={link.href} key={link.href} className="rounded-md py-2 text-[13px] font-medium text-[#BCC6D9] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">{link.label}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSelector />
          <a className="group inline-flex items-center gap-2 rounded-full border border-[#8F82F2]/40 bg-[#8F82F2]/15 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#7669DF]/30" href="#contact">
            {en ? 'Let’s talk' : 'Pokreni projekat'} <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSelector />
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white" type="button" aria-label={isOpen ? (en ? 'Close menu' : 'Zatvori meni') : (en ? 'Open menu' : 'Otvori meni')} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" aria-label={en ? 'Mobile navigation' : 'Mobilna navigacija'} className="border-t border-white/10 bg-[#0A1020] px-5 pb-7 pt-4 lg:hidden">
          {links.map(link => <a href={link.href} key={link.href} onClick={() => setIsOpen(false)} className="block border-b border-white/10 px-2 py-4 text-base font-medium text-white">{link.label}</a>)}
          <a href="#contact" onClick={() => setIsOpen(false)} className="studio-button-primary mt-6 w-full">{en ? 'Start a project' : 'Pokreni projekat'} <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}
