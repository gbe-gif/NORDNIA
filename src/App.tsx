import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Nordnia from './pages/Nordnia';
import Vaneris from './pages/Vaneris';
import Esvard from './pages/Esvard';
import ScrollToTop from './components/shared/ScrollToTop';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    if (i18n.language === 'ja') {
      document.body.style.wordBreak = 'normal';
      document.body.style.overflowWrap = 'break-word';
    } else {
      document.body.style.wordBreak = 'keep-all';
      document.body.style.overflowWrap = 'break-word';
    }
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nordnia" element={<Nordnia />} />
            <Route path="/vaneris" element={<Vaneris />} />
            <Route path="/esvard" element={<Esvard />} />
          </Routes>
        </main>
        <footer className="w-full py-8 text-center border-t border-border-warm bg-stone/50 mt-auto">
          <p className="text-xs text-ink-light tracking-widest uppercase font-serif">
            {t('nav.footer')}
          </p>
        </footer>
      </div>
    </Router>
  );
}
