import React from 'react';
import nature from './assets/1_odW0CyTVxMVt5s3yhjjOhw (1).png';

function File3() {
  return (
    <>
      <div className="bg-yellow-500 w-full grid grid-cols-1 gridcols-2 gridcols-3 gridcols-4 gap-4">
        <div className='bg-slate-500 p-5 w-full text-center'>1</div>
        <div className='bg-slate-500 p-5 w-full text-center'>2</div>
        <div className= 'bg-slate-500 p-5 w-full text-center'>3</div>
        <div className='bg-slate-500 p-5 w-full text-center'>4</div>
      </div>
      <img src={nature} className="lg:hidden" alt="nature"/>
    </>      
  );
}

export default File3;