import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label={language === 'en' ? 'Choose language' : 'Izaberi jezik'} className="inline-flex items-center gap-0.5 rounded-full border border-white/15 bg-white/[0.045] p-1">
      {(['sr', 'en'] as const).map(locale => (
        <button
          key={locale}
          type="button"
          aria-pressed={language === locale}
          lang={locale}
          onClick={() => setLanguage(locale)}
          className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 ${language === locale ? 'bg-white text-[#11172B]' : 'text-slate-300 hover:text-white'}`}
        >{locale}</button>
      ))}
    </div>
  );
}
