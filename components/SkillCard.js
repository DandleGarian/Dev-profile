import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillCard = ({ src, name }) => {
  const skillVariants = {
    initial: {
      opacity: 0,
      rotateX: 65,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 1,
      rotateX: '-65',
    },
  };
  return (
    <motion.div
      variants={skillVariants}
      initial='initial'
      whileInView='animate'
      exit='exit'
      className='p-md+ shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    >
      <div className='grid grid-cols-2 gap-md justify-center items-center'>
        <div className='m-auto'>
          <Image src={src} alt={name} height={64} width={64} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-lg'>{name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
