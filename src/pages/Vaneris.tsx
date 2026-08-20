import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';
import { useTranslation } from 'react-i18next';

export default function Vaneris() {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 w-full max-w-4xl mx-auto px-6 py-12"
    >
      {/* Banner Image */}
      <div className="mb-12 w-full">
        <img 
          src="https://gbe88.uk/2/EB/p_v.webp" 
          alt={t('vaneris.title')} 
          className="w-full aspect-[21/9] object-cover rounded-sm"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-vaneris-main/70 uppercase mb-4 block">{t('vaneris.tag')}</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-vaneris-main mb-6">{t('vaneris.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-24 shrink-0">{t('vaneris.facts.climate')}</span> {t('vaneris.facts.climateDesc')}</li>
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-24 shrink-0">{t('vaneris.facts.location')}</span> {t('vaneris.facts.locationDesc')}</li>
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-24 shrink-0">{t('vaneris.facts.foundation')}</span> {t('vaneris.facts.foundationDesc')}</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            {t('vaneris.desc')}
          </p>
        </div>
      </header>

      {/* Locations */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          {t('vaneris.locationsTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/EB/BG_7.webp" alt={t('vaneris.locations.0.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('vaneris.locations.0.title')}</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">{t('vaneris.locations.0.subtitle')}</span>
            <p className="text-sm text-ink-light">{t('vaneris.locations.0.desc')}</p>
          </div>
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/2/EB/pa_1.webp" alt={t('vaneris.locations.3.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('vaneris.locations.1.title')}</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">{t('vaneris.locations.1.subtitle')}</span>
            <p className="text-sm text-ink-light">{t('vaneris.locations.1.desc')}</p>
          </div>
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/2/EB/pa_2.webp" alt={t('vaneris.locations.2.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('vaneris.locations.2.title')}</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">{t('vaneris.locations.2.subtitle')}</span>
            <p className="text-sm text-ink-light">{t('vaneris.locations.2.desc')}</p>
          </div>
        </div>
      </section>

      {/* Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          {t('vaneris.familyTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="mb-6 w-full">
          <img 
            src="https://gbe88.uk/2/EB/pa_3.webp" 
            alt={t('vaneris.familyTitle')} 
            className="w-full aspect-[21/9] object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="bg-vaneris-main/5 p-6 md:p-8 border border-vaneris-main/10 text-ink-light mb-8">
          <p className="mb-2">
            <strong className="text-vaneris-main">{t('common.divineLineage')}:</strong> {t('vaneris.familyLineage')}
          </p>
          <p>
            {t('vaneris.familyDesc')}
          </p>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name={t('vaneris.characters.0.name')}
            fullName={t('vaneris.characters.0.fullName')}
            age="40"
            gender={t('common.male')}
            height="187cm"
            mbti="INTJ"
            birthday="01.04"
            imageUrl="https://gbe88.uk/2/EB/L.webp"
            title={t('vaneris.characters.0.title')}
            keyword={t('vaneris.characters.0.keyword')}
            ability={t('vaneris.characters.0.ability')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('vaneris.characters.0.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            themeColor="text-vaneris-main"
          />
          <CharacterCard 
            name={t('vaneris.characters.1.name')}
            fullName={t('vaneris.characters.1.fullName')}
            age="18"
            gender={t('common.male')}
            height="181cm"
            mbti="INTJ"
            birthday="09.08"
            imageUrl="https://gbe88.uk/2/EB/K.webp"
            title={t('vaneris.characters.1.title')}
            keyword={t('vaneris.characters.1.keyword')}
            ability={t('vaneris.characters.1.ability')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('vaneris.characters.1.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </ul>
            }
            themeColor="text-vaneris-main"
          />
          <CharacterCard 
            name={t('vaneris.characters.2.name')}
            fullName={t('vaneris.characters.2.fullName')}
            age="14"
            gender={t('common.female')}
            height="156cm"
            mbti="ESFJ"
            birthday="05.05"
            imageUrl="https://gbe88.uk/2/EB/I.webp"
            title={t('vaneris.characters.2.title')}
            keyword={t('vaneris.characters.2.keyword')}
            ability={t('vaneris.characters.2.ability')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('vaneris.characters.2.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </ul>
            }
            themeColor="text-vaneris-main"
          />
        </div>
      </section>

      {/* Specialties & Monsters */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          {t('vaneris.specialtiesTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="space-y-2">
          <ExpandableInfo 
            title={t('vaneris.specialties.0.title')}
            subtitle={t('vaneris.specialties.0.subtitle')}
            summary={t('vaneris.specialties.0.summary')}
            details={t('vaneris.specialties.0.details')}
            imageUrl="https://gbe88.uk/2/EB/pa_8.webp"
            themeColor="text-vaneris-main"
          />
          <ExpandableInfo 
            title={t('vaneris.specialties.1.title')}
            subtitle={t('vaneris.specialties.1.subtitle')}
            summary={t('vaneris.specialties.1.summary')}
            details={
              <ul className="list-disc list-inside space-y-1">
                {(t('vaneris.specialties.1.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            imageUrl="https://gbe88.uk/2/EB/m2.webp"
            imageAspectRatio="1:1"
            themeColor="text-vaneris-main"
          />
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
