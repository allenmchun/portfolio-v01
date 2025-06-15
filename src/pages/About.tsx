import React from 'react';
import { SplineSceneDemo } from '@/components/spline-scene-demo';

export function About() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <h1 className="text-[1.45rem] md:text-[1.836rem] font-bold mt-12 md:mt-10 mb-6 font-mono lowercase">about</h1>
      <SplineSceneDemo />
    </div>
  );
}