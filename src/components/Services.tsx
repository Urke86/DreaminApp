import { ArrowUpRight, Bot, Layers3, Smartphone, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const offerings = [
  {
    number: '01',
    icon: Layers3,
    title: { en: 'SaaS & Web Platforms', sr: 'SaaS i web platforme' },
    description: {
      en: 'From a focused MVP to a scalable web product. Designed around the people who use it.',
      sr: 'Od fokusiranog MVP-a do ozbiljne web platforme. Svako rešenje počinje potrebama korisnika.',
    },
    tags: ['React', 'TypeScript', 'Supabase'],
    accent: '#B5A8FF',
  },
  {
    number: '02',
    icon: Smartphone,
    title: { en: 'Mobile App Development', sr: 'Razvoj mobilnih aplikacija' },
    description: {
      en: 'Thoughtful cross-platform applications with a refined experience on iOS and Android.',
      sr: 'Pažljivo razvijene aplikacije za iOS i Android sa intuitivnim korisničkim iskustvom.',
    },
    tags: ['React Native', 'Expo', 'UX'],
    accent: '#9AE6D6',
  },
  {
    number: '03',
    icon: Bot,
    title: { en: 'AI Products & Agents', sr: 'AI proizvodi i agenti' },
    description: {
      en: 'Useful AI experiences integrated into workflows and products, not AI for its own sake.',
      sr: 'Praktična AI rešenja integrisana u procese i proizvode — sa merljivom svrhom.',
    },
    tags: ['OpenAI', 'AI Agents', 'APIs'],
    accent: '#AACBFF',
  },
  {
    number: '04',
    icon: Workflow,
    title: { en: 'Automation & Integration', sr: 'Automatizacija i integracije' },
    description: {
      en: 'Connect systems, reduce repetitive work and build dependable processes end to end.',
      sr: 'Povezivanje sistema, smanjenje rutinskih zadataka i pouzdani digitalni procesi.',
    },
    tags: ['n8n', 'Workflows', 'Integrations'],
    accent: '#FFCDA9',
  },
];

export default function Services() {
  const { language } = useLanguage();
  const locale = language === 'en' ? 'en' : 'sr';

  return (
    <section id="services" className="relative bg-[#0D1424] py-24 text-white md:py-32">
      <div className="container">
        <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="studio-eyebrow">{locale === 'en' ? 'What we do' : 'Naše ekspertize'}</p>
            <h2 className="studio-section-title mt-5">
              {locale === 'en' ? <>Built for the <span className="studio-gradient-text">real world.</span></> : <>Tehnologija sa <span className="studio-gradient-text">jasnom svrhom.</span></>}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-slate-400 lg:pb-2">
            {locale === 'en'
              ? 'The right technology matters. Understanding the problem matters more. We connect product thinking, design and engineering.'
              : 'Prava tehnologija je važna. Razumevanje problema je još važnije. Spajamo produkt strategiju, dizajn i razvoj.'}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {offerings.map(offering => {
            const Icon = offering.icon;
            return (
              <article key={offering.number} className="studio-service-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141E30] p-7 sm:p-9">
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
                    <Icon size={25} strokeWidth={1.5} style={{ color: offering.accent }} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-slate-500">{offering.number} / 04</span>
                </div>
                <div className="relative z-10 mt-12">
                  <h3 className="max-w-[350px] text-2xl font-semibold tracking-[-.035em] text-white sm:text-[28px]">{offering.title[locale]}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[#AFBCD2] sm:text-[15px]">{offering.description[locale]}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {offering.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">{tag}</span>)}
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: offering.accent }} aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-400">{locale === 'en' ? 'Have a complex problem? We enjoy solving those.' : 'Imaš kompleksan izazov? Volimo da rešavamo takve probleme.'}</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C2B9FF] transition-colors hover:text-white">{locale === 'en' ? 'Tell us about it' : 'Opiši nam svoju ideju'} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
