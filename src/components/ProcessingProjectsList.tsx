// src/components/ProcessingProjectsList.tsx
import React from 'react';
import p5 from 'p5';
import { sketches } from './P5Sketch';
import { useRouter } from 'next/router';
import SimpleLayout from './SimpleLayout';

const ProcessingProjectsList: React.FC = () => {
  const router = useRouter();

  const openSketchWindow = (sketch: (p: p5) => void, title: string) => {
    const sketchWindow = window.open("", "_blank", "width=800,height=800");
    if (sketchWindow) {
      sketchWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
              body { margin: 0; overflow: hidden; background: #000; }
              #sketch-container {  }
              canvas { display: block; }
            </style>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
          </head>
          <body>
            <div id="sketch-container"></div>
            <script>
              console.log('p5.js library loaded.');
              new p5(${sketch.toString()}, 'sketch-container');
            </script>
          </body>
        </html>
      `);
      sketchWindow.document.close();
    }
  };

  return (
    <SimpleLayout>
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-8">Processing Projects</h1>
      <ul className="space-y-8">
        {sketches.map((project, index) => (
          <li key={index} className="border-b border-gray-300 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h2
                  className="text-xl font-semibold text-blue-500 cursor-pointer hover:underline"
                  onClick={() => openSketchWindow(project.sketch, project.title)}
                >
                  {project.title}
                </h2>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
              <button
                className="text-sm text-blue-500 hover:underline"
                onClick={() => openSketchWindow(project.sketch, project.title)}
              >
                View Sketch
              </button>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ProcessingProjectsList;