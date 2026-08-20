import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function InterRegionNav() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-4xl mx-auto mt-32 mb-12 px-4">
      <div className="flex flex-col items-center">
        <h3 className="text-sm tracking-widest text-ink-light uppercase mb-12 font-serif">{t('common.mapTitle')}</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 relative">
          {/* Decorative Line representing the "Tension / Opposition" (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-border-warm -z-10" />

          {/* Vaneris */}
          <div className="flex-1 flex justify-center w-full relative bg-paper py-2">
            <Link to="/vaneris" className="group text-center">
              <span className="block text-xs text-ink-light tracking-[0.2em] mb-2">{t('common.vanerisSubtitle')}</span>
              <span className="block font-serif text-xl text-vaneris-main group-hover:text-gold-accent transition-colors">VANERIS</span>
            </Link>
          </div>

          {/* Tension / Nordnia Middle */}
          <div className="flex-1 flex justify-center w-full relative bg-paper py-2 px-4 z-10 text-center">
            <Link to="/nordnia" className="group flex flex-col items-center">
              <span className="block text-[10px] text-border-warm tracking-[0.3em] mb-1">← {t('common.tension')} →</span>
              <span className="block font-serif text-2xl text-nordnia-main group-hover:text-ink transition-colors">NORDNIA</span>
              <span className="block text-[10px] text-ink-light tracking-[0.2em] mt-1">{t('common.nordniaSubtitle')}</span>
            </Link>
          </div>

          {/* Esvard */}
          <div className="flex-1 flex justify-center w-full relative bg-paper py-2">
            <Link to="/esvard" className="group text-center">
              <span className="block text-xs text-ink-light tracking-[0.2em] mb-2">{t('common.esvardSubtitle')}</span>
              <span className="block font-serif text-xl text-esvard-main group-hover:text-gold-accent transition-colors">ESVARD</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
