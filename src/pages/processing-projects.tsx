// src/pages/processing-projects.tsx
import React from 'react';
import Layout from '../components/Layout';
import ProcessingProjectsList from '../components/ProcessingProjectsList';

const ProcessingProjectsPage: React.FC = () => {
  return (
    <Layout activeSection="processingProjects" onSectionClick={() => {}}>
      <div id="processingProjects" className="bg-transparent pb-12">
        <ProcessingProjectsList />
      </div>
    </Layout>
  );
};

export default ProcessingProjectsPage;