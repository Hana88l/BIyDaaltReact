import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const quoteText = `Coding is not just about writing lines of code; it's about crafting a symphony of logic and creativity.`;

  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  const renderQuote = () => {
    const words = quoteText.split(' ');
    return words.map((word, wordIndex) => {
      const totalWords = words.length;
      const wordProgress = wordIndex / totalWords;
      const isActive = scrollProgress > wordProgress;

      return (
        <span
          key={`word-${word}-${wordIndex}`}
          className={`inline-block mr-2 md:mr-3 transition-opacity duration-300 ${
            isActive ? 'text-white' : 'text-gray-500'
          }`}
          style={{ opacity: isActive ? 1 : 0.4 }}
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={`char-${word}-${wordIndex}-${char}-${charIndex}`}
              className="inline-block transition-all duration-200"
              style={{
                transform: isActive ? 'translateY(0)' : 'translateY(5px)',
              }}
            >
              {char}
            </span>
          ))}
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 lg:px-24 relative bg-black"
    >
      <blockquote
        ref={quoteRef}
        className="font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl text-center leading-relaxed italic"
      >
        {renderQuote()}
      </blockquote>
    </section>
  );
};

export default Quote;