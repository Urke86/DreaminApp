import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || '').trim();
const UPWORK_PROFILE_URL = 'https://www.upwork.com/freelancers/~01f0ffdf1f5267bc52';
import { useLanguage } from '../context/LanguageContext';

type ContactValues = { name: string; email: string; subject: string; message: string };
const emptyForm: ContactValues = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const { language } = useLanguage();
  const en = language === 'en';
  const [values, setValues] = useState<ContactValues>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    try {
      const payload = new URLSearchParams({ 'form-name': 'dreaminapp-contact', ...values, 'bot-field': '' });
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (!response.ok) throw new Error('Delivery unsuccessful');
      setValues(emptyForm);
      setStatus('success');
    } catch {
      setError(en ? 'Your message could not be sent. Please contact us through Upwork instead.' : 'Poruka nije poslata. Možeš nas kontaktirati putem Upworka.');
      setStatus('error');
    }
  }

  const inputClass = 'w-full rounded-xl border border-white/15 bg-white/[0.045] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[#A99EFF] focus:ring-2 focus:ring-[#A99EFF]/15';
  const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[.12em] text-[#AFC0D6]';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#111B2D] py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-[#7463E6]/10 blur-[110px]" aria-hidden="true" />
      <div className="container relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="studio-eyebrow">{en ? 'Get in touch' : 'Kontakt'}</p>
          <h2 className="studio-section-title mt-5">{en ? <>Your next idea <span className="studio-gradient-text">starts here.</span></> : <>Tvoja sledeća ideja <span className="studio-gradient-text">počinje ovde.</span></>}</h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#B5C1D5]">
            {en ? 'Have a product idea, a challenge or a workflow worth improving? Tell us what you have in mind.' : 'Imaš ideju za proizvod, izazov ili proces koji treba unaprediti? Napiši nam šta želiš da napraviš.'}
          </p>
          <div className="mt-12 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"><Mail size={20} className="text-[#C3B8FF]" aria-hidden="true" /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9CABBE]">{CONTACT_EMAIL ? 'Email' : (en ? 'Prefer a direct conversation?' : 'Želiš direktan kontakt?')}</p>
              {CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-flex items-center gap-1 break-all text-base font-medium text-white transition-colors hover:text-[#C2B8FF]">{CONTACT_EMAIL} <ArrowUpRight size={16} aria-hidden="true" /></a> : <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-base font-medium text-white transition-colors hover:text-[#C2B8FF]">Upwork <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </div>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-[#0C1425]/75 p-6 shadow-[0_30px_70px_rgba(0,0,0,.18)] sm:p-9">
          <div className="mb-8"><h3 className="text-xl font-semibold tracking-tight text-white">{en ? 'Tell us about your project' : 'Opiši svoj projekat'}</h3><p className="mt-2 text-sm text-[#94A5BF]">{en ? 'A few details are enough to get started.' : 'Za početak je dovoljno nekoliko informacija.'}</p></div>
          <form name="dreaminapp-contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="space-y-5">
            <input type="hidden" name="form-name" value="dreaminapp-contact" />
            <div className="hidden" aria-hidden="true"><label htmlFor="contact-bot-field">Leave this field empty</label><input id="contact-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className={labelClass} htmlFor="contact-name">{en ? 'Your name' : 'Ime i prezime'}</label><input id="contact-name" name="name" className={inputClass} autoComplete="name" required maxLength={120} value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} placeholder={en ? 'Your name' : 'Ime i prezime'} /></div>
              <div><label className={labelClass} htmlFor="contact-email">Email</label><input id="contact-email" name="email" className={inputClass} type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} placeholder="you@company.com" /></div>
            </div>
            <div><label className={labelClass} htmlFor="contact-subject">{en ? 'Project / subject' : 'Projekat / tema'}</label><input id="contact-subject" name="subject" className={inputClass} required maxLength={160} value={values.subject} onChange={e => setValues({ ...values, subject: e.target.value })} placeholder={en ? 'What are you building?' : 'Šta želiš da napraviš?'} /></div>
            <div><label className={labelClass} htmlFor="contact-message">{en ? 'Your message' : 'Poruka'}</label><textarea id="contact-message" name="message" rows={5} className={inputClass} required maxLength={5000} value={values.message} onChange={e => setValues({ ...values, message: e.target.value })} placeholder={en ? 'Tell us more about your idea…' : 'Napiši nam nešto više o svojoj ideji…'} /></div>
            {status === 'success' && <p role="status" className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"><CheckCircle2 size={18} aria-hidden="true" />{en ? 'Message sent. Thank you for reaching out!' : 'Poruka je poslata. Hvala na javljanju!'}</p>}
            {status === 'error' && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p>}
            <button type="submit" disabled={status === 'sending'} className="studio-button-primary w-full disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? (en ? 'Sending…' : 'Slanje…') : (en ? 'Send your message' : 'Pošalji poruku')}<Send size={16} aria-hidden="true" /></button>
            <p className="text-center text-xs text-[#7F91AE]">{en ? 'No obligation. Just a conversation about your idea.' : 'Bez obaveza. Samo razgovor o tvojoj ideji.'}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
