
import { ArrowLeft, ArrowUpRight, CalendarClock, CheckCircle2, ClipboardList, Languages, Layers3, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EasyBookVisual from './EasyBookVisual';

const features = [
  {
    icon: CalendarClock,
    en: 'Simple appointment flow',
    sr: 'Jednostavan proces zakazivanja',
    bodyEn: 'Choose a service, pick a date, find an available time and submit a reservation.',
    bodySr: 'Izbor usluge, datuma i slobodnog termina, uz završetak rezervacije kroz jasan tok.',
  },
  {
    icon: ClipboardList,
    en: 'Admin dashboard',
    sr: 'Administrativni panel',
    bodyEn: 'A dedicated view for managing appointments, services and customer information.',
    bodySr: 'Poseban panel za upravljanje terminima, uslugama i podacima o klijentima.',
  },
  {
    icon: ShieldCheck,
    en: 'Authenticated access',
    sr: 'Prijava i kontrola pristupa',
    bodyEn: 'User accounts and protected routes for customer and administrative experiences.',
    bodySr: 'Korisnički nalozi i zaštićene stranice za klijentski i administrativni deo.',
  },
  {
    icon: Languages,
    en: 'Bilingual experience',
    sr: 'Dvojezično iskustvo',
    bodyEn: 'Serbian and English interface support built into the product architecture.',
    bodySr: 'Podrška za srpski i engleski jezik ugrađena u arhitekturu aplikacije.',
  },
];

export default function EasyBookCaseStudy() {
  const { language } = useLanguage();
  const locale = language === 'en' ? 'en' : 'sr';
  const en = locale === 'en';

  return (
    <section id="case-study-easybook" aria-labelledby="easybook-case-title" className="relative overflow-hidden bg-[#11142D] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-40 top-12 h-[530px] w-[530px] rounded-full bg-[#7777EC]/15 blur-[115px]" aria-hidden="true" />
      <div className="container relative">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-7">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#C4BEFF]"><span className="h-2 w-2 rounded-full bg-[#A99DFF]" /> {en ? 'Product case study / 02' : 'Studija proizvoda / 02'}</span>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[#D0CCF0] transition-colors hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> {en ? 'Back to selected work' : 'Nazad na projekte'}</a>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.19em] text-[#A9A6F7]">{en ? 'SaaS product · Online scheduling' : 'SaaS proizvod · Online zakazivanje'}</p>
            <h2 id="easybook-case-title" className="text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[1.04] tracking-[-.065em]">Easy<span className="text-[#B6A9FF]">Book.</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.85] text-[#C7C9EC] sm:text-xl">
              {en
                ? 'A streamlined booking experience designed to make scheduling easier for customers and service businesses.'
                : 'Platforma koja pojednostavljuje zakazivanje termina za klijente i poslovanje uslužnih delatnosti.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-7">
            <div><p className="text-xs font-semibold uppercase tracking-[.17em] text-[#9DA0CA]">{en ? 'Product' : 'Proizvod'}</p><p className="mt-3 text-base font-semibold text-white sm:text-lg">SaaS / Web App</p></div>
            <div><p className="text-xs font-semibold uppercase tracking-[.17em] text-[#9DA0CA]">{en ? 'Technology' : 'Tehnologije'}</p><p className="mt-3 text-base font-semibold text-white sm:text-lg">React / Supabase</p></div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] border border-[#A99DFF]/20 bg-[#242951]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#1A1E43] px-6 py-5 sm:px-9">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#B7B4FF]/20 bg-[#8787EF]/15"><CalendarClock className="text-[#C8C2FF]" size={19} aria-hidden="true" /></div>
              <span className="text-sm font-semibold text-white">{en ? 'Booking journey' : 'Tok zakazivanja'}</span>
            </div>
            <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#C9C9F3]">{en ? 'UI design exploration' : 'Dizajnerska ilustracija'}</span>
          </div>
          <EasyBookVisual locale={locale} />
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#B3A9FF]">{en ? 'The problem' : 'Problem'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'Less friction, more clarity.' : 'Manje koraka, više jasnoće.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#BDC0E1]">
              {en
                ? 'Booking a service should not require phone calls, scattered messages or uncertainty about open time slots. Businesses also need a manageable view of appointments and customers.'
                : 'Zakazivanje usluge ne bi trebalo da zahteva telefonske pozive, nepovezane poruke i neizvesnost oko slobodnih termina. Poslovanju je potreban i jasan pregled rezervacija i klijenata.'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#B3A9FF]">{en ? 'The solution' : 'Rešenje'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'A connected booking flow.' : 'Povezan proces zakazivanja.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#BDC0E1]">
              {en
                ? 'EasyBook brings service selection, a calendar, available time slots and booking management together in a responsive web application, with a separate administrative experience.'
                : 'EasyBook povezuje izbor usluge, kalendar, dostupne termine i upravljanje rezervacijama u responzivnoj web aplikaciji, uz odvojen administrativni deo.'}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3"><Layers3 size={20} className="text-[#BDB4FF]" aria-hidden="true" /><h3 className="text-xl font-semibold">{en ? 'What the product includes' : 'Šta proizvod obuhvata'}</h3></div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map(({icon: Icon, ...feature}) => (
              <article key={feature.en} className="rounded-[22px] border border-white/10 bg-white/[.035] p-6">
                <Icon size={23} className="mb-6 text-[#BDB3FF]" strokeWidth={1.7} aria-hidden="true" />
                <h4 className="text-lg font-semibold text-white">{en ? feature.en : feature.sr}</h4>
                <p className="mt-2 text-sm leading-7 text-[#AEB4D6]">{en ? feature.bodyEn : feature.bodySr}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
          <span className="text-xs font-semibold uppercase tracking-[.17em] text-[#A7A5CF]">{en ? 'Built with' : 'Tehnologije'}</span>
          {['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'i18next'].map(tag => <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#C5C7E8]">{tag}</span>)}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-7 rounded-[28px] border border-[#AFA5FF]/20 bg-[#292858]/70 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.17em] text-[#C3B9FF]"><CheckCircle2 size={16} aria-hidden="true" />{en ? 'From product idea to execution' : 'Od ideje do realizacije'}</div>
            <h3 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">{en ? 'Thinking about a booking or SaaS product?' : 'Planiraš platformu za zakazivanje ili SaaS?'}</h3>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#B1A5FF] px-6 py-3.5 text-sm font-bold text-[#14122A] transition-colors hover:bg-[#CBC2FF]">{en ? 'Let’s discuss it' : 'Razgovarajmo o projektu'} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
