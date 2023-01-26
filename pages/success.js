import React from 'react';

const success = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center p-sm+'>
      <div className='flex flex-col justify-center items-center max-w-3xl bg-accent-3 p-sm md:p-md+ rounded-xl shadow-xl'>
        <h3 className='text-center'>Form successfully submitted!</h3>
        <h5>Thank you for your interest.</h5>
      </div>
    </div>
  );
};

export default success;
