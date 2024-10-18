import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Experience from '../components/experience';
import About from '../components/about';
import Projects from '../components/projects';
import '../app/globals.css';

const IndexPage: React.FC = () => {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
  };

  const [activeSection, setActiveSection] = useState<string>('experience');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: '-30% 0px -90% 0px' } // Adjust this value as needed
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const handleSectionClick = (section: string) => {
    const sectionRef = sectionRefs[section as keyof typeof sectionRefs];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionClick={handleSectionClick}>
      <div id="about" ref={sectionRefs.about} className="bg-transparent pb-12">
        <About />
      </div>
      <div id="experience" ref={sectionRefs.experience} className="bg-transparent pb-12">
        <Experience />
      </div>
      <div id="projects" ref={sectionRefs.projects} className="bg-transparent pb-12">
        <Projects />
      </div>
    </Layout>
  );
};

export default IndexPage;