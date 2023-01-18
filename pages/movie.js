import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projectImg from '../public/assets/movie.png';
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
          <h2 className='py-2'>Movie Quiz</h2>
          <h3>Vanilla Javascript</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-sm md-max:px-md grid md:grid-cols-5 gap-lg pt-lg'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            When I first started my code journey, one thing was made clear.
            Javascript is king. At the heart of all the trendy frameworks and
            templating languages Javascript is pumping blood through all the
            arteries. Thus, I have focused considerable time learning the ins
            and outs of the world's leading programming language. In one of the
            several courses I took, we made a multiple -choice quiz app. The
            original is quite boring, to be honest. For my version, I chucked
            the local JSON file of questions and answers and instead wired my
            app up to The Open Movie Database's API. This one was perfectly
            suited to my abilities at the time of building, so it felt like a
            cumulative test in beginner JS and, boy, I was acing it. If I could
            change one thing here, I would find an API with some easier
            questions. Most of my quiz takers score a dismal 30% or below. So
            this is a great one for movie fans with way too much useless
            knowledge -- like me!
          </p>
          <button className='font-semibold px-lg py-sm mt-md mr-lg'>
            Demo
          </button>
          <a
            href='https://github.com/DandleGarian/quiz-app'
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
                <RiRadioButtonFill className='pr-xs text-accent-2' /> CSS
              </p>
              <p className='py-sm flex items-center'>
                <RiRadioButtonFill className='pr-xs text-accent-2' /> HTML
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
