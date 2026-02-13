import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = contentRef.current?.querySelectorAll('.about-item');

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      }
    );

    elements?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  const socialLinks = [
    { name: 'Email', url: 'mailto:tsetseed666@gmail.com' },
    { name: 'Github', url: 'https://github.com/Hana88l' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-[#f5f5f5]"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#3b3b3b] mb-16 opacity-0"
        >
          About
        </h2>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 md:gap-20">
        
          <div className="about-item opacity-0 h-full flex flex-col">
            <h3 className="font-sans text-lg font-bold text-[#3b3b3b] mb-4 uppercase tracking-wider">
              About
            </h3>
            <p className="font-sans text-[#7c7c7c] text-base md:text-lg leading-relaxed flex-grow">
              Hi there, I am a Creative Developer, I enjoy building
              beautiful and thoughtful experiences. 
            </p>
            
            <div className="about-item opacity-0 md:col-span-2 h-full flex flex-col">
              <h3 className="font-sans text-lg font-bold text-[#3b3b3b] mb-4 uppercase tracking-wider">
                Skills
              </h3>
              <ul className="font-sans text-[#7c7c7c] text-base md:text-lg leading-relaxed space-y-2 flex-grow">
                <li>Strong knowledge of modern Front-end Technologies: HTML/CSS/JS, React/JSX</li>
                <li>Creative coding: Canvas, Figma</li>
                <li>Producing neat, tested, readable and well documented code</li>
                <li>Building prototype concepts to demonstrate and test ideas</li>
                <li>An eye for interaction design and finishing touches</li>
              </ul>
            </div>
          </div>

        
          <div className="about-item opacity-0 h-full flex flex-col">
            <h3 className="font-sans text-lg font-bold text-[#3b3b3b] mb-4 uppercase tracking-wider">
              Job
            </h3>
            <ul className="font-sans text-[#7c7c7c] text-base md:text-lg leading-relaxed space-y-3 flex-grow">
              <li>
                <span className="font-semibold">2018-2019 · Stimo LLC:</span> 
                Supported business operations, assisted with customer service, and contributed to daily organizational tasks.
              </li>
              <li>
                <span className="font-semibold">2019-2020 · Sansar Supermarket:</span> 
                Worked in retail, improving sales and enhancing customer satisfaction.
              </li>
              <li>
                <span className="font-semibold">2022-2023 · JA Zenno Meat Foods:</span> 
                Participated in food production, focusing on quality control and supply chain improvements.
              </li>
              <li>
                <span className="font-semibold">2023-2024 · Khan Bank:</span> 
                Contributed to financial services, customer support, product promotion, and team collaboration.
              </li>
              <li>
                <span className="font-semibold">2024-2025 · Amulate Dental Clinic:</span> 
                Worked in healthcare, assisting with patient services, clinic organization, and team support.
              </li>
            </ul>
          </div>

          

        
          <div className="about-item opacity-0 md:col-span-2">
            <div className="flex flex-wrap gap-4 md:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[#3b3b3b] text-sm md:text-base link-underline transition-opacity hover:opacity-60"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;