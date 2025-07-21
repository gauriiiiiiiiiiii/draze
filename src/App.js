import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import './styles/App.css';

/**
 * Main application component that handles the drawing canvas and its functionality
 * Manages drawing state, undo/redo operations, and canvas manipulation
 */
function App() {
  // State management for drawing properties
  const [color, setColor] = useState('#000000');      // Current drawing color
  const [lineWidth, setLineWidth] = useState(5);      // Current line width
  const [isDrawing, setIsDrawing] = useState(false);  // Drawing state flag
  const [undoStack, setUndoStack] = useState([]);     // Stack for undo operations
  const [redoStack, setRedoStack] = useState([]);     // Stack for redo operations
  
  // Canvas references for direct manipulation
  const canvasRef = useRef(null);      // Reference to canvas element
  const contextRef = useRef(null);     // Reference to canvas context

  /**
   * Initialize canvas and drawing context
   * Sets up canvas size and initial drawing properties
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    // Set canvas size to match container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');
    // Configure drawing context with initial settings
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;

    // Save initial blank state for undo functionality
    saveToUndoStack();
  }, []);

  /**
   * Saves current canvas state to undo stack
   * Clears redo stack when new action is performed
   */
  const saveToUndoStack = () => {
    if (canvasRef.current) {
      const imageData = canvasRef.current.toDataURL();
      setUndoStack(prev => [...prev, imageData]);
      setRedoStack([]); // Clear redo stack when new action is performed
    }
  };

  /**
   * Drawing event handlers
   */
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const finishDrawing = () => {
    if (isDrawing) {
      contextRef.current.closePath();
      setIsDrawing(false);
      saveToUndoStack();
    }
  };

  /**
   * Canvas manipulation functions
   */
  const clearCanvas = () => {
    if (canvasRef.current) {
      const context = contextRef.current;
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      saveToUndoStack();
    }
  };

  /**
   * Undo the last drawing action
   * Moves current state to redo stack and restores previous state
   */
  const undo = () => {
    if (undoStack.length > 1) {
      const newUndoStack = [...undoStack];
      const currentState = newUndoStack.pop();
      setRedoStack(prev => [...prev, currentState]);
      setUndoStack(newUndoStack);
      
      const img = new Image();
      img.src = newUndoStack[newUndoStack.length - 1];
      img.onload = () => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        contextRef.current.drawImage(img, 0, 0);
      };
    }
  };

  /**
   * Redo the last undone action
   * Restores the most recent state from redo stack
   */
  const redo = () => {
    if (redoStack.length > 0) {
      const newRedoStack = [...redoStack];
      const nextState = newRedoStack.pop();
      setRedoStack(newRedoStack);
      setUndoStack(prev => [...prev, nextState]);
      
      const img = new Image();
      img.src = nextState;
      img.onload = () => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        contextRef.current.drawImage(img, 0, 0);
      };
    }
  };

  /**
   * Save current canvas state as PNG image
   */
  const saveCanvas = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'drawing.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  // Update context when color changes
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
    }
  }, [color]);

  // Update context when line width changes
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.lineWidth = lineWidth;
    }
  }, [lineWidth]);

  return (
    <Box className="app-container">
      {/* Sidebar with color picker and tools */}
      <Sidebar 
        color={color} 
        onColorChange={setColor} 
        lineWidth={lineWidth} 
        onLineWidthChange={setLineWidth} 
      />
      
      {/* Main content area with canvas */}
      <Box className="main-content">
        <Box className="canvas-container">
          <Box className="canvas-header">
            Drawing Canvas
          </Box>
          <Box className="canvas-area">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={finishDrawing}
              onMouseLeave={finishDrawing}
            />
          </Box>
        </Box>
        
        {/* Control buttons for canvas manipulation */}
        <Box className="controls">
          <button 
            className="control-button undo" 
            onClick={undo} 
            disabled={undoStack.length <= 1}
          >
            Undo
          </button>
          <button 
            className="control-button redo" 
            onClick={redo} 
            disabled={redoStack.length === 0}
          >
            Redo
          </button>
          <button className="control-button clear" onClick={clearCanvas}>
            Clear
          </button>
          <button className="control-button save" onClick={saveCanvas}>
            Save
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default App; 