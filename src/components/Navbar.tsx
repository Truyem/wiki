
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <nav className="bg-[#259e63] text-white dark:bg-[#1e3a2d] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold">
                TrustTheProcess Wiki
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/skills-and-advancement" className="text-white hover:bg-[#1e3a2d] px-3 py-2 rounded-md">
                  Kỹ năng & Cách thăng cấp
                </Link>
                <Link to="/mechanics" className="text-white hover:bg-[#1e3a2d] px-3 py-2 rounded-md">
                  Các Cơ Chế
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-white hover:bg-[#1e3a2d] hover:text-white">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-[#1e3a2d] hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1e3a2d]">
            <Link to="/skills-and-advancement" className="text-white hover:bg-[#259e63] block px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Kỹ năng & Cách thăng cấp
            </Link>
            <Link to="/mechanics" className="text-white hover:bg-[#259e63] block px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Các Cơ Chế
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-white hover:bg-[#1e3a2d] hover:text-white">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
