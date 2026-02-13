import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSkullCrossbones } from "react-icons/fa";
import Contact from "./Contact";

export default function ExplodingText() {
  const [explode, setExplode] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const text = "B.BATTSETSEG";

  const transforms = useMemo(
    () =>
      text.split("").map(() => ({
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        rotate: Math.random() * 360,
      })),
    [text]
  );

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-[#CBCBCB] overflow-hidden overflow-x-hidden">
      
      {/* Contact button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setShowContact(true)}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Contact me
        </button>
      </div>

      {/* Contact modal */}
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />

      {/* Exploding text */}
      <div className="flex flex-col items-center gap-2 mt-24 text-center max-w-full overflow-hidden">
        <div className="flex gap-2 font-tomorrow font-bold mt-28 max-w-full overflow-hidden 
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              animate={
                explode
                  ? { ...transforms[i], opacity: 0 }
                  : { opacity: 1, x: 0, y: 0, rotate: 0 }
              }
              transition={{ duration: 2, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <p className="text-lg font-orbitron mt-6 -tracking-wide">
          Software Engineer
        </p>
      </div>

      {/* Explode button */}
      <button
        onClick={() => {
          setExplode(true);
          setTimeout(() => setExplode(false), 1000);
        }}
        className="flex items-center gap-2 px-4 py-2 text-white mt-48 group font-tomorrow"
      >
        <FaSkullCrossbones className="text-2xl text-black transition-transform duration-300 group-hover:-translate-x-2" />
        <span className="relative group-hover:translate-x-2 transition-transform duration-300">
          {explode ? "Resetting..." : "Do not press this!"}
          <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-slate-100 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>
    </section>
  );
}