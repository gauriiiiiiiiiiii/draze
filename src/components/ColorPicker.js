import React from 'react';
import { Box, Typography, Slider } from '@mui/material';

const ColorPicker = ({ color, onColorChange, lineWidth, onLineWidthChange }) => {
  const presetColors = [
    '#000000', // Black
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFA500', // Orange
    '#800080', // Purple
    '#008000', // Dark Green
    '#800000', // Maroon
    '#000080', // Navy
  ];

  const handleColorClick = (selectedColor) => {
    onColorChange(selectedColor);
  };

  const handleCustomColorChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#f8f9fa', borderRadius: 2, mb: 2 }}>
      {/* Color Bar */}
      <Box sx={{ 
        mb: 3,
        p: 2,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        border: '2px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ 
          width: 60,
          height: 60,
          backgroundColor: color,
          borderRadius: '8px',
          border: '3px solid #e2e8f0',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ 
            fontFamily: "'Poppins', sans-serif",
            color: '#2d3748',
            fontWeight: 600,
            mb: 0.5
          }}>
            Current Color
          </Typography>
          <input
            type="color"
            value={color}
            onChange={handleCustomColorChange}
            style={{
              width: '100%',
              height: '40px',
              padding: '2px',
              border: '2px solid #e2e8f0',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#ffffff'
            }}
          />
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ 
          mb: 1.5,
          fontFamily: "'Poppins', sans-serif",
          color: '#2d3748',
          fontWeight: 600
        }}>
          Preset Colors
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: 1.5,
          mb: 2
        }}>
          {presetColors.map((presetColor) => (
            <Box
              key={presetColor}
              onClick={() => handleColorClick(presetColor)}
              sx={{
                width: 40,
                height: 40,
                backgroundColor: presetColor,
                borderRadius: '50%',
                cursor: 'pointer',
                border: color === presetColor ? '3px solid #4a5568' : '2px solid #e2e8f0',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ 
          mb: 1.5,
          fontFamily: "'Poppins', sans-serif",
          color: '#2d3748',
          fontWeight: 600
        }}>
          Line Width: {lineWidth}px
        </Typography>
        <Slider
          value={lineWidth}
          onChange={(_, value) => onLineWidthChange(value)}
          min={1}
          max={20}
          step={1}
          marks
          sx={{
            color: color,
            '& .MuiSlider-thumb': {
              width: 28,
              height: 28,
            },
            '& .MuiSlider-track': {
              height: 8,
            },
            '& .MuiSlider-rail': {
              height: 8,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ColorPicker; 