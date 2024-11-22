// src/components/SimpleLayout.tsx
import React from 'react';
import Head from 'next/head';
import '../app/globals.css';
import ParticleBackground from './ParticleBackground';

type SimpleLayoutProps = {
  children: React.ReactNode;
};

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Processing Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <ParticleBackground />
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </>
  );
};

export default SimpleLayout;