import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-8">
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/allenchun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-custom-blue/60 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:allenchun7@ucla.edu"
          className="text-custom-blue/60 dark:text-zinc-400 hover:text-custom-blue dark:hover:text-white transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
}