import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.vaneris', path: '/vaneris' },
    { key: 'nav.nordnia', path: '/nordnia' },
    { key: 'nav.esvard', path: '/esvard' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-border-warm py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-ink hover:text-gold-accent transition-colors" aria-label="Home">
            <Home size={22} />
          </Link>
          
          <div className="flex items-center gap-3 text-xs md:text-sm tracking-widest font-medium">
            <button onClick={() => changeLanguage('ko')} className={`transition-colors ${i18n.language === 'ko' ? 'font-bold text-gold-accent' : 'text-ink-light hover:text-ink'}`}>KOR</button>
            <span className="text-border-warm text-[10px] md:text-xs">|</span>
            <button onClick={() => changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'font-bold text-gold-accent' : 'text-ink-light hover:text-ink'}`}>ENG</button>
            <span className="text-border-warm text-[10px] md:text-xs">|</span>
            <button onClick={() => changeLanguage('ja')} className={`transition-colors ${i18n.language === 'ja' ? 'font-bold text-gold-accent' : 'text-ink-light hover:text-ink'}`}>JPN</button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest transition-colors ${
                location.pathname === link.path 
                  ? 'text-gold-accent font-semibold' 
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className="p-2 -mr-2 text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-paper border-b border-border-warm py-4 px-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest py-2 transition-colors border-b border-stone ${
                  location.pathname === link.path 
                    ? 'text-gold-accent font-semibold' 
                    : 'text-ink-light hover:text-ink'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
