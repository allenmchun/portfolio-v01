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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% in view
        threshold: 0.1
      }
    );

    // Observe all sections
    navItems.forEach(({ path }) => {
      const element = document.getElementById(path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-mono font-bold hover:text-zinc-300 transition-colors"
          >
            AC
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800"
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
                    activeSection === path ? 'text-white' : 'text-zinc-400 hover:text-white'
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
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
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