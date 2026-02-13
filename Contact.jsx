import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Contact = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.set(modalRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { y: 50, opacity: 0, scale: 0.95 });

      gsap.to(modalRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.out',
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('tsetseed666@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-[#fbfbfb] rounded-2xl p-8 md:p-12 max-w-lg w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#3b3b3b] mb-6">
          Contact me
        </h2>

        <p className="font-sans text-[#7c7c7c] mb-8">
          Copy my email address or open your email default app (you know the thing called "email")
        </p>

        <div className="space-y-4">
          <div className="relative flex flex-col items-center">
            <button
              onClick={copyEmail}
              className="w-full py-4 px-6 border border-[#3b3b3b] rounded-full font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#3b3b3b] hover:text-[#fbfbfb] relative"
            >
              Copy email address
            </button>

            {copied && (
              <span className="absolute -top-6 bg-slate-300 text-white text-xs px-2 py-1 rounded shadow">
                Copied!
              </span>
            )}
          </div>

          <a
            href="mailto:tsetseed666@gmail.com"
            className="block w-full py-4 px-6 bg-[#3b3b3b] text-[#fbfbfb] rounded-full font-sans text-sm tracking-wider uppercase text-center transition-all duration-300 hover:bg-[#2b2b2b]"
          >
            Send me an email
          </a>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#3b3b3b] hover:opacity-60 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;