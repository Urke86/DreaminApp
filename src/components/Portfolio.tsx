import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { studioProjects, type ProjectCategory } from '../data/projects';
import EasyBookVisual from './EasyBookVisual';

type Filter = 'All' | ProjectCategory;
const categories: Filter[] = ['All', 'SaaS', 'Mobile Apps', 'AI & Automation'];

const categoryNames: Record<Filter, { en: string; sr: string }> = {
  All: { en: 'All work', sr: 'Svi projekti' },
  SaaS: { en: 'SaaS', sr: 'SaaS' },
  'Mobile Apps': { en: 'Mobile apps', sr: 'Mobilne aplikacije' },
  'AI & Automation': { en: 'AI & Automation', sr: 'AI i automatizacija' },
};

function GolfFeaturedCard({ locale }: { locale: 'en' | 'sr' }) {
  return (
    <article className="group relative mb-7 overflow-hidden rounded-[30px] border border-[#89D5B1]/20 bg-[#10271F] lg:mb-9">
      <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#A8EACC]/25 bg-[#A8EACC]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B9F2D4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A3E8BE]" />
            {locale === 'en' ? 'Featured case study' : 'Izdvojeni projekat'}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.17em] text-[#91BDA8]">{locale === 'en' ? 'Client project · Web + iOS + Android' : 'Klijentski projekat · Web + iOS + Android'}</p>
          <h3 className="text-4xl font-semibold tracking-[-.055em] text-white sm:text-5xl xl:text-6xl">18Holes<span className="text-[#91DDBB]">.</span>Golf</h3>
          <p className="mt-5 max-w-lg text-base leading-8 text-[#C0D6C9]">
            {locale === 'en'
              ? 'A connected golf experience — from finding a course and booking a tee time to digital tickets, notifications and yardage books.'
              : 'Povezano golf iskustvo — od pronalaženja terena i rezervacije termina do digitalnih karata, obaveštenja i yardage book funkcionalnosti.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['React', 'React Native', 'Expo', 'Supabase'].map(tag => <span key={tag} className="rounded-full border border-[#A8EACC]/15 bg-black/10 px-3 py-1.5 text-xs text-[#C0D9C9]">{tag}</span>)}
          </div>
          <a href="#case-study-18holes" className="group/button mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#A5ECCB] px-6 py-3.5 text-sm font-bold text-[#10291F] transition-colors hover:bg-[#C9F8DE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9F8DE]">
            {locale === 'en' ? 'Explore case study' : 'Pogledaj studiju projekta'}
            <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
          </a>
        </div>
        <div className="relative min-h-[410px] overflow-hidden border-t border-white/10 bg-[radial-gradient(ellipse_at_60%_40%,#285D47_0%,#123A2C_45%,#0D2A23_100%)] sm:min-h-[540px] lg:min-h-[600px] lg:border-l lg:border-t-0">
          <div className="pointer-events-none absolute inset-0 opacity-30" style={{backgroundImage:'linear-gradient(#A7EAC010 1px,transparent 1px),linear-gradient(90deg,#A7EAC010 1px,transparent 1px)',backgroundSize:'48px 48px'}} aria-hidden="true" />
          <div className="absolute right-[26%] top-[11%] h-[83%] w-[42%] max-w-[235px] -rotate-[10deg] overflow-hidden rounded-[28px] border-[5px] border-[#14291F] bg-[#080F0D] shadow-[0_30px_75px_rgba(0,0,0,.65)] sm:rounded-[38px] sm:border-[7px]">
            <img src="/projects/18holes-booking.png" alt={locale === 'en' ? '18Holes Golf app — real tee-time booking screen' : '18Holes Golf — stvarni ekran za rezervaciju termina'} className="h-full w-full object-cover object-top" loading="eager" decoding="async" />
          </div>
          <div className="absolute bottom-[4%] right-[5%] h-[72%] w-[38%] max-w-[205px] rotate-[9deg] overflow-hidden rounded-[25px] border-[5px] border-[#14291F] bg-[#080F0D] shadow-[0_30px_75px_rgba(0,0,0,.65)] sm:rounded-[36px] sm:border-[7px]">
            <img src="/projects/18holes-notifications.png" alt={locale === 'en' ? '18Holes Golf app — real notifications screen' : '18Holes Golf — stvarni ekran obaveštenja'} className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
          </div>
          <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#0D221C]/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.13em] text-[#D3F2DF] backdrop-blur-md sm:bottom-8 sm:left-8">
            {locale === 'en' ? 'Real application screens' : 'Stvarni ekrani aplikacije'}
          </div>
        </div>
      </div>
    </article>
  );
}


function EasyBookFeaturedCard({ locale }: { locale: 'en' | 'sr' }) {
  const en = locale === 'en';
  return (
    <article className="mb-8 overflow-hidden rounded-[30px] border border-[#A69AFF]/20 bg-[#191A3A]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#A99DFF]/25 bg-[#A99DFF]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C6BBFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BBAEFF]" />
            {en ? 'SaaS case study' : 'SaaS studija projekta'}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.17em] text-[#B2A9DE]">{en ? 'Product design & development' : 'Dizajn i razvoj proizvoda'}</p>
          <h3 className="text-4xl font-semibold tracking-[-.055em] text-white sm:text-5xl xl:text-6xl">Easy<span className="text-[#B8AEFF]">Book.</span></h3>
          <p className="mt-5 max-w-lg text-base leading-8 text-[#CDCEEB]">
            {en
              ? 'A booking platform that connects service selection, availability, customer scheduling and business management.'
              : 'Platforma koja povezuje izbor usluge, slobodne termine, online zakazivanje i upravljanje rezervacijama.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">{['React', 'TypeScript', 'Supabase'].map(tag => <span key={tag} className="rounded-full border border-[#A99DFF]/20 bg-black/10 px-3 py-1.5 text-xs text-[#D2D0F1]">{tag}</span>)}</div>
          <a href="#case-study-easybook" className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#B1A5FF] px-6 py-3.5 text-sm font-bold text-[#181333] transition-colors hover:bg-[#CBC2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CBC2FF]">
            {en ? 'Explore case study' : 'Pogledaj studiju projekta'} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="min-h-[400px] overflow-hidden border-t border-white/10 lg:min-h-[550px] lg:border-l lg:border-t-0">
          <EasyBookVisual locale={locale} compact />
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const { language } = useLanguage();
  const locale = language === 'sr' ? 'sr' : 'en';
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('All');
  const showFeatured = filter === 'All' || filter === 'Mobile Apps';
  const showEasyBook = filter === 'All' || filter === 'SaaS';
  const projects = studioProjects.filter((project) => project.id !== '18holes' && project.id !== 'easybook' && (filter === 'All' || project.category === filter));

  return (
    <section id="portfolio" className="relative bg-[#0B1020] py-24 text-white md:py-32">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#AB9EFF]">{locale === 'en' ? 'Selected work' : 'Izabrani projekti'}</p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-[-.045em] md:text-6xl">{locale === 'en' ? 'Built, not just imagined.' : 'Ideje pretvorene u proizvode.'}</h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            {locale === 'en' ? 'A selection of digital products spanning SaaS, mobile apps and practical AI-powered experiences.' : 'Izbor digitalnih proizvoda — SaaS platforme, mobilne aplikacije i praktična AI rešenja.'}
          </p>
        </div>
        <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label={locale === 'en' ? 'Filter projects' : 'Filtriraj projekte'}>
          {categories.map(category => (
            <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5A9FF] ${filter === category ? 'border-[#9C8BFF] bg-[#9C8BFF] text-[#0B1020]' : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'}`}>
              {categoryNames[category][locale]}
            </button>
          ))}
        </div>
        {showFeatured && <GolfFeaturedCard locale={locale} />}
        {showEasyBook && <EasyBookFeaturedCard locale={locale} />}
        {projects.length > 0 && <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={reduceMotion ? false : {opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:0.4,delay:Math.min(index,3)*0.06}} className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#141B2D]">
              <div className="relative flex min-h-52 items-center justify-center overflow-hidden p-8 sm:min-h-64" style={{background:`radial-gradient(circle at 78% 28%, ${project.accent}30, transparent 58%), linear-gradient(145deg, #1D2740, #101729)`}}>
                <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
                <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/15 bg-[#090F1E]/80 p-7 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{backgroundColor:project.accent,color:'#101729'}}><Layers3 size={20} aria-hidden="true" /></div>
                    <span className="font-mono text-xs text-slate-400">{project.number} / 05</span>
                  </div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">{categoryNames[project.category][locale]}</p>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
                  <div className="mt-7 h-1 w-16 rounded-full" style={{backgroundColor:project.accent}} />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#B4A9FF]">{categoryNames[project.category][locale]}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{project.stage === 'Released' ? (locale === 'en' ? 'Released' : 'Objavljeno') : (locale === 'en' ? 'In development' : 'U razvoju')}</span>
                </div>
                <p className="mb-5 min-h-14 text-sm leading-relaxed text-slate-300 md:text-base">{project.summary[locale]}</p>
                <div className="flex flex-wrap gap-2">{project.technologies.map(technology => <span key={technology} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{technology}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">
          <p className="max-w-xl text-sm text-slate-400">{locale === 'en' ? 'Every project starts with a real problem worth solving.' : 'Svaki projekat počinje stvarnim problemom koji vredi rešiti.'}</p>
          <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-[#C3BAFF] hover:text-white">{locale === 'en' ? 'Discuss your project' : 'Razgovarajmo o projektu'} <ArrowDownRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
