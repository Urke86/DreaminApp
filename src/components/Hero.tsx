import { ArrowDownRight, ArrowUpRight, MoveUpRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();
  const en = language === 'en';
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#090e1b] text-white">
      <div className="studio-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[580px] w-[580px] rounded-full bg-violet-600/15 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" aria-hidden="true" />

      <div className="container relative z-10 grid items-center gap-8 pb-12 pt-28 sm:gap-12 sm:pb-20 sm:pt-36 lg:min-h-[850px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:pb-28 lg:pt-40">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-20 max-w-3xl"
        >
          <div className="mb-6 inline-flex sm:mb-9 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.055] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-slate-200 backdrop-blur-xl sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#8FF2D5] opacity-40 motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#8FF2D5]" />
            </span>
            {en ? 'Independent digital product studio' : 'Studio za razvoj digitalnih proizvoda'}
          </div>

          <h1 className="max-w-[880px] text-[clamp(2.8rem,6.7vw,7.3rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
            {en ? <>Ideas deserve <span className="studio-gradient-text">exceptional</span> execution.</> : <>Ideje zaslužuju <span className="studio-gradient-text">izuzetnu</span> realizaciju.</>}
          </h1>
          <p className="mt-5 max-w-[570px] sm:mt-8 text-base leading-[1.85] text-[#B6C2D8] sm:text-lg">
            {en
              ? 'We design and build thoughtful SaaS platforms, mobile apps and AI-powered experiences — from the first sketch to a real product.'
              : 'Dizajniramo i razvijamo SaaS platforme, mobilne aplikacije i AI rešenja — od prve ideje do stvarnog digitalnog proizvoda.'}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a className="studio-button-primary group" href="#portfolio">
              {en ? 'Explore selected work' : 'Pogledaj naše projekte'}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a className="studio-button-outline group" href="#contact">
              {en ? 'Start a conversation' : 'Razgovarajmo o ideji'}
              <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 sm:mt-16 sm:gap-x-9 sm:gap-y-5 sm:pt-7">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#B6A9FF]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#BBC5D8]">AI & Automation</span>
            </div>
            <div className="flex items-center gap-3">
              <MoveUpRight className="h-5 w-5 text-[#9FEDD8]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#BBC5D8]">SaaS & Web Apps</span>
            </div>
            <div className="flex items-center gap-3">
              <ArrowDownRight className="h-5 w-5 text-[#A4C5FF]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#BBC5D8]">Mobile Products</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[610px] lg:translate-x-9"
          aria-label={en ? 'Abstract product interface illustration' : 'Apstraktna ilustracija interfejsa digitalnih proizvoda'}
          role="img"
        >
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative rotate-[-5deg] rounded-[26px] border border-white/15 bg-[#111C30]/95 p-3 shadow-[0_45px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-4">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-[#0C1526] px-4 py-3">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#A6F0D8]" /><span className="text-[10px] font-semibold tracking-widest text-slate-300">DREAMINAPP / STUDIO</span></div>
              <div className="flex gap-1.5" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /></div>
            </div>
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
              <div className="flex min-h-[210px] flex-col justify-between overflow-hidden rounded-2xl border border-[#7466E8]/25 bg-gradient-to-br from-[#352A6F] via-[#181D42] to-[#11192C] p-5 sm:min-h-[335px] sm:p-7">
                <div><span className="text-[10px] font-medium uppercase tracking-[.22em] text-[#C8C0FF]">01 / Product experience</span><p className="mt-7 max-w-[210px] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Built for what comes next<span className="text-[#9DE6D5]">.</span></p></div>
                <div className="relative mt-6 h-24 rounded-xl border border-white/20 bg-white/5 p-3 shadow-2xl sm:h-32">
                  <div className="flex items-center gap-1.5"><span className="h-1.5 w-8 rounded-full bg-[#BBAFFF]" /><span className="h-1.5 w-12 rounded-full bg-white/20" /></div>
                  <div className="mt-4 flex items-end gap-1.5 sm:mt-6">{[35,65,48,83,64,95,76,100,73].map((height,i)=><span key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#7466FF] to-[#A8F0DB]" style={{height: `${height}%`,maxHeight:'60px'}} />)}</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-[#17243A] p-4 sm:p-5">
                  <span className="text-[10px] uppercase tracking-[.15em] text-slate-400">Digital craft</span>
                  <div className="relative mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-[28px] border border-[#BBAFFF]/30 bg-[#5546AD]/20 sm:h-28 sm:w-28">
                    <div className="absolute inset-3 rotate-45 rounded-[18px] border border-[#AF9DFF]/50" />
                    <div className="h-8 w-8 rotate-45 rounded-lg bg-gradient-to-br from-[#A9A0FF] to-[#80E8D2] shadow-[0_0_30px_rgba(151,136,255,.3)] sm:h-10 sm:w-10" />
                  </div>
                  <p className="text-sm font-semibold text-white sm:text-base">Design × Code</p>
                </div>
                <div className="rounded-2xl border border-[#8EE9D2]/20 bg-[#153831]/65 p-4 sm:p-5">
                  <span className="text-[10px] uppercase tracking-[.15em] text-[#A5E5D5]">Approach</span>
                  <p className="mt-3 text-lg font-semibold text-white sm:text-xl">Human first<span className="text-[#8EE9D2]">.</span></p>
                  <div className="mt-4 flex gap-1.5"><span className="h-1 flex-[3] rounded-full bg-[#99EAD8]" /><span className="h-1 flex-1 rounded-full bg-[#99EAD8]/25" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-5 hidden rotate-[6deg] rounded-2xl border border-white/15 bg-[#1C2D46]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
            <p className="text-[10px] uppercase tracking-widest text-[#A4C8E7]">{en ? 'Our process' : 'Naš pristup'}</p>
            <p className="mt-1 text-sm font-semibold text-white">Strategy <span className="text-[#A7ECDD]">→</span> Design <span className="text-[#A7ECDD]">→</span> Build</p>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 border-t border-white/10 bg-white/[0.025]">
        <div className="container flex flex-col justify-between gap-3 py-4 sm:gap-4 sm:py-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#91A0B7] sm:flex-row sm:items-center">
          <span>{en ? 'Purposeful digital experiences, built to last' : 'Digitalna iskustva sa jasnom svrhom'}</span>
          <a href="#services" className="inline-flex items-center gap-2 text-[#B5BDF3] transition-colors hover:text-white">{en ? 'Discover the studio' : 'Upoznaj studio'} <ArrowDownRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
