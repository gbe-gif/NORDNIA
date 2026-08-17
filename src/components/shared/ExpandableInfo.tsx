import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExpandableInfoProps {
  title: string;
  subtitle: string;
  summary: string;
  details: ReactNode;
  themeColor: string;
  imageUrl?: string;
}

export default function ExpandableInfo({
  title,
  subtitle,
  summary,
  details,
  themeColor,
  imageUrl
}: ExpandableInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-warm py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group flex items-start justify-between"
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h4 className={`text-lg font-serif font-semibold ${themeColor}`}>{title}</h4>
            {subtitle && (
              <span className="text-[10px] tracking-wider uppercase bg-stone px-2 py-0.5 text-ink-light rounded-sm">
                {subtitle}
              </span>
            )}
          </div>
          
          <p className="text-sm text-ink-light mt-1">
            {summary}
          </p>
        </div>
        
        <div className={`mt-1 p-1.5 rounded-full transition-colors ${isOpen ? 'bg-stone' : 'group-hover:bg-stone'}`}>
          {isOpen ? <ChevronUp size={18} className="text-ink-light" /> : <ChevronDown size={18} className="text-ink-light" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-ink-light leading-relaxed text-sm sm:text-base border-t border-stone mt-4">
              {imageUrl && (
                <div className="mb-6 w-full">
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full aspect-[21/9] object-cover rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
