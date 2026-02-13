import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'TinyCraft', description: 'Jewellery Store Website.', client: 'Indra Cyber Institute', devStack: 'Figma', image: '/image/TinyCraft.png', season: 'Project 01' },
  { title: 'Cup', description: 'Mini website on Figma.', client: 'Indra Cyber Institute', devStack: 'Figma', image: '/image/Cup.png', season: 'Project 02' },
  { title: 'Portfolio Website', description: 'Portfolio website on Figma.', client: 'Indra Cyber Institute', devStack: 'Figma', image: '/image/Portfolio.png', season: 'Project 03' },
  { title: 'Flower', description: 'Flower store website on Figma.', client: 'Indra Cyber Institute', devStack: 'Figma', image: '/image/Flower.png', season: 'Project 04' },
  { title: 'Collection', description: 'New Collection store on Figma.', client: 'Indra Cyber Institute', devStack: 'Figma', image: '/image/Collection.png', season: 'Project 05' },
  { title: 'Legora', description: 'Legora clone website on HTML.', client: 'Indra Cyber Institute', devStack: 'HTML', image: '/image/Legora.png', season: 'Project 06' },
  { title: 'Yucca', description: 'Yucca coffee shop website on HTML.', client: 'Indra Cyber Institute', devStack: 'HTML', image: '/image/Yucca.png', season: 'Project 07' },
  { title: 'Haven', description: 'Haven spaceship website on HTML.', client: 'Indra Cyber Institute', devStack: 'HTML', image: '/image/Haven.png', season: 'Project 08' },
  { title: 'Cabana', description: 'Cabana clone website on React.', client: 'Indra Cyber Institute', devStack: 'React', image: '/image/Cabana.png', season: 'Project 09' },
  { title: 'Auriga', description: 'Auriga spaceship clone website on React.', client: 'Indra Cyber Institute', devStack: 'React', image: '/image/Auriga.png', season: 'Project 10' },
];

const Projects = () => {
  const containerRef = useRef(null);
  const bgTextRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    const projectCards = containerRef.current.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.fromTo(
      bgTextRef.current,
      { yPercent: -20, opacity: 0.3, filter: 'blur(4px)' },
      {
        yPercent: 20,
        opacity: 0.6,
        filter: 'blur(0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto relative z-10 space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.title + index}
            onClick={() => navigate(`/project/${index}`)}
            className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;