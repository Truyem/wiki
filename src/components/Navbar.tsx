
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  
  const sections = [
    { id: "basic-crafting", name: "Chế tạo cơ bản" },
    { id: "upgrades", name: "Nâng cấp" },
    { id: "quality-upgrades", name: "Cải thiện trang bị" },
    { id: "material-tiers", name: "Cấp độ vật liệu" },
    { id: "special-items", name: "Vật phẩm đặc biệt" },
    { id: "races", name: "Tộc" },
    { id: "enchantments", name: "Enchantments" },
    { id: "trinkets", name: "Trinkets" },
    { id: "server-commands", name: "Lệnh Server" },
  ];

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Close the menu when the path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <nav className="bg-[#259e63] text-white dark:bg-[#1e3a2d] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-lg font-bold">Truyem Server Wiki</Link>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-0.5 overflow-x-auto">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "text-white hover:bg-[#1e3a2d] px-1.5 py-1.5 text-xs rounded-md transition-all duration-200 transform hover:scale-105",
                  activeSection === section.id && "bg-[#1e3a2d] scale-105"
                )}
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </Button>
            ))}
            <div className="ml-2 border-l border-white/30 pl-2">
              <Link to="/skills-and-advancement" className="text-white hover:bg-[#1e3a2d] px-2 py-1.5 text-xs rounded-md transition-all duration-200 transform hover:scale-105 inline-block">
                Kỹ năng
              </Link>
              <Link to="/mechanics" className="text-white hover:bg-[#1e3a2d] px-2 py-1.5 text-xs rounded-md ml-1 transition-all duration-200 transform hover:scale-105 inline-block">
                Cơ Chế
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-white hover:bg-[#1e3a2d] hover:text-white transition-all duration-200 transform hover:scale-110">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
          
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-[#1e3a2d] hover:text-white transition-all duration-200 transform hover:scale-110">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#1e3a2d] overflow-y-auto max-h-[70vh]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "w-full text-white hover:bg-[#259e63] block px-3 py-2 rounded-md text-left transition-all duration-200",
                  activeSection === section.id && "bg-[#259e63]"
                )}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMenuOpen(false);
                }}
              >
                {section.name}
              </Button>
            ))}
            <div className="pt-2 mt-2 border-t border-white/20">
              <Link 
                to="/skills-and-advancement" 
                className="text-white hover:bg-[#259e63] block px-3 py-2 rounded-md transition-all duration-200 transform hover:translate-x-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                Kỹ năng & Cách thăng cấp
              </Link>
              <Link 
                to="/mechanics" 
                className="text-white hover:bg-[#259e63] block px-3 py-2 rounded-md mt-1 transition-all duration-200 transform hover:translate-x-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                Các Cơ Chế
              </Link>
            </div>
            <Button 
              variant="ghost" 
              onClick={toggleDarkMode} 
              className="w-full text-white hover:bg-[#259e63] flex items-center px-3 py-2 rounded-md"
            >
              {isDarkMode ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
              {isDarkMode ? "Chế độ sáng" : "Chế độ tối"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
