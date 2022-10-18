import React from 'react';
import pdf from '../assets/Resume.pdf';

const PDFViewer = () => {
  return <iframe src={`${pdf}#view=fitH`} class='pdf-viewer' frameborder='0' />;
};

export default PDFViewer;
