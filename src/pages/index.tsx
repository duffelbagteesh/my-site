// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import Experience from '../components/experience';
import About from '../components/about';
import Projects from '../components/projects';
import '../app/globals.css';

const Home = () => {
  const [activeSection, setActiveSection] = React.useState('');
  const sectionRefs = {
    about: React.createRef<HTMLDivElement>(),
    experience: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
  };
  
const handleSectionClick = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 },
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

export default Home;