import { ArrowUpRight, Check, Compass, Layers3, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language } = useLanguage();
  const en = language === 'en';

  const steps = [
    { number: '01', icon: Compass, en: 'Discover', sr: 'Razumevanje', detailEn: 'Find the real problem.', detailSr: 'Razumemo pravi problem.' },
    { number: '02', icon: Layers3, en: 'Design', sr: 'Dizajn', detailEn: 'Make every interaction count.', detailSr: 'Svaka interakcija ima smisao.' },
    { number: '03', icon: Rocket, en: 'Build & evolve', sr: 'Razvoj i rast', detailEn: 'Ship, learn and improve.', detailSr: 'Isprobavamo, učimo i unapređujemo.' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#0A1120] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#6D5DDB]/10 blur-[120px]" aria-hidden="true" />
      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <p className="studio-eyebrow">{en ? 'Inside the studio' : 'O studiju'}</p>
            <h2 className="studio-section-title mt-5">{en ? <>Small by design. <span className="studio-gradient-text">Big on detail.</span></> : <>Pažnja na detalje. <span className="studio-gradient-text">Velike ideje.</span></>}</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#AAB8CF]">
              {en
                ? 'DreaminApp is an independent digital product studio combining product management, deliberate design and modern development. No unnecessary layers — just a thoughtful approach to building useful software.'
                : 'DreaminApp je nezavisni studio koji spaja produkt menadžment, promišljen dizajn i savremeni razvoj softvera. Bez nepotrebne komplikacije — sa fokusom na stvarnu vrednost proizvoda.'}
            </p>
            <a className="mt-8 inline-flex items-center gap-2 border-b border-[#ADA3FF]/50 pb-2 text-sm font-semibold text-[#C7C0FF] transition-colors hover:border-white hover:text-white" href="#contact">
              {en ? 'Let’s build something meaningful' : 'Hajde da napravimo nešto vredno'} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#141E30]/80">
            <div className="border-b border-white/10 px-7 py-6 sm:px-9">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#ACA6F5]"><Check size={15} aria-hidden="true" /> {en ? 'How we think' : 'Naš proces'}</div>
            </div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={`group grid grid-cols-[48px_1fr_auto] items-center gap-4 px-6 py-7 sm:px-9 ${index !== steps.length - 1 ? 'border-b border-white/10' : ''}`}>
                  <span className="text-xs font-semibold tracking-widest text-[#848EAA]">{step.number}</span>
                  <div><h3 className="text-xl font-semibold tracking-tight text-white">{en ? step.en : step.sr}</h3><p className="mt-1 text-sm text-[#92A1B9]">{en ? step.detailEn : step.detailSr}</p></div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-[#B2A7FF] transition-colors group-hover:bg-[#B2A7FF]/10"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
