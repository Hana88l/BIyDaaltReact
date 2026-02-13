import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const phraseRef = useRef(null);
  const wishRef = useRef(null);

  useEffect(() => {
    if (!phraseRef.current || !wishRef.current) return;

  
    const words = phraseRef.current.querySelectorAll(".footer-word");
    gsap.set(words, { opacity: 0, y: 40 });
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
    });

    
    const letters = wishRef.current.querySelectorAll("span");
    gsap.set(letters, { opacity: 0, y: 30 });
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      delay: 2,
    });
    gsap.to(letters, {
      y: 6,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.05,
      delay: 3,
    });
  }, []);

  const phrase = "Thank you for your time".split(" ");
  const wishText = "i wish you a pleasant lucky day".split("");

  return (
    <footer className="h-screen w-full bg-gray-50 flex flex-col items-center justify-center">
    
      <h2
        ref={phraseRef}
        className="text-center text-5xl md:text-7xl font-light text-gray-800 tracking-wide leading-relaxed mb-12"
      >
        {phrase.map((word, i) => (
          <span key={i} className="footer-word inline-block mr-3">
            {word}
          </span>
        ))}
      </h2>

    
      <div
        ref={wishRef}
        className="text-center text-lg md:text-2xl font-light text-gray-600"
      >
        {wishText.map((letter, i) => (
          <span key={i} className="inline-block mx-[1px]">
            {letter}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;