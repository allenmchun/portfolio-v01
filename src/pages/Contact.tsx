import React from 'react';
import { TextScramble } from '../components/TextScramble';

export function Contact() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <div className="flex justify-center items-center h-[calc(100vh-16rem)]">
        <h2 className="text-xl md:text-2xl">
          <TextScramble text="FOR ALL BUSINESS INQUIRIES: " />
          <a 
            href="mailto:allenchun7@ucla.edu"
            className="font-bold hover:text-zinc-300 transition-colors"
          >
            <TextScramble text="ALLENCHUN7@UCLA.EDU" />
          </a>
        </h2>
      </div>
    </div>
  );
}