import React from 'react';
import Navigation from './nav'; // Import the missing 'Navigation' component

interface HeaderProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionClick }) => {
  const nameHeader = (
    <div id="title" className="title">
      <section className="">
        <h1 className="font-bold font-roboto-slab">Leticia Fernandes</h1>
        <h2 className='subtitle'>Full-stack Developer</h2>
        <p className="mb-2 mt-4 max-w-xs leading-normal text-base">Empowering possibilities, one pixel at a time.</p>
      </section>
    </div>
  );

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div >
        {nameHeader}
        <Navigation activeSection={activeSection} onSectionClick={onSectionClick} />
      </div>
      <div className="bg-transparent w-full h-auto py-8 flex items-center justify-start gap-2 flex-wrap">
<ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
  <li className="mr-5 text-xs shrink-0">
    <a className="block hover:text-slate-200" href="https://github.com/duffelbagteesh" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
      <span className="sr-only">GitHub</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-8 w-8" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
          </path>
          </svg>
          </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/fernandes203/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                  </path>
                  </svg>
                  </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
            <a className="block hover:text-slate-200" href="https://www.behance.net/leticiafernand27/" target="_blank" rel="noreferrer noopener" aria-label="Behance (opens in a new tab)" title="Behance">
              <span className="sr-only">Behance</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z">
                  </path>
                </svg>
                  </a>
                  </li>
                  </ul>


      </div>
    </header>
  );
};

export default Header;
