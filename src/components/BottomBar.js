import React from 'react';

const BottomBar = ({ onDraw, onUndo, onRedo, onClear }) => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section left">
        <button className="btn draw-btn" onClick={onDraw}>
          Draw
        </button>
      </div>
      <div className="bottom-bar-section center">
        <button className="btn undo-btn" onClick={onUndo}>
          Undo
        </button>
        <button className="btn redo-btn" onClick={onRedo}>
          Redo
        </button>
      </div>
      <div className="bottom-bar-section right">
        <button className="btn clear-btn" onClick={onClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default BottomBar; 