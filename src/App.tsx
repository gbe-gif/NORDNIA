import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Nordnia from './pages/Nordnia';
import Vaneris from './pages/Vaneris';
import Esvard from './pages/Esvard';

export default function App() {
  return (
    <Router>
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
            © {new Date().getFullYear()} Official Archive. All Records Preserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}
