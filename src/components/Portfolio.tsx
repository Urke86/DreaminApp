import { useState } from 'react';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { studioProjects, type ProjectCategory } from '../data/projects';

type Filter = 'All' | ProjectCategory;
const categories: Filter[] = ['All', 'SaaS', 'Mobile Apps', 'AI & Automation'];

const categoryNames: Record<Filter, { en: string; sr: string }> = {
  All: { en: 'All work', sr: 'Svi projekti' },
  SaaS: { en: 'SaaS', sr: 'SaaS' },
  'Mobile Apps': { en: 'Mobile apps', sr: 'Mobilne aplikacije' },
  'AI & Automation': { en: 'AI & Automation', sr: 'AI i automatizacija' },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const locale = language === 'sr' ? 'sr' : 'en';
  const [filter, setFilter] = useState<Filter>('All');
  const projects = studioProjects.filter((project) => filter === 'All' || project.category === filter);

  return (
    <section id="portfolio" className="relative bg-[#0B1020] py-24 text-white md:py-32">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#AB9EFF]">
            {locale === 'en' ? 'Selected work' : 'Izabrani projekti'}
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {locale === 'en' ? 'Real products. Real progress.' : 'Stvarni projekti. Stvarni rezultati.'}
          </h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            {locale === 'en'
              ? 'A selection of digital products spanning SaaS platforms, mobile apps and AI-powered experiences.'
              : 'Izbor digitalnih proizvoda: SaaS platforme, mobilne aplikacije i rešenja zasnovana na AI tehnologijama.'}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={locale === 'en' ? 'Filter projects' : 'Filtriraj projekte'}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5A9FF] ${
                filter === category
                  ? 'border-[#9C8BFF] bg-[#9C8BFF] text-[#0B1020]'
                  : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {categoryNames[category][locale]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#141B2D]"
            >
              <div className="relative flex min-h-52 items-center justify-center overflow-hidden p-8 sm:min-h-64" style={{ background: `radial-gradient(circle at 78% 28%, ${project.accent}30, transparent 58%), linear-gradient(145deg, #1D2740, #101729)` }}>
                <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
                <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/15 bg-[#090F1E]/80 p-7 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: project.accent, color: '#101729' }}>
                      <Layers3 size={20} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-slate-400">{project.number} / 05</span>
                  </div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">{categoryNames[project.category][locale]}</p>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
                  <div className="mt-7 h-1 w-16 rounded-full" style={{ backgroundColor: project.accent }} />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#B4A9FF]">{categoryNames[project.category][locale]}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                    {project.stage === 'Released'
                      ? (locale === 'en' ? 'Released' : 'Objavljeno')
                      : (locale === 'en' ? 'In development' : 'U razvoju')}
                  </span>
                </div>
                <p className="mb-5 min-h-14 text-sm leading-relaxed text-slate-300 md:text-base">{project.summary[locale]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8">
          <p className="max-w-xl text-sm text-slate-400">
            {locale === 'en'
              ? 'Project previews will be upgraded with approved product screenshots and case studies.'
              : 'Kartice ćemo dopuniti odobrenim screenshotovima i detaljnim prikazima projekata.'}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-[#C3BAFF] hover:text-white">
            {locale === 'en' ? 'Discuss your project' : 'Razgovarajmo o projektu'} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
