// components/P5Sketch.tsx
import p5 from 'p5';

export const sketch1 = (p: p5) => {
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
};
// Add more projects as needed
export const sketch2 = (p: p5) => {
  let R = 5;
  let g = 100;
  let B = 5;
  let moveright = 0;
  let speedFactor = 3; // Factor to make both road markings and buildings move faster

  let stars: Stars[] = [];
  let r: Road;
  let car1: p5.Image;
  let car2: p5.Image;

  let car1_speed: number;
  let car2_speed: number;

  let car1xPos = 600;
  let car2xPos = 600;

  let hue = 233;

  let bright = [10, 10, 10, 15, 20, 30, 30, 40, 55, 65, 80, 90, 100, 100, 100, 90, 80, 70, 60, 50, 40, 30, 20];
  let bBright = [30, 30, 30, 25, 25, 20, 20, 15, 10, 10, 10, 5, 0, 0, 0, 0, 5, 10, 15, 20, 25, 30, 30, 20];

  let testHours = 23;
  let testing = false;

  let b: Building[] = [];
  let b2: Building[] = [];
  let b3: Building[] = [];

  let b1s = 2.5 * speedFactor; // Adjusted speed for smoother movement
  let b2s = 5 * speedFactor;   // Adjusted speed for smoother movement
  let b3s = 7.5 * speedFactor; // Adjusted speed for smoother movement

  p.preload = () => {
    car1 = p.loadImage("/4-45420_cars-race-car-clipart-for-kids-free-clipart.png");
    car2 = p.loadImage("/SV_FERRARI_488_GTB_CUTOUT.png");
  };

  p.setup = () => {
    p.createCanvas(1100, 800);
    p.frameRate(60); // Increase frame rate for smoother animations
    p.colorMode(p.HSB, 360, 100, 100, 100);

    r = new Road();

    car1_speed = p.random(4, 15); // Adjusted speed for smoother movement
    car2_speed = p.random(4, 15); // Adjusted speed for smoother movement

    for (let i = 0; i < 400; i++) {
      stars.push(new Stars(p));
    }

    for (let i = 0; i < 30; i++) {
      b.push(new Building(p));
      b[i].xPos = p.random(5000);
      b[i].yPos = p.height * 2 / 3 - b[i].h + 100; // Moved buildings down
    }

    for (let j = 0; j < 20; j++) {
      b2.push(new Building(p));
      b2[j].xPos = p.random(5000);
      b2[j].yPos = p.height * 2 / 3 - b2[j].h + 100; // Moved buildings down
    }

    for (let k = 0; k < 15; k++) {
      b3.push(new Building(p));
      b3[k].xPos = p.random(5000);
      b3[k].yPos = p.height * 2 / 3 - b3[k].h + 100; // Moved buildings down
    }
  };

  p.draw = () => {
    let hours = p.hour();
    if (testing) {
      hours = testHours;
    }

    p.background(200, 120, bright[hours]);

    for (let a = 0; a < p.height; a++) {
      p.stroke(a, g, B, bBright[hours]);
      p.line(0, a, p.width, a);
    }

    p.randomSeed(p.second());
    for (let m = 0; m < stars.length; m++) {
      if (hours >= 0 && hours <= 6 || hours >= 21 && hours <= 23) {
        stars[m].size = p.random(0, 4);
      }
      stars[m].display();
    }

    for (let i = 0; i < b.length; i++) {
      b[i].display(hue, 60, 30 - bBright[hours]);
      b[i].update(b1s); // Adjust speed for the first set of buildings
    }

    for (let j = 0; j < b2.length; j++) {
      b2[j].display(hue, 75, 65 - bBright[hours]);
      b2[j].update(b2s);
    }

    for (let k = 0; k < b3.length; k++) {
      b3[k].display(hue, 75, 100 - bBright[hours]);
      b3[k].update(b3s);
    }

    r.display(bBright[hours]);

    if (moveright < 0) {
      moveright = p.width;
    }

    p.fill(55, 65, 95);
    let roadMarkingY = 705;
    for (let i = -1100; i <= 1100; i += 100) {
      p.rect(moveright + i, roadMarkingY, 50, 10);
    }

    moveright -= (1.7 * speedFactor); // Adjusted speed for smoother movement

    p.tint(0, 0, 100 - bBright[hours]);
    p.image(car1, car1xPos, 600, 245, 88); // Positioned car1 above the road
    p.image(car2, car2xPos, 700, 265, 85); // Positioned car2 below the road

    car1xPos -= car1_speed;
    car2xPos -= car2_speed;

    if (car1xPos < -5000) {
      car1xPos = 5000;
    }

    if (car2xPos < -5000) {
      car2xPos = 5000;
    }
  };

  class Road {
    x: number = 0;
    y: number = 600;
    w: number = 1100;
    h: number;

    constructor() {
      this.h = 200;
    }

    display(bright: number) {
      p.noStroke();
      p.fill(100);
      p.rect(0, 600, p.width, 200);

      p.fill(0, 0, 70 - bright);
      p.rect(this.x, this.y, this.w, this.h);
      p.fill(0, 0, 40 - bright);
      p.rect(this.x, this.y, this.w, this.h - 160);
      p.fill(0, 0, 60 - bright);
      p.rect(this.x, this.y, this.w, this.h - 170);
    }
  }

  class Building {
    h: number;
    w: number;
    h2: number;
    w2: number;
    xPos: number = 5000;
    yPos: number = 0;
    r: number;
    p: p5;

    constructor(p: p5) {
      this.p = p;
      this.h = p.random(50, 250);
      this.w = p.random(50, 150);
      this.h2 = p.random(20, 45);
      this.w2 = p.random(10, 30);
      this.r = 2;
    }

    display(hue: number, sat: number, bright: number) {
      this.p.noStroke();
      this.p.fill(hue, sat, bright);
      this.p.rect(this.p.map(this.xPos, 0, 5000, 0, this.p.width), this.yPos, this.w, this.h, this.r, this.r, 0, 0);
      this.p.fill(0);
      this.p.rect(this.p.map(this.xPos, 0, 5000, 0, this.p.width), this.yPos, this.w2 + 10, this.h2, this.r, this.r, 0, 0);
    }

    update(speed: number) {
      this.xPos -= speed;
      if (this.xPos < -this.w * 10) {
        this.xPos = 5000 + this.p.random(1000);
        this.w = this.p.random(50, 150);
      }
    }
  }

  class Stars {
    x3: number;
    y3: number;
    size: number = 1;
    p: p5;

    constructor(p: p5) {
      this.p = p;
      this.x3 = p.random(0, p.width);
      this.y3 = p.random(0, p.height);
    }

    display() {
      this.p.stroke(0, 0, 100);
      this.p.strokeWeight(this.p.random(0, 4));
      this.p.point(this.x3, this.y3);
    }
  }
};



export const sketches = [
  {
    title: "Color Maze",
    description: "Navigate the maze using the arrow keys.",
    sketch: sketch1,
  },
  {
    title: "Cityscape",
    description: "A dynamic cityscape with moving cars and changing sky.",
    sketch: sketch2,
  },
  // Add more sketches as needed
];