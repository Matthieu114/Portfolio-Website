import React from 'react';
import pdf from '../assets/Resume.pdf';

const PDFViewer = () => {
  return (
    <div className='pdf-root'>
      <iframe src={`${pdf}#view=fitH`} className='pdf-viewer' frameborder='0' title='CV' />;
    </div>
  );
};

export default PDFViewer;
