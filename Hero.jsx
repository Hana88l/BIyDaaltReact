import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      line1Ref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      line2Ref.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    ).fromTo(
      line3Ref.current,
      {x: 200, opacity: 0},
      {x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={line1Ref}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#3b3b3b] mb-2 opacity-0"
        >
          Here is a selection of my 
        </h2>
        <h3
          ref={line2Ref}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#757575] opacity-0"
        >
          mini-project realized 
        </h3>
        <h4
          ref={line3Ref}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#a0a0a0] opacity-0">
          during 2025-2026
        </h4>
      </div>
    </section>
  );
};

export default Hero;