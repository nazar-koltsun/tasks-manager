import React from 'react';

import { cn } from '../lib/utils';

const ProgressBar = ({ value, max, className }) => {
  return (
    <progress 
      value={value} 
      max={max} 
      className= {cn('w-full h-[3px] appearance-none', className)}
    >
      Your browser does not support the progress element.
    </progress>
  );
};

export default ProgressBar;
