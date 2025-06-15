import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="w-16 md:w-64 h-screen bg-zinc-900 fixed left-0 top-0">
      <div className="p-4 flex flex-col h-full">
        <div className="mb-8 flex justify-center">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
        </div>
        <ul className="space-y-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span className="ml-3 hidden md:block">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}