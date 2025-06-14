import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ColorPicker from './ColorPicker';

const Sidebar = ({ color, onColorChange, lineWidth, onLineWidthChange }) => {
  return (
    <Box className="sidebar">
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