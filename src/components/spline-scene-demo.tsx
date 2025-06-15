'use client';

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { allLogos } from "@/config/logos";
import { useEffect, useState } from "react";

export function SplineSceneDemo() {
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initial orientation
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const showRobot = !isMobile || (isMobile && isLandscape);
  
  return (
    <Card className="w-full relative overflow-hidden bg-gradient-to-r from-black/95 to-black/90">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row relative">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-[1.4rem] font-mono text-neutral-300 mb-2">education</h2>
              <ul className="space-y-2 text-neutral-100 font-mono text-[0.8rem]">
                <li>MS Data Science, UCLA</li>
                <li>BS Statistics, UCLA</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.4rem] font-mono text-neutral-300 mb-2">work experience</h2>
              <ul className="space-y-2 text-neutral-100 font-mono text-[0.8rem]">
                <li>Business Intelligence Analyst, Latham & Watkins LLP</li>
                <li>Data Science Intern, UCLA Women's Basketball</li>
                <li>Operations Analyst Intern, UCLA Football</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.4rem] font-mono text-neutral-300 mb-2">skills</h2>
              <div className="pl-0">
                <LogoCarousel columnCount={3} logos={allLogos} />
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Robot */}
        {showRobot && (
          <div className="flex-1 relative min-h-[400px] bg-gradient-to-l from-black/90 via-black/80 to-transparent">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </Card>
  );
}