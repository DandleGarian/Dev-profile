import React from 'react';
import Image from 'next/image';

const SkillCard = ({ src, name }) => {
  return (
    <div className='p-md+ shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-md justify-center items-center'>
        <div className='m-auto'>
          <Image src={src} alt={name} height={64} width={64} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-lg'>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
