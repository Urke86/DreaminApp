
import { CalendarDays, Check, Clock3, LayoutDashboard } from 'lucide-react';

const dates = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

export default function EasyBookVisual({ locale, compact = false }: { locale: 'sr' | 'en'; compact?: boolean }) {
  const en = locale === 'en';

  return (
    <div className="relative isolate flex h-full min-h-[390px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_55%_40%,#3A4789_0%,#1B2853_50%,#131A38_100%)] p-5 sm:min-h-[490px] sm:p-8">
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-violet-300/15 blur-3xl" aria-hidden="true" />
      <div className="relative w-full max-w-[560px] -rotate-[2deg] overflow-hidden rounded-[20px] border border-white/20 bg-[#F8FAFF] shadow-[0_34px_75px_rgba(5,10,35,.55)]">
        <div className="flex items-center justify-between border-b border-[#E6EAF4] bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5E63CF] text-white"><CalendarDays size={15} aria-hidden="true" /></span>
            <span className="text-xs font-extrabold tracking-[-.035em] text-[#202A51]">easybook</span>
          </div>
          <div className="flex gap-2" aria-hidden="true"><span className="h-1.5 w-6 rounded-full bg-[#D2D9EA]" /><span className="h-1.5 w-3 rounded-full bg-[#E9ECF5]" /></div>
        </div>

        <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[90px_1fr]">
          <div className="flex flex-col items-center gap-4 border-r border-[#E8EBF3] bg-[#F1F4FC] py-6" aria-hidden="true">
            <LayoutDashboard size={17} className="text-[#6D74A8]" />
            <span className="rounded-lg bg-[#DCE1FD] p-2"><CalendarDays size={17} className="text-[#5E63CF]" /></span>
            <Clock3 size={17} className="text-[#9AA5C2]" />
          </div>
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#868FB0]">{en ? 'Appointment scheduling' : 'Zakazivanje termina'}</p>
                <h4 className="mt-1 text-base font-bold tracking-tight text-[#25315A] sm:text-lg">{en ? 'Choose a date' : 'Izaberite datum'}</h4>
              </div>
              <span className="rounded-full bg-[#E9EBFF] px-2 py-1 text-[9px] font-bold text-[#5D63C7]">{en ? 'Step 2 of 3' : 'Korak 2 od 3'}</span>
            </div>
            <div className="rounded-xl border border-[#E5E9F4] bg-white p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-[#303C66]">{en ? 'November 2026' : 'Novembar 2026'}</span><span className="text-xs text-[#7782A5]">‹ &nbsp; ›</span></div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['M','T','W','T','F','S','S'].map((day,i) => <span key={i} className="py-1 text-[9px] font-semibold text-[#9BA5C0]">{day}</span>)}
                {dates.map(day => <span key={day} className={day === 12 ? 'flex aspect-square items-center justify-center rounded-lg bg-[#6669D8] text-[10px] font-bold text-white shadow-md' : 'flex aspect-square items-center justify-center text-[10px] font-medium text-[#596583]'}>{day}</span>)}
              </div>
            </div>
            {!compact && <div className="mt-4">
              <p className="mb-2 text-[10px] font-bold text-[#3F4C76]">{en ? 'Available times' : 'Slobodni termini'}</p>
              <div className="flex flex-wrap gap-2">{['09:00','10:00','11:00','14:00'].map(time => <span key={time} className={time === '10:00' ? 'rounded-lg bg-[#6068D8] px-3 py-2 text-[10px] font-bold text-white' : 'rounded-lg border border-[#D7DDF0] px-3 py-2 text-[10px] font-bold text-[#5B6591]'}>{time}</span>)}</div>
            </div>}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#171C40]/80 px-3 py-2 text-[10px] font-semibold text-[#E7E8FF] backdrop-blur-md sm:bottom-8 sm:left-8">
        <Check size={13} className="text-[#B4F2DB]" aria-hidden="true" />
        {en ? 'Illustrative UI · not a screenshot' : 'Ilustracija interfejsa · nije screenshot'}
      </div>
    </div>
  );
}
