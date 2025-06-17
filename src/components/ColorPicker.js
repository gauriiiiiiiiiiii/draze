import React from 'react';
import { Box, Typography, Slider } from '@mui/material';

/**
 * ColorPicker component that provides color selection and line width control
 * Features preset colors, custom color picker, and line width slider
 * 
 * @param {string} color - Current selected color
 * @param {function} onColorChange - Callback for color changes
 * @param {number} lineWidth - Current line width
 * @param {function} onLineWidthChange - Callback for line width changes
 */
const ColorPicker = ({ color, onColorChange, lineWidth, onLineWidthChange }) => {
  // Array of preset colors for quick selection
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

  /**
   * Handles click on preset color
   * @param {string} selectedColor - The color that was clicked
   */
  const handleColorClick = (selectedColor) => {
    onColorChange(selectedColor);
  };

  /**
   * Handles change in custom color picker
   * @param {Event} e - The change event from the color input
   */
  const handleCustomColorChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#f8f9fa', borderRadius: 2, mb: 2 }}>
      {/* Current color display and custom color picker */}
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
        {/* Color preview box */}
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
          {/* Custom color input */}
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
      
      {/* Preset colors grid */}
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

      {/* Line width control slider */}
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