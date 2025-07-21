import React from 'react';

const CodePreview = ({ figures }) => {
  return (
    <div className="code-preview-column">
      <div className="head-label-small">Code Preview</div>
      <textarea
        id="codePreviewArea"
        readOnly
        value={JSON.stringify(figures, null, 2)}
      />
    </div>
  );
};

export default CodePreview; 