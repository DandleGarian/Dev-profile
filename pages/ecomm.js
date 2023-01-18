import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projectImg from '../public/assets/carpathian.png';
import { RiRadioButtonFill } from 'react-icons/ri';

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
        <div className='top-[70%] absolute w-full left-[50%] right-[50%] max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-text z-10 p-sm md-max:px-md'>
          <h2 className='py-2'>Carpathian Outerwear</h2>
          <h3>Vanilla Javascript, Node JS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-sm md-max:px-md grid md:grid-cols-5 gap-lg pt-lg'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This one is (currently) not much to look at. The styles are rather
            ho-hum and going through a slow restyle. But the real gold of this
            is in the construction of a functioning backend client admin section
            where one may upload products and photos. Another impressive feature
            is the complex user database and production-grade authentication.
            This one opened my eyes to the rigors of setting up and maintaining
            a database. I took the challenging route by making everything
            bespoke. Instead of using a popular database, my database is a
            locally stored JSON file. It may not be the proper way to do it, but
            it sure was a great learning experience.
          </p>
          <button className='font-semibold px-lg py-sm mt-md mr-lg'>
            Demo
          </button>
          <a
            href='https://github.com/DandleGarian/ecomm-store'
            target='_blank'
            rel='noreferrer'
          >
            <button className='font-semibold px-lg py-sm mt-md'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl p-md'>
          <div className='p-sm'>
            <p className='text-center font-bold pb-sm'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Javascript
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Node JS
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Express
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Tailwind
                CSS
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
