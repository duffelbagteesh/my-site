import React from "react";
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, tech }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="glass-effect text-black p-6 rounded-lg shadow-lg flex">
      <div className="mr-4">
        <Image src={imageUrl} alt={title} width={750} height={48} className="object-cover rounded" />
      </div>
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <div className="mt-4">
            {tech.map((tech) => (
              <span key={tech} className="inline-block tech-style rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
            ))}
          </div>
      </div>
    </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      <h2 className="lg:hidden">Projects</h2>
      <div>
        <ProjectCard
          title="DeezerSpleeter"
          description="Designed and implemented an audio isolating Flask application using Python deployed through a GitHub Workflows pipeline. Utilized Spleeter pre-trained models along with TensorFlow to split music tracks into their respective component parts."
          imageUrl="/DeezerSpleeter.png"
          link="https://deezer5.calmtree-5c210eb4.eastus.azurecontainerapps.io" 
          tech={["Python", "Flask", "TensorFlow", "Spleeter", "Azure", "Docker"]} />
      </div>
      <div>
        <ProjectCard
          title="WebAuth Secrets"
          description="Developed and deployed a responsive PWA (Progressive Web App) using Glitch hosting platform, a simple Node app built on Express integrating WebAuthn API to enable passwordless authentication through device authentication system."
          imageUrl="/websecrets.png"
          link="https://periwinkle-cake-olive.glitch.me/" 
          tech={["WebAuth API", "PWA", "Express", "Node.js"]} />
      </div>
      <div>
        <ProjectCard
          title="CSS Showcase Midterm"
          description="This project displays how CSS properties have been utilized to bring colors to life, from hexadecimal codes to RGBA values. It embarks the user on a journey through the color spectrum, showcasing the power and evolution of CSS in web development."
          imageUrl="/css-showcase.png" 
          link="https://github.uconn.edu/pages/lef16103/DMD3470/css-showcase-midterm/"
          tech={["React", "HTML & CSS"]} />
      </div>
    </div>
  );
};

export default Projects;