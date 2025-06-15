import React from 'react';
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function Projects() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <h1 className="text-[1.45rem] md:text-[1.836rem] font-bold mt-12 md:mt-10 mb-6 font-mono lowercase">projects</h1>
      <div className="w-full">
        <ThreeDPhotoCarousel />
      </div>
    </div>
  );
}