import { ArrowLeft, ArrowUpRight, BellRing, Camera, FileCheck2, LockKeyhole, ScanLine, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const capabilities = [
  {
    icon: Camera,
    en: 'Capture and save receipts',
    sr: 'Fotografisanje i čuvanje računa',
    bodyEn: 'Keep digital copies of receipts organized in one accessible place.',
    bodySr: 'Digitalne kopije računa na jednom mestu, dostupne kada zatrebaju.',
  },
  {
    icon: ScanLine,
    en: 'OCR-assisted entry',
    sr: 'OCR prepoznavanje podataka',
    bodyEn: 'Recognize receipt text to help complete the record instead of entering everything manually.',
    bodySr: 'Prepoznavanje teksta sa računa koje olakšava unos podataka bez ručnog prepisivanja svega.',
  },
  {
    icon: FileCheck2,
    en: 'Warranty tracking',
    sr: 'Praćenje garancija',
    bodyEn: 'Connect products, purchase information and warranty expiry dates.',
    bodySr: 'Povezivanje proizvoda, podataka o kupovini i datuma isteka garancije.',
  },
  {
    icon: BellRing,
    en: 'Expiring warranty reminders',
    sr: 'Podsetnici za istek garancije',
    bodyEn: 'Surface upcoming warranty deadlines through a dedicated reminders experience.',
    bodySr: 'Pregled nadolazećih rokova isteka kroz posebnu sekciju za podsetnike.',
  },
];

export default function GarancijeCaseStudy() {
  const { language } = useLanguage();
  const en = language === 'en';

  return (
    <section id="case-study-garancije" aria-labelledby="garancije-title" className="relative overflow-hidden bg-[#0B1D2E] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-36 top-10 h-[550px] w-[550px] rounded-full bg-[#22D5CB]/10 blur-[125px]" aria-hidden="true" />
      <div className="container relative">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-7">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#90E7DC]"><span className="h-2 w-2 rounded-full bg-[#78F0D4]" /> {en ? 'Product case study / 03' : 'Studija proizvoda / 03'}</span>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[#B3CCD8] hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> {en ? 'Back to selected work' : 'Nazad na projekte'}</a>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#9ABCCE]">{en ? 'Mobile product · Receipts and warranties' : 'Mobilni proizvod · Računi i garancije'}</p>
            <h2 id="garancije-title" className="text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1.07] tracking-[-.065em]">Garancije<span className="text-[#78E6D3]">.rs</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.85] text-[#C1D5E2] sm:text-xl">
              {en ? 'A mobile-first place for receipts, purchase records and warranty dates — with OCR-assisted capture.' : 'Mobilna aplikacija za račune, evidenciju kupovina i praćenje garancija — uz pomoć OCR prepoznavanja.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-7">
            <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#9ABCCE]">{en ? 'Platform' : 'Platforma'}</p><p className="mt-3 text-lg font-semibold">React Native / Expo</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#9ABCCE]">{en ? 'Backend' : 'Backend'}</p><p className="mt-3 text-lg font-semibold">Supabase</p></div>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-[#6EE2D3]/20 bg-[#E8FAFA] p-4 sm:p-8 lg:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#24C9CD]/15 blur-3xl" aria-hidden="true" />
          <img
            src="/projects/garancije-feature.png"
            alt={en ? 'Original Garancije.rs promotional artwork: receipt mascot, product name and key features' : 'Originalni promotivni vizual Garancije.rs: maskota računa, naziv proizvoda i ključne funkcije'}
            loading="lazy"
            decoding="async"
            className="relative mx-auto block w-full max-w-[1050px] rounded-2xl"
          />
          <div className="relative mt-5 text-center text-xs font-medium text-[#3D6573]">
            {en ? 'Original product artwork — not an application screenshot' : 'Originalni promotivni vizual proizvoda — nije screenshot aplikacije'}
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8EE4D7]">{en ? 'The challenge' : 'Izazov'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'Receipts get lost. Warranty dates get forgotten.' : 'Računi se gube. Garancije se zaboravljaju.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#B6CDD9]">{en
              ? 'Paper receipts fade, purchase documents end up scattered across drawers and inboxes, and finding proof of purchase becomes difficult exactly when it matters.'
              : 'Papirni računi blede, dokumentacija se rasipa po fiokama i inboxu, a dokaz o kupovini postaje teško pronaći baš kada je najpotrebniji.'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8EE4D7]">{en ? 'The solution' : 'Rešenje'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'A digital home for every purchase.' : 'Digitalno mesto za svaku kupovinu.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#B6CDD9]">{en
              ? 'Garancije.rs brings a digital receipt wallet, product records, OCR-assisted data capture and warranty tracking into a single mobile experience.'
              : 'Garancije.rs objedinjuje digitalni novčanik za račune, evidenciju proizvoda, OCR pomoć pri unosu i praćenje trajanja garancije.'}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3"><Smartphone size={21} className="text-[#91E5DC]" aria-hidden="true" /><h3 className="text-xl font-semibold">{en ? 'Product capabilities' : 'Funkcionalnosti proizvoda'}</h3></div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(({icon: Icon,...item}) => (
              <article key={item.en} className="rounded-[24px] border border-white/10 bg-white/[.035] p-7">
                <Icon size={24} strokeWidth={1.6} className="mb-6 text-[#91E5DC]" aria-hidden="true"/>
                <h4 className="text-lg font-semibold">{en ? item.en : item.sr}</h4>
                <p className="mt-2 text-sm leading-7 text-[#B0C9D5]">{en ? item.bodyEn : item.bodySr}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
          <span className="text-xs font-semibold uppercase tracking-[.17em] text-[#9DBECB]">{en ? 'Built with' : 'Tehnologije'}</span>
          {['React Native', 'Expo', 'TypeScript', 'Supabase', 'OCR'].map(tag => <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#C1D7E1]">{tag}</span>)}
          <span className="ml-auto flex items-center gap-2 text-xs text-[#9DBECB]"><LockKeyhole size={14} aria-hidden="true" /> {en ? 'Demo data used for public previews' : 'Demo podaci za javne prikaze'}</span>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-7 rounded-[28px] border border-[#79E5D6]/20 bg-[#123B45]/70 p-8 sm:flex-row sm:items-center sm:p-10">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.17em] text-[#91E5DC]">{en ? 'Have a mobile product in mind?' : 'Razmišljaš o mobilnoj aplikaciji?'}</p><h3 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">{en ? 'Let’s turn the problem into a product.' : 'Pretvorimo problem u konkretan proizvod.'}</h3></div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#8AE8DB] px-6 py-3.5 text-sm font-bold text-[#0F2F39] transition-colors hover:bg-[#B1FFF1]">{en ? 'Discuss your app' : 'Razgovarajmo o aplikaciji'}<ArrowUpRight size={16} aria-hidden="true"/></a>
        </div>
      </div>
    </section>
  );
}
