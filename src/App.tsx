
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Index from './pages/Index';
import Mechanics from './pages/Mechanics';
import SkillsAndAdvancement from './pages/SkillsAndAdvancement';
import Wiki from './pages/Wiki';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <Sidebar />
        
        <main className="flex-grow container mx-auto px-4 py-8 relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mechanics" element={<Mechanics />} />
            <Route path="/skills" element={<SkillsAndAdvancement />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
