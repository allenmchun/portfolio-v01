import React from 'react';
import { TextScramble } from '../components/TextScramble';
import { SplineSceneDemo } from '@/components/spline-scene-demo';
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="py-20">
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      <div className="flex justify-center items-center h-[calc(100vh-16rem)]">
        <h2 className="text-2xl md:text-3xl font-bold">
          <TextScramble text="WELCOME" />
        </h2>
      </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-mono font-bold uppercase mb-6">ABOUT</h1>
          <div className="w-full">
            <SplineSceneDemo />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-mono font-bold uppercase mb-6">PROJECTS</h1>
          <div className="w-full">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
      </section>
    </div>
  );
}