// src/pages/processing-projects.tsx
import React from 'react';
import SimpleLayout from '../components/SimpleLayout';
import ProcessingProjectsList from '../components/ProcessingProjectsList';

const ProcessingProjectsPage: React.FC = () => {
  return (
    <SimpleLayout>
      <div id="processingProjects" className="bg-transparent pb-12">
        <ProcessingProjectsList />
      </div>
    </SimpleLayout>
  );
};

export default ProcessingProjectsPage;