import { ArrowLeft, ArrowUpRight, CalendarDays, MapPinned, Smartphone, TicketCheck, BellRing, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const appUrl = 'https://play.google.com/store/apps/details?id=com.eighteenholes.golf';
const websiteUrl = 'https://18holes.golf';

export default function CaseStudy18Holes() {
  const { language } = useLanguage();
  const en = language === 'en';

  const capabilities = [
    { icon: MapPinned, en: 'Course discovery', sr: 'Pretraga golf terena', detailEn: 'Explore course information and discover where to play.', detailSr: 'Pregled terena i informacija potrebnih za izbor.' },
    { icon: CalendarDays, en: 'Tee-time bookings', sr: 'Rezervacija termina', detailEn: 'A clear path from choosing a time to managing a booking.', detailSr: 'Jednostavan tok od izbora termina do upravljanja rezervacijom.' },
    { icon: TicketCheck, en: 'Digital tickets', sr: 'Digitalne karte', detailEn: 'Booking confirmations and QR-based check-in.', detailSr: 'Potvrde rezervacija i QR prijava na terenu.' },
    { icon: BellRing, en: 'Updates and yardage books', sr: 'Obaveštenja i yardage book', detailEn: 'Booking updates alongside digital course yardage resources.', detailSr: 'Obaveštenja o rezervacijama i digitalni materijali za teren.' },
  ];

  return (
    <section id="case-study-18holes" aria-labelledby="golf-case-title" className="relative overflow-hidden bg-[#0B1915] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-44 top-0 h-[600px] w-[600px] rounded-full bg-[#4CA47A]/10 blur-[110px]" aria-hidden="true" />
      <div className="container relative">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-7">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#9CD4B6]"><span className="h-2 w-2 rounded-full bg-[#B2EDCC]" /> {en ? 'Case study / 01' : 'Studija projekta / 01'}</span>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[#BCD9CB] transition-colors hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> {en ? 'Back to selected work' : 'Nazad na projekte'}</a>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#91BDA8]">{en ? 'Client project · Digital golf experience' : 'Klijentski projekat · Digitalno golf iskustvo'}</p>
            <h2 id="golf-case-title" className="max-w-4xl text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[1.03] tracking-[-.065em]">18Holes<span className="text-[#9CE1BC]">.</span>Golf</h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-[#BDD7C9] sm:text-xl">
              {en ? 'Bringing course discovery, tee-time bookings and the on-course experience into one connected product.' : 'Jedno povezano digitalno iskustvo za pronalaženje terena, rezervaciju termina i boravak na golf terenu.'}
            </p>
          </div>
          <div className="lg:pb-2">
            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
              <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#86AE9B]">{en ? 'Platforms' : 'Platforme'}</p><p className="mt-3 text-lg font-semibold text-white">Web / iOS / Android</p></div>
              <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#86AE9B]">{en ? 'Product type' : 'Tip proizvoda'}</p><p className="mt-3 text-lg font-semibold text-white">{en ? 'Booking & Golf' : 'Rezervacije i golf'}</p></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#A5ECCB] px-5 py-3 text-sm font-bold text-[#10291F] transition-colors hover:bg-[#C9F8DE]">{en ? 'Visit website' : 'Poseti sajt'} <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href={appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Google Play <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="relative flex min-h-[490px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_center,#2A6749_0%,#12382B_65%,#0E2B23_100%)] p-8 sm:min-h-[650px]">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage:'linear-gradient(#B5F2D5 1px,transparent 1px),linear-gradient(90deg,#B5F2D5 1px,transparent 1px)',backgroundSize:'52px 52px'}} aria-hidden="true" />
            <div className="relative h-[405px] w-[188px] overflow-hidden rounded-[29px] border-[6px] border-[#0A1712] bg-black shadow-[0_30px_70px_rgba(0,0,0,.6)] sm:h-[535px] sm:w-[248px] sm:rounded-[38px] sm:border-[8px]">
              <img src="/projects/18holes-booking.png" alt={en ? 'Actual 18Holes Golf mobile application tee-time booking screenshot' : 'Stvarni screenshot rezervacije termina u mobilnoj aplikaciji 18Holes Golf'} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
            </div>
            <span className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-[#102D22]/80 px-4 py-2 text-xs font-medium text-[#C8F1D9]">{en ? '01 / Book a tee time' : '01 / Rezervacija termina'}</span>
          </div>
          <div className="relative flex min-h-[490px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_center,#253D33_0%,#132721_65%,#0E201B_100%)] p-8 sm:min-h-[650px]">
            <div className="relative h-[405px] w-[188px] overflow-hidden rounded-[29px] border-[6px] border-[#0A1712] bg-black shadow-[0_30px_70px_rgba(0,0,0,.6)] sm:h-[535px] sm:w-[248px] sm:rounded-[38px] sm:border-[8px]">
              <img src="/projects/18holes-notifications.png" alt={en ? 'Actual 18Holes Golf mobile application notifications screenshot' : 'Stvarni screenshot obaveštenja u mobilnoj aplikaciji 18Holes Golf'} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
            </div>
            <span className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-[#102D22]/80 px-4 py-2 text-xs font-medium text-[#C8F1D9]">{en ? '02 / Booking updates' : '02 / Obaveštenja'}</span>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#8FAE9D]">{en ? 'Authentic screenshots from the published mobile application.' : 'Originalni screenshotovi objavljene mobilne aplikacije.'}</p>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9BDAB9]">{en ? 'The challenge' : 'Izazov'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'One experience, many moving parts.' : 'Jedno iskustvo, mnogo povezanih koraka.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#B8D0C1]">
              {en
                ? 'Golfers need dependable information before a round, an intuitive way to select tee times, and access to confirmations and course resources when they arrive. Fragmented steps create unnecessary friction.'
                : 'Igračima golfa potrebne su pouzdane informacije o terenima, jednostavan izbor termina i brz pristup potvrdama i resursima za igru. Razdvojeni koraci nepotrebno otežavaju iskustvo.'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9BDAB9]">{en ? 'The solution' : 'Rešenje'}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{en ? 'Connect the entire journey.' : 'Sve na jednom mestu.'}</h3>
            <p className="mt-6 text-base leading-8 text-[#B8D0C1]">
              {en
                ? 'The web and mobile experience brings course exploration, tee-time reservations, booking notifications, digital tickets and yardage-book access into a coherent product flow.'
                : 'Web i mobilno rešenje povezuje pregled terena, rezervaciju termina, obaveštenja, digitalne karte i pristup yardage book materijalima u jedinstven tok.'}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3"><Smartphone size={20} className="text-[#A7EAC8]" aria-hidden="true" /><h3 className="text-xl font-semibold">{en ? 'Key product capabilities' : 'Ključne funkcionalnosti'}</h3></div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(({icon:Icon,...capability}) => (
              <div key={capability.en} className="rounded-[22px] border border-white/10 bg-white/[.035] p-6">
                <Icon size={22} className="mb-6 text-[#A8EDC8]" strokeWidth={1.7} aria-hidden="true" />
                <h4 className="text-lg font-semibold text-white">{en ? capability.en : capability.sr}</h4>
                <p className="mt-2 text-sm leading-7 text-[#A9C4B4]">{en ? capability.detailEn : capability.detailSr}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative mt-16 overflow-hidden rounded-[28px] border border-[#A7EAC8]/25 bg-gradient-to-br from-[#193B2E] via-[#122E25] to-[#10241F] p-8 sm:p-11">
          <div className="pointer-events-none absolute -right-10 -top-24 text-[230px] font-serif leading-none text-[#B3F0CD]/[.055]" aria-hidden="true">“</div>
          <div className="relative max-w-3xl">
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[.2em] text-[#A6E8C4]">
              {en ? 'In the client’s own words' : 'Reči klijenta'}
            </p>
            <blockquote className="text-2xl font-medium leading-[1.5] tracking-[-.025em] text-white sm:text-3xl md:text-4xl">
              “It was a pleasure to work with you, and the delivery is great.”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6">
              <div>
                <p className="text-sm font-semibold text-white">18Holes.Golf {en ? 'client' : 'klijent'}</p>
                <p className="mt-1 text-xs text-[#A2C6B1]">{en ? 'Direct feedback shared via Upwork · September 2026' : 'Povratna informacija u Upwork poruci · septembar 2026'}</p>
              </div>
              <span className="rounded-full border border-[#A7EAC8]/20 px-3 py-1.5 text-[11px] font-medium text-[#BDE9CF]">
                {en ? 'Verified client message' : 'Proverena poruka klijenta'}
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="mt-16 flex flex-col items-start justify-between gap-7 rounded-[28px] border border-[#A7EAC8]/20 bg-[#133228]/75 p-8 sm:flex-row sm:items-center sm:p-10">
          <div><p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#A7EAC8]">{en ? 'Your next product' : 'Tvoj sledeći proizvod'}</p><h3 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">{en ? 'Have something ambitious in mind?' : 'Imaš ideju za sledeći projekat?'}</h3></div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#A5ECCB] px-6 py-3.5 text-sm font-bold text-[#10291F] hover:bg-[#C9F8DE]">{en ? 'Let’s talk about it' : 'Hajde da razgovaramo'} <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
