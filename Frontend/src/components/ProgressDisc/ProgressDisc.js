import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const CustomClipLoader = () => {

  return (
    <ClipLoader className='clip-loader' size={24} cssOverride={{borderColor:"#5E5ADB #5E5ADB transparent", borderWidth:"4px"}} />
  );
};

export default CustomClipLoader;
