import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CharacterProps {
  name: string;
  fullName?: string;
  age: string;
  title: string;
  keyword: string;
  ability: string;
  details: ReactNode;
  themeColor: string; // Tailwind class like 'text-vaneris-main'
  gender?: string;
  height?: string;
  mbti?: string;
  birthday?: string;
  imageUrl?: string;
  imageCaption?: string;
}

export default function CharacterCard({
  name,
  fullName,
  age,
  title,
  keyword,
  ability,
  details,
  themeColor,
  gender,
  height,
  mbti,
  birthday,
  imageUrl,
  imageCaption
}: CharacterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-warm pt-6">
      <div className="pr-2 sm:pr-4">
        {/* Header: Name and Title */}
        <div className="flex flex-col mb-3">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h4 className={`text-xl font-serif font-semibold ${themeColor}`}>{name}</h4>
            <span className="text-xs tracking-wider uppercase bg-stone px-2 py-1 text-ink-light rounded-sm">
              {title}
            </span>
          </div>
          {fullName && (
            <span className="text-sm font-serif italic text-ink-light/80 block mt-0.5">
              {fullName}
            </span>
          )}
        </div>

        {/* Basic Info Badges */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs text-ink-light">
          <span>{age}세</span>
          {gender && <><span className="text-border-warm">|</span><span>{gender}</span></>}
          {height && <><span className="text-border-warm">|</span><span>{height}</span></>}
          {mbti && <><span className="text-border-warm">|</span><span>{mbti}</span></>}
          {birthday && <><span className="text-border-warm">|</span><span>{birthday}</span></>}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              {/* Profile Image */}
              {imageUrl && (
                <div className="mb-6 w-full">
                  <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full h-auto max-h-[600px] object-contain rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                  {imageCaption && (
                    <p className="text-[10px] text-ink-light/60 mt-1.5 text-center">
                      {imageCaption}
                    </p>
                  )}
                </div>
              )}
              
              {/* Keyword & Ability */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-ink-light mb-5">
                <p><strong className="text-ink font-medium">특징:</strong> {keyword}</p>
                <span className="hidden sm:inline text-border-warm">|</span>
                <p><strong className="text-ink font-medium">능력:</strong> {ability}</p>
              </div>

              {/* Details */}
              <div className="text-ink-light leading-relaxed text-sm sm:text-base border-t border-stone pt-4 mt-2">
                {details}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full mt-2 py-4 text-sm font-medium text-ink-light hover:text-ink hover:bg-stone/30 transition-colors flex justify-center items-center gap-2 border-t border-transparent hover:border-border-warm/50 focus:outline-none"
      >
        {isOpen ? (
          <>접기 <ChevronUp size={16} /></>
        ) : (
          <>자세히 보기 <ChevronDown size={16} /></>
        )}
      </button>
    </div>
  );
}
