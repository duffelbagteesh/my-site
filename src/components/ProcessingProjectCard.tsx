// src/components/ProcessingProjectCard.tsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

type ProcessingProjectCardProps = {
  title: string;
  description: string;
  sketch: (p: p5) => void;
};

const ProcessingProjectCard: React.FC<ProcessingProjectCardProps> = ({ title, description, sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current!);
    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return (
    <div className="glass-effect text-black p-6 rounded-lg shadow-lg flex flex-col sm:flex-row">
      <div className="mb-4 sm:mr-4 sm:mb-0">
        <div ref={canvasRef}></div>
      </div>
      <div className="w-4/5">
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ProcessingProjectCard;