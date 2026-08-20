import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';
import { useTranslation } from 'react-i18next';

export default function Esvard() {
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
          src="https://gbe88.uk/2/EB/p_a.webp" 
          alt={t('esvard.title')} 
          className="w-full aspect-[21/9] object-cover rounded-sm"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-esvard-main/70 uppercase mb-4 block">{t('esvard.tag')}</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-esvard-main mb-6">{t('esvard.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-24 shrink-0">{t('esvard.facts.climate')}</span> {t('esvard.facts.climateDesc')}</li>
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-24 shrink-0">{t('esvard.facts.location')}</span> {t('esvard.facts.locationDesc')}</li>
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-24 shrink-0">{t('esvard.facts.foundation')}</span> {t('esvard.facts.foundationDesc')}</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            {t('esvard.desc')}
          </p>
        </div>
      </header>

      {/* Locations */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          {t('esvard.locationsTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/EB/BG_8.webp" alt={t('esvard.locations.0.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('esvard.locations.0.title')}</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">{t('esvard.locations.0.subtitle')}</span>
            <p className="text-sm text-ink-light">{t('esvard.locations.0.desc')}</p>
          </div>
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/2/EB/pa_5.webp" alt={t('esvard.locations.1.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('esvard.locations.1.title')}</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">{t('esvard.locations.1.subtitle')}</span>
            <p className="text-sm text-ink-light">{t('esvard.locations.1.desc')}</p>
          </div>
        </div>
      </section>

      {/* Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          {t('esvard.familyTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="mb-6 w-full">
          <img 
            src="https://gbe88.uk/2/EB/pa_4.webp" 
            alt={t('esvard.familyTitle')} 
            className="w-full aspect-[21/9] object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="bg-esvard-main/5 p-6 md:p-8 border border-esvard-main/10 text-ink-light mb-8">
          <p className="mb-2">
            <strong className="text-esvard-main">{t('common.divineLineage')}:</strong> {t('esvard.familyLineage')}
          </p>
          <p>
            {t('esvard.familyDesc')}
          </p>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name={t('esvard.characters.0.name')}
            fullName={t('esvard.characters.0.fullName')}
            age="39"
            gender={t('common.female')}
            height="176cm"
            mbti="ESTJ"
            birthday="08.18"
            imageUrl="https://gbe88.uk/2/EB/A.webp"
            title={t('esvard.characters.0.title')}
            keyword={t('esvard.characters.0.keyword')}
            ability={t('esvard.characters.0.ability')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('esvard.characters.0.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            themeColor="text-esvard-main"
          />
          <CharacterCard 
            name={t('esvard.characters.1.name')}
            fullName={t('esvard.characters.1.fullName')}
            age="19"
            gender={t('common.male')}
            height="189cm"
            mbti="ESTJ"
            birthday="11.11"
            imageUrl="https://gbe88.uk/2/EB/H.webp"
            title={t('esvard.characters.1.title')}
            keyword={t('esvard.characters.1.keyword')}
            ability={t('esvard.characters.1.ability')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('esvard.characters.1.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </ul>
            }
            themeColor="text-esvard-main"
          />
          <CharacterCard 
            name={t('esvard.characters.2.name')}
            fullName={t('esvard.characters.2.fullName')}
            age="13"
            gender={t('common.male')}
            height="164cm"
            title={t('esvard.characters.2.title')}
            keyword={t('esvard.characters.2.keyword')}
            ability={t('esvard.characters.2.ability')}
            birthday="03.21"
            imageUrl="https://gbe88.uk/2/EB/E.webp"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('esvard.characters.2.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </ul>
            }
            themeColor="text-esvard-main"
          />
        </div>
      </section>

      {/* Specialties & Monsters */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          {t('esvard.specialtiesTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="space-y-2">
          <ExpandableInfo 
            title={t('esvard.specialties.0.title')}
            subtitle={t('esvard.specialties.0.subtitle')}
            summary={t('esvard.specialties.0.summary')}
            details={t('esvard.specialties.0.details')}
            imageUrl="https://gbe88.uk/2/EB/pa_6.webp"
            themeColor="text-esvard-main"
          />
          <ExpandableInfo 
            title={t('esvard.specialties.1.title')}
            subtitle={t('esvard.specialties.1.subtitle')}
            summary={t('esvard.specialties.1.summary')}
            details={
              <ul className="list-disc list-inside space-y-1">
                {(t('esvard.specialties.1.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            imageUrl="https://gbe88.uk/2/EB/m1.webp"
            imageAspectRatio="1:1"
            themeColor="text-esvard-main"
          />
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
