import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ColorPicker from './ColorPicker';

/**
 * Sidebar component that displays drawing properties and controls
 * Shows current color, line width, and provides color picker interface
 * 
 * @param {string} color - Current selected color
 * @param {function} onColorChange - Callback for color changes
 * @param {number} lineWidth - Current line width
 * @param {function} onLineWidthChange - Callback for line width changes
 */
const Sidebar = ({ color, onColorChange, lineWidth, onLineWidthChange }) => {
  return (
    <Box className="sidebar">
      {/* Header section with title */}
      <Typography variant="h6" sx={{ 
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: '1rem',
        marginBottom: '10px',
        color: '#2d3748',
        textAlign: 'center'
      }}>
        Figure Data
      </Typography>
      
      {/* Data display section showing current drawing properties */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 1.5,
          mb: 2,
          backgroundColor: '#f8f9fa',
          borderRadius: 1,
          border: '1px solid #e2e8f0',
          maxHeight: '120px',
          overflow: 'auto',
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          lineHeight: 1.4
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {JSON.stringify({
            color: color,
            lineWidth: lineWidth,
            timestamp: new Date().toISOString()
          }, null, 2)}
        </pre>
      </Paper>

      {/* Color picker component for color and line width controls */}
      <ColorPicker
        color={color}
        onColorChange={onColorChange}
        lineWidth={lineWidth}
        onLineWidthChange={onLineWidthChange}
      />
    </Box>
  );
};

export default Sidebar; 