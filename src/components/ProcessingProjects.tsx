// src/components/ProcessingProjects.tsx
import React from 'react';
import ProcessingProjectCard from './ProcessingProjectCard';
import p5 from 'p5';

const ProcessingProjects: React.FC = () => {
  const sketch1 = (p: p5) => {
    let mazeColor: p5.Color, dotColor: p5.Color, finishColor: p5.Color;
    let x = 20;
    let y = 20;

    p.setup = () => {
      p.createCanvas(800, 800);
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
    };

    p.keyPressed = () => {
      if (p.keyCode === p.UP_ARROW) {
        y -= 10;
      } else if (p.keyCode === p.DOWN_ARROW) {
        y += 10;
      } else if (p.keyCode === p.LEFT_ARROW) {
        x -= 10;
      } else if (p.keyCode === p.RIGHT_ARROW) {
        x += 10;
      }
    };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      <h2 className="lg:hidden">Processing Projects</h2>
      <div>
        <ProcessingProjectCard
          title="Color Maze"
          description="Navigate the maze using the arrow keys."
          sketch={sketch1}
        />
      </div>
      {/* Add more ProcessingProjectCard components as needed */}
    </div>
  );
};

export default ProcessingProjects;