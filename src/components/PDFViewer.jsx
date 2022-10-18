import React from 'react';
import pdf from '../assets/Resume.pdf';

const PDFViewer = () => {
  return (
    <div class='pdf-root'>
      <iframe src={`${pdf}#view=fitH`} class='pdf-viewer' frameborder='0' />;
    </div>
  );
};

export default PDFViewer;
