import Image from 'next/image';
import React from 'react';
import projectImg from '../public/assets/project.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const rgb = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          src={projectImg}
          alt='/'
          layout='fill'
          objectFit='cover'
          className='absolute z-1'
        />
        <div className='top-[70%] absolute w-full left-[50%] right-[50%] max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-text z-10 p-2'>
          <h2 className='py-2'>Guess the RGB Color Game</h2>
          <h3>Vanilla Javascript</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-sm grid md:grid-cols-5 gap-lg pt-lg'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            accusamus harum dignissimos minima nihil quam voluptate hic
            assumenda itaque quasi enim impedit modi est voluptatem fuga, iusto,
            quaerat, a cum nulla. Quisquam eaque dolore, pariatur fuga id esse
            optio odit sequi quia impedit recusandae neque soluta, sit possimus!
            Voluptatum, delectus?
          </p>
          <button className='font-semibold px-lg py-sm mt-md mr-lg'>
            Demo
          </button>
          <button className='font-semibold px-lg py-sm mt-md'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-md'>
          <div className='p-sm'>
            <p className='text-center font-bold pb-sm'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Javascript
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Javascript
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Javascript
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default rgb;
