import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, Mail, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { path: 'home', icon: Home, label: 'home' },
    { path: 'about', icon: User, label: 'about' },
    { path: 'projects', icon: FolderGit2, label: 'projects' },
    { path: 'contact', icon: Mail, label: 'contact' },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ path }) => ({
        id: path,
        element: document.getElementById(path)
      })).filter(item => item.element);

      const viewportCenter = window.innerHeight / 2;
      let closestSection = 'home';
      let minDistance = Infinity;

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-mono font-bold text-custom-blue dark:text-white hover:text-custom-blue/70 dark:hover:text-zinc-300 transition-colors"
          >
            AC
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-custom-blue/60 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-white hover:bg-custom-blue/10 dark:hover:bg-zinc-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <button
                  onClick={() => scrollToSection(path)}
                  className={`flex items-center space-x-2 transition-colors lowercase font-mono ${
                    activeSection === path 
                      ? 'text-custom-blue dark:text-white' 
                      : 'text-custom-blue/60 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <button
                  key={path}
                  onClick={() => scrollToSection(path)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md font-mono lowercase transition-colors w-full text-left ${
                    activeSection === path
                      ? 'bg-custom-blue/10 dark:bg-zinc-900 text-custom-blue dark:text-white'
                      : 'text-custom-blue/60 dark:text-zinc-400 hover:bg-custom-blue/10 dark:hover:bg-zinc-800 hover:text-custom-blue dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}