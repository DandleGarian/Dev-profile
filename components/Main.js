import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-sm flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm+ tracking-widest'>
            Let's build something
          </p>
          <h1 className='py-md'>
            Hi, I'm <span className='text-accent-2'>Dan</span>
          </h1>
          <h1 className='py-md'>A Web Developer</h1>
          <p className='py-md max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            rerum modi dolores totam ad eius quas accusantium error rem magnam,
            consequatur perspiciatis aliquam, reprehenderit quod?
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-md'>
            <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
