import React, { useRef, useEffect } from 'react';
import { drawGridAndAxes, drawFigure } from '../shapes';

const Canvas = ({ figures, onMouseMove }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw grid and axes
    drawGridAndAxes(ctx, canvas.width, canvas.height);

    // Draw all figures
    figures.forEach(figure => {
      drawFigure(ctx, figure, centerX, centerY);
    });
  }, [figures]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseMove={onMouseMove}
      style={{
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '6px',
        display: 'block'
      }}
    />
  );
};

export default Canvas; 