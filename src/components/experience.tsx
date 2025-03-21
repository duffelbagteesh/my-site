// src/components/Experience.tsx
import React from 'react';

type ExperienceCardProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
  link: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description, link }) => {
  return (
    <div className="glass-effect text-black p-6 rounded-lg shadow-lg flex flex-col sm:flex-row">
      <div className="mb-0 sm:mr-4 sm:mb-0">
        <p className="uppercase text-xs text-gray-500 mb-2 mt-1 whitespace-nowrap">{duration}</p>
      </div>
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        <div className='inline-flex mb-2'>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex">
              <h4 className="text-gray-500 text-base mb-2">{company}</h4>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 ml-2 mt-1">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
              </svg>
            </div>
          </a>
        </div>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      <h2 className="lg:hidden">Experience</h2>
      <div>
        <ExperienceCard
          title="Student Web Developer"
          company="Internal Insights & Innovation (I3), UConn"
          duration="May 2023 - May 2024"
          description="Designed and developed modern user-friendly websites for researchers across Uconn campuses. Collaborated with team members to gather requirements and ensure a responsive user-friendly interface."
          link="https://dxgroup.core.uconn.edu/"
        />
      </div>
  <div className='inline-flex ml-4'>
  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='pl-2 hover:text-blue-500'>
  <div className='flex'>
    View Full Resume
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 ml-2 mt-1 fill-current">
      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
    </svg>
  </div>
</a>
</div>
      {/* Add more ExperienceCard components as needed */}
    </div>
  );
};

export default Experience;