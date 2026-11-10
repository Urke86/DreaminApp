import { ArrowUpRight, Bot, MessageCircle2, Sparkles, Workflow } from 'lucide-react';

export default function AiProjectShowcase({ locale }: { locale: 'en' | 'sr' }) {
  const en = locale === 'en';
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article id="project-jobpilot" className="group overflow-hidden rounded-[28px] border border-[#A8BFFF]/20 bg-[#16213D]">
        <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_70%_30%,#263F7B_0%,#0C1530_65%)] px-5 pb-5 pt-10 sm:min-h-[350px] sm:px-8">
          <div className="absolute -right-12 -top-10 h-52 w-52 rounded-full bg-[#688AFF]/20 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[580px] rotate-[-3deg] overflow-hidden rounded-xl border border-[#B5C8FF]/25 bg-[#0A1225] shadow-[0_28px_65px_rgba(0,0,0,.55)] transition-transform duration-500 group-hover:rotate-[-1deg]">
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
              <span className="text-[10px] font-semibold tracking-[.1em] text-[#C4D2FF]">JOBPILOT AI</span>
              <div className="flex gap-1" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-white/20"/><span className="h-1.5 w-1.5 rounded-full bg-white/20"/></div>
            </div>
            <img src="/projects/jobpilot-fit-analysis.png" className="w-full" loading="lazy" decoding="async" alt={en ? 'Actual JobPilot AI job-fit analysis product screenshot' : 'Stvarni ekran Jobpilot AI procene usklađenosti oglasa'} />
          </div>
          <span className="relative mt-5 w-fit rounded-full border border-white/15 bg-[#0B1630]/70 px-3 py-1.5 text-[10px] font-medium text-[#C7D3FF]">{en ? 'Real product screenshot' : 'Stvarni ekran aplikacije'}</span>
        </div>
        <div className="p-7 sm:p-9">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[.15em] text-[#ABBFFF]">{en ? 'AI workflow platform' : 'Platforma za AI procese'}</span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{en ? 'Product project' : 'Razvojni projekat'}</span>
          </div>
          <h3 className="text-3xl font-semibold tracking-[-.045em] text-white">JobPilot <span className="text-[#A6C1FF]">AI</span></h3>
          <p className="mt-4 text-sm leading-7 text-[#C1CBE2] sm:text-base">{en ? 'AI-assisted job research, structured fit analysis and application preparation — connected in one product workspace.' : 'AI analiza poslovnih prilika, procena usklađenosti i priprema prijava — u jednom povezanom radnom okruženju.'}</p>
          <div className="mt-6 flex flex-wrap gap-2">{['React', 'Supabase', 'OpenAI API', 'n8n'].map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#AEBED8]">{tag}</span>)}</div>
          <a href="https://github.com/Urke86/Jobpilot-ai" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#C0D0FF] transition-colors hover:text-white">
            {en ? 'Explore the project' : 'Istraži projekat'} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>

      <article id="project-compa" className="group overflow-hidden rounded-[28px] border border-[#E3BBA6]/20 bg-[#2D2432]">
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_55%_40%,#57445E_0%,#2C283C_65%,#22253B_100%)] px-5 py-9 sm:min-h-[350px] sm:px-8">
          <div className="absolute -right-20 top-5 h-64 w-64 rounded-full bg-[#F6BAA4]/10 blur-3xl" aria-hidden="true" />
          <div className="relative w-full max-w-[360px] rotate-[3deg] rounded-[27px] border border-white/20 bg-[#191D2E] p-4 shadow-[0_30px_75px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:rotate-[1deg] sm:p-5">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5BFA9] to-[#C4A6F6]"><Sparkles size={21} color="#202033" aria-hidden="true"/></div>
              <div><p className="text-base font-semibold text-white">compa<span className="text-[#E8B6C7]">.</span></p><p className="text-[10px] text-[#AFACBE]">{en ? 'AI assistant concept' : 'Koncept AI asistenta'}</p></div>
              <span className="ml-auto h-2 w-2 rounded-full bg-[#A7E1CC]" />
            </div>
            <div className="mb-4 ml-auto max-w-[85%] rounded-[18px] rounded-br-[5px] bg-[#464259] p-3 text-[11px] leading-5 text-[#EEE9F3]">{en ? 'Help me organize my next steps.' : 'Pomozi mi da organizujem sledeće korake.'}</div>
            <div className="mr-8 max-w-[88%] rounded-[18px] rounded-bl-[5px] border border-[#F3BEA8]/15 bg-[#282B40] p-3">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold text-[#F1C9B7]"><Bot size={13} aria-hidden="true"/> Compa</div>
              <p className="text-[11px] leading-5 text-[#D8D5E4]">{en ? 'Start with your priorities. I can help turn them into a clear plan.' : 'Krenimo od prioriteta. Pretvorićemo ih u jasan plan.'}</p>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-[#1E2234] px-4 py-3 text-[10px] text-[#9294AC]"><span>{en ? 'Write a message...' : 'Napiši poruku...'}</span><MessageCircle2 size={14} aria-hidden="true"/></div>
          </div>
          <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-[#27243A]/85 px-3 py-1.5 text-[10px] font-medium text-[#E8C9D8]">{en ? 'Illustrative concept · not app screenshot' : 'Ilustrativni koncept · nije screenshot'}</span>
        </div>
        <div className="p-7 sm:p-9">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[.15em] text-[#F0C1B3]">{en ? 'AI product design' : 'Dizajn AI proizvoda'}</span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{en ? 'Concept' : 'Koncept'}</span>
          </div>
          <h3 className="text-3xl font-semibold tracking-[-.045em] text-white">Compa<span className="text-[#F1C2C8]">.</span></h3>
          <p className="mt-4 text-sm leading-7 text-[#D3C5D4] sm:text-base">{en ? 'An exploration of calm, human-centered AI assistance, clear conversation flows and refined mobile interaction.' : 'Istraživanje intuitivnog AI asistenta, kvalitetnog konverzacionog iskustva i promišljenog dizajna mobilnog interfejsa.'}</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Product UX', 'AI', 'Mobile Design'].map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#CDBED0]">{tag}</span>)}</div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F1C9D3] transition-colors hover:text-white">
            {en ? 'Discuss an AI product' : 'Razgovarajmo o AI projektu'} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
}
