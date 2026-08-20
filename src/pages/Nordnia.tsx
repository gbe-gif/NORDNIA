import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';
import { useTranslation } from 'react-i18next';

export default function Nordnia() {
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
          src="https://gbe88.uk/2/EB/p_n.webp" 
          alt={t('nordnia.title')} 
          className="w-full aspect-[21/9] object-cover rounded-sm"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-nordnia-main/70 uppercase mb-4 block">{t('nordnia.tag')}</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-nordnia-main mb-6">{t('nordnia.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-24 shrink-0">{t('nordnia.facts.world')}</span> {t('nordnia.facts.worldDesc')}</li>
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-24 shrink-0">{t('nordnia.facts.location')}</span> {t('nordnia.facts.locationDesc')}</li>
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-24 shrink-0">{t('nordnia.facts.feature')}</span> {t('nordnia.facts.featureDesc')}</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            {t('nordnia.desc')}
          </p>
        </div>
      </header>

      {/* Imperial Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-nordnia-main mb-8 flex items-center gap-4">
          {t('nordnia.familyTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="bg-nordnia-main/5 p-6 md:p-8 border border-nordnia-main/10 text-ink-light mb-8">
          <p className="mb-4">
            <strong className="text-nordnia-main">{t('common.divineLineage')}:</strong> {t('nordnia.familyLineage')}
          </p>
          <p>
            {t('nordnia.familyDesc')}
          </p>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name={t('nordnia.characters.0.name')}
            fullName={t('nordnia.characters.0.fullName')}
            age="24"
            gender={t('common.male')}
            height="190cm"
            mbti="ENFJ"
            title={t('nordnia.characters.0.title')}
            keyword={t('nordnia.characters.0.keyword')}
            ability={t('nordnia.characters.0.ability')}
            imageUrl="https://gbe88.uk/2/EB/R.webp"
            imageCaption={t('nordnia.characters.0.imageCaption')}
            details={
              <ul className="list-disc list-inside space-y-1.5">
                {(t('nordnia.characters.0.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            themeColor="text-nordnia-main"
          />
        </div>
      </section>

      {/* Medion Districts */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-nordnia-main mb-8 flex items-center gap-4">
          {t('nordnia.locationsTitle')}
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="mb-6 w-full">
          <img 
            src="https://gbe88.uk/2/EB/pa_7.webp" 
            alt={t('nordnia.locationsTitle')} 
            className="w-full aspect-[21/9] object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-ink-light mb-6">{t('nordnia.capitalDesc')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <ExpandableInfo 
            title={t('nordnia.locations.0.title')}
            subtitle={t('nordnia.locations.0.subtitle')}
            summary={t('nordnia.locations.0.summary')}
            details={
              <ul className="list-disc list-inside space-y-1">
                {(t('nordnia.locations.0.details', { returnObjects: true }) as string[]).map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            }
            imageUrl="https://gbe88.uk/EB/BG_3.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.4.title')}
            subtitle={t('nordnia.locations.4.subtitle')}
            summary={t('nordnia.locations.4.summary')}
            details={t('nordnia.locations.4.details')}
            imageUrl="https://gbe88.uk/EB/BG_4.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.1.title')}
            subtitle={t('nordnia.locations.1.subtitle')}
            summary={t('nordnia.locations.1.summary')}
            details={t('nordnia.locations.1.details')}
            imageUrl="https://gbe88.uk/EB/BG_5.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.5.title')}
            subtitle={t('nordnia.locations.5.subtitle')}
            summary={t('nordnia.locations.5.summary')}
            details={t('nordnia.locations.5.details')}
            imageUrl="https://gbe88.uk/EB/BG_11.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.6.title')}
            subtitle={t('nordnia.locations.6.subtitle')}
            summary={t('nordnia.locations.6.summary')}
            details={t('nordnia.locations.6.details')}
            imageUrl="https://gbe88.uk/EB/BG_12.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.7.title')}
            subtitle={t('nordnia.locations.7.subtitle')}
            summary={t('nordnia.locations.7.summary')}
            details={t('nordnia.locations.7.details')}
            imageUrl="https://gbe88.uk/EB/BG_10.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.2.title')}
            subtitle={t('nordnia.locations.2.subtitle')}
            summary={t('nordnia.locations.2.summary')}
            details={t('nordnia.locations.2.details')}
            imageUrl="https://gbe88.uk/EB/BG_6.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title={t('nordnia.locations.3.title')}
            subtitle={t('nordnia.locations.3.subtitle')}
            summary={t('nordnia.locations.3.summary')}
            details={t('nordnia.locations.3.details')}
            imageUrl="https://gbe88.uk/EB/BG_9.webp"
            themeColor="text-nordnia-main"
          />
        </div>
      </section>

      {/* East and West */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif text-nordnia-main mb-6 flex items-center gap-4">
              {t('nordnia.east.title')}
              <div className="flex-1 h-[1px] bg-border-warm" />
            </h2>
            <div className="bg-stone p-6 rounded-sm">
              <img src="https://gbe88.uk/EB/BG_13.webp" alt={t('nordnia.east.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('nordnia.east.subtitle')}</h3>
              <p className="text-sm text-ink-light mb-4">{t('nordnia.east.desc')}</p>
              <div className="border-t border-border-warm pt-4 mt-2">
                <strong className="block text-ink text-sm mb-1">{t('nordnia.east.cityLabel')}</strong>
                <p className="text-sm text-ink-light">{t('nordnia.east.cityDesc')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-nordnia-main mb-6 flex items-center gap-4">
              {t('nordnia.west.title')}
              <div className="flex-1 h-[1px] bg-border-warm" />
            </h2>
            <div className="bg-stone p-6 rounded-sm">
              <img src="https://gbe88.uk/EB/BG_14.webp" alt={t('nordnia.west.title')} className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-serif text-lg text-ink font-semibold mb-2">{t('nordnia.west.subtitle')}</h3>
              <p className="text-sm text-ink-light mb-4">{t('nordnia.west.desc')}</p>
              <div className="border-t border-border-warm pt-4 mt-2">
                <strong className="block text-ink text-sm mb-1">{t('nordnia.west.cityLabel')}</strong>
                <p className="text-sm text-ink-light">{t('nordnia.west.cityDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
