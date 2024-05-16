// src/components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './header';
import '../app/globals.css';
import ParticleBackground from './ParticleBackground';

type LayoutProps = {
  children: React.ReactNode;
  activeSection: string;
  onSectionClick: (section: string) => void;
};

const Layout: React.FC<LayoutProps> = ({ children, activeSection, onSectionClick }) => {
  return (
    <>
    <ParticleBackground />
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Head>
        <title>Leticia Fernandes</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header activeSection={activeSection} onSectionClick={onSectionClick} />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section className="md:py-20 lg:py-0">
            {children}
          </section>
          <footer className='text-base'>
        <p>Loosely designed and coded in VS Code by ya girl ✌️. Built with <a href='https://nextjs.org/' className="text-md font-semibold">Next.js</a> and <a href='https://tailwindcss.com/' className="text-md font-semibold">Tailwind CSS</a>, deployed with <a href='https://render.com/' className='text-md font-semibold'>Render</a>. Major texts in Roboto Slab and minor in Roboto typeface.</p>
      </footer>
        </main>
      </div>
    </div>
    </>
  );
};

export default Layout;
