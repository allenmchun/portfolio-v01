import React from 'react';
import { TextScramble } from '../components/TextScramble';

export function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <div className="flex justify-center items-center h-[calc(100vh-16rem)]">
        <h2 className="text-2xl md:text-3xl font-bold">
          <TextScramble text="WELCOME" />
        </h2>
      </div>
    </div>
  );
}