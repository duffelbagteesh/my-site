// src/components/Navigation.js
import React from 'react';

type NavigationProps = {
  activeSection: string;
  onSectionClick: (section: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  return (
<nav className="nav hidden lg:flex flex-col items-start pt-10">
  <button className={`uppercase text-base hover:text-blue-500 transition-colors ${activeSection === 'about' ? 'text-blue-500' : ''}`} onClick={() => onSectionClick('about')}>About</button>
  <button className={`uppercase text-base hover:text-blue-500 transition-colors ${activeSection === 'experience' ? 'text-blue-500' : ''}`} onClick={() => onSectionClick('experience')}>Experience</button>
  <button className={`uppercase text-base hover:text-blue-500 transition-colors ${activeSection === 'projects' ? 'text-blue-500' : ''}`} onClick={() => onSectionClick('projects')}>Projects</button>
</nav>
  );
};

export default Navigation;