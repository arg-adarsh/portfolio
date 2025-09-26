'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
    return (
    <section className="container grid lg:grid-cols-2 place-items-center gap-10 py-20 md:py-32">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Hello, I'm
            </span>{" "}
            Adarsh
          </h1>{" "}
          <h2 className="inline">
            a Software Engineer
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
         From ideas to clean, scalable software <br/>— that’s what I do.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild><a href="#contact">Contact Me</a></Button>
          <Button variant="outline" className="w-full md:w-1/3" asChild>
              <a href="https://drive.google.com/file/d/11l0M0LQJuPPtap9z2ysXy9M2uRqCkJY9/view" target="_blank" rel="noopener noreferrer">Download CV</a>
          </Button>
        </div>
      </div>

      <div className="z-10 order-first lg:order-last">
         <Image 
            src="https://picsum.photos/800/800"
            alt="Adarsh Raj Gautam"
            width={100}
            height={100}
            className="rounded-lg shadow-2xl w-full max-w-[300px] lg:max-w-[500px]"
            data-ai-hint="professional portrait"
          />
      </div>
      <div className="absolute h-full max-h-[500px] w-full max-w-[500px] bg-purple-700/50 rounded-full -z-10 blur-3xl" />
    </section>
);
}
