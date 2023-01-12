import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center relative'>
      <div className='absolute inset-0 bg-accent-2 w-screen h-screen animate-slide-up-out z-[100]'>
        <div className='flex h-full w-full justify-center content-between'>
          <div className='w-1/4 h-2 rounded-md mt-4 bg-background'></div>
          <div className='w-1/4 h-2 rounded-md mb-4 bg-background'></div>
        </div>
      </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-sm flex justify-center items-center px-md relative'>
        <div className='w-full h-auto absolute top-20 animate-fade-in'>
          <Image
            className='object-cover rounded-full'
            src='/../public/assets/main-head-shot.jpg'
            alt='/'
            height='450'
            width='450'
          />
        </div>
        <div>
          <div className='animate-slide-down'>
            <p className='uppercase text-sm+ tracking-widest'>
              Let's build something
            </p>
            <h1 className='py-md'>
              Hi, I'm <span className='text-accent-2'>Dan</span>
            </h1>
            <h1 className='py-md'>A Web Developer</h1>
          </div>
          <p className='py-md max-w-[70%] m-auto animate-fade-in'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            rerum modi dolores totam ad eius quas accusantium error rem magnam,
            consequatur perspiciatis aliquam, reprehenderit quod?
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-md animate-slide-up'>
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
