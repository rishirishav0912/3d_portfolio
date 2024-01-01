import React from 'react';
import {Html,useProgress} from '@react-three/drei';

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p className='text-[14px] text-[#f1f1f1] mt-40 font-extrabold'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader