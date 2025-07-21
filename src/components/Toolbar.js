import React from 'react';
import { 
  AppBar, Toolbar as MuiToolbar, Typography, IconButton
} from '@mui/material';
import {
  Undo as UndoIcon,
  Redo as RedoIcon,
  Delete as DeleteIcon,
  Help as HelpIcon,
  Code as CodeIcon
} from '@mui/icons-material';

const Toolbar = ({ onUndo, onRedo, onDelete }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <MuiToolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Draze Visualizer
        </Typography>
        <IconButton onClick={onUndo} sx={{ color: 'white' }}>
          <UndoIcon />
        </IconButton>
        <IconButton onClick={onRedo} sx={{ color: 'white' }}>
          <RedoIcon />
        </IconButton>
        <IconButton onClick={onDelete} sx={{ color: 'white' }}>
          <DeleteIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <CodeIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <HelpIcon />
        </IconButton>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar; 