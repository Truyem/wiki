
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = `
    transition-all duration-300 ease-in-out
    ${isOpen || (!isMobile && isOpen) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
    ${isMobile ? 'fixed z-50 left-0' : 'fixed z-50 left-1/2 -translate-x-1/2'}
    top-16 bottom-16 bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-xl
    w-64 py-8 px-4 overflow-y-auto
  `;

  const toggleButtonClasses = `
    fixed z-[60] top-5 left-5 p-2 rounded-full
    bg-gray-800/80 text-white shadow-lg hover:bg-gray-700
    transition-all duration-200 ease-in-out
  `;

  const hoverTriggerClasses = `
    hidden md:block fixed z-10 left-1/2 top-16 -translate-x-1/2
    w-20 h-20 bg-transparent cursor-pointer
  `;

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button 
          className={toggleButtonClasses} 
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Desktop hover trigger zone */}
      {!isMobile && (
        <div 
          className={hoverTriggerClasses}
          onMouseEnter={() => setIsOpen(true)}
        />
      )}

      {/* Sidebar content */}
      <div 
        className={sidebarClasses}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <nav>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link 
                to="/" 
                className={`block px-4 py-2 rounded-md transition ${location.pathname === '/' ? 'bg-blue-700 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/mechanics" 
                className={`block px-4 py-2 rounded-md transition ${location.pathname === '/mechanics' ? 'bg-blue-700 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
              >
                Game Mechanics
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`block px-4 py-2 rounded-md transition ${location.pathname.includes('/skills') ? 'bg-blue-700 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
              >
                Skills & Advancement
              </Link>
            </li>
            <li>
              <Link 
                to="/wiki" 
                className={`block px-4 py-2 rounded-md transition ${location.pathname === '/wiki' ? 'bg-blue-700 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
              >
                Crafting & Items Wiki
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
