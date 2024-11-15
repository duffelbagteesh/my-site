// src/components/ProcessingProjectsList.tsx
import React from 'react';
import p5 from 'p5';

const projects = [
  {
    title: "Color Maze",
    description: "Navigate the maze using the arrow keys.",
    sketch: (p: p5) => {
      let mazeColor: p5.Color, dotColor: p5.Color, finishColor: p5.Color;
      let x = 20;
      let y = 20;

      p.setup = () => {
        p.createCanvas(800, 800); // Set canvas size to desired dimensions
        mazeColor = p.color(33, 248, 245);
        dotColor = p.color(2, 1, 106);
        finishColor = p.color(255, 0, 0);
      };

      p.draw = () => {
        p.background(0);
        p.noStroke();
        p.fill(mazeColor);
        p.rect(0, 0, 500, 50);
        p.rect(450, 40, 50, 150);
        p.rect(500, 140, 100, 50);
        p.rect(550, 40, 50, 150);
        p.rect(550, 40, 160, 50);
        p.rect(680, 40, 50, 230);
        p.rect(380, 230, 350, 50);
        p.rect(330, 130, 50, 150);
        p.rect(180, 100, 200, 50);
        p.rect(180, 100, 50, 200);
        p.rect(80, 300, 150, 50);
        p.rect(50, 300, 50, 150);
        p.rect(50, 400, 400, 50);
        p.rect(450, 400, 50, 200);
        p.fill(finishColor);
        p.rect(450, 550, 50, 50);

        let bounds = p.red(p.get(x, y));
        p.fill(dotColor);
        p.noStroke();
        p.ellipse(x, y, 20, 20);
        if (bounds == 0) {
          x = 20;
          y = 20;
        }
        if (x > 455 && x < 495 && y > 550) {
          p.fill(255);
          p.textSize(65);
          p.text("yay! you did it!", 200, 650);
          p.textSize(30);
          p.text("mouse click to play again", 200, 695);
        }
        if (p.mouseIsPressed) {
          x = 20;
          y = 20;
        }

        // Continuous movement when holding down arrow keys
        if (p.keyIsDown(p.UP_ARROW)) {
          y -= 10;
        }
        if (p.keyIsDown(p.DOWN_ARROW)) {
          y += 10;
        }
        if (p.keyIsDown(p.LEFT_ARROW)) {
          x -= 10;
        }
        if (p.keyIsDown(p.RIGHT_ARROW)) {
          x += 10;
        }
      };

      // Removed windowResized function to keep window size fixed
    },
  },
  // Add more projects as needed
];

const ProcessingProjectsList: React.FC = () => {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Processing Projects</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border-b border-gray-300 pb-4">
            <h2
              className="text-xl font-semibold text-blue-500 cursor-pointer"
              onClick={() => openSketchWindow(project.sketch, project.title)}
            >
              {project.title}
            </h2>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessingProjectsList;