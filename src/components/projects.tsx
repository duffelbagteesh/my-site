import React from "react";
import Image from 'next/image';
import dynamic from 'next/dynamic';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[];
};
const P5Sketch = dynamic(() => import('./P5Sketch'), { ssr: false });

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, tech }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="glass-effect text-black p-6 rounded-lg shadow-lg flex flex-col sm:flex-row">
      <div className="mb-4 sm:mr-4 sm:mb-0">
        <Image src={imageUrl} 
        alt={title} 
        width={120} 
        height={300} 
        className="object-cover rounded" />
      </div>
      <div className="w-4/5">
        <h3 className="text-md font-semibold mb-2">{title}</h3>
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
          title="DX Group, Hiring Maps"
          description="UX Designer/Developer for a web application that visualizes the hiring opportunities across Connecticut."
          imageUrl="/dxgroup-hiring-maps.png"
          link="https://hiring-maps-63410.web.app/" 
          tech={["Vue.js", "Nuxt", "Collaboration", "Design"]} />
      </div>
      <div>
        <ProjectCard
          title="DX Group, Werth Institute"
          description="UX Designer/Developer, full redesign and redevelopment of the website"
          imageUrl="/dxgroup-werth.png"
          link="https://www.linkedin.com/posts/uconn-dx-group_werestokedto-announce-our-recentlaunch-activity-7190811047555985409-Yi0r?utm_source=share&utm_medium=member_desktop" 
          tech={["WordPress", "PHP", "Design", "Collaboration"]} />
      </div>
      <div>
        <ProjectCard
          title="DX Group, Wheatley Peters"
          description="UX Designer/Developer, full redesign and redevelopment of a digital archive website for UConn's Humanities Department."
          imageUrl="/wheatley-peters.png"
          link="https://lyr.xn--lamh-bpa.org/cms/" 
          tech={["Omeka", "PHP", "Design", "JavaScript"]} />
      </div>
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
          link="https://duffelbagteesh.github.io/colors-showcase/"
          tech={["React", "HTML & CSS"]} />
      </div>
      <div>
        <P5Sketch />
      </div>
    </div>
  );
};

export default Projects;