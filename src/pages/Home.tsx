import { TextScramble } from '../components/TextScramble';
import { SplineSceneDemo } from '@/components/spline-scene-demo';
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { Button } from "@/components/ui/moving-border";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="py-20">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center h-[calc(100vh-16rem)] text-center w-full">
                    <h2 className="text-2xl md:text-5xl font-bold w-full">
          <TextScramble text="WELCOME" />
          <div className="mt-8 w-full flex justify-center">
            <Button
              borderRadius="1.75rem"
              duration={3000}
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-normal text-sm font-inter"
              as="a"
              href="mailto:allenchun7@ucla.edu"
            >
              Let's Talk
            </Button>
          </div>
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