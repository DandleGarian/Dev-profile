import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projectImg from '../public/assets/elizabet.png';
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
          <h2 className='py-2'>ElizaBet Online Store</h2>
          <h3>Shopify Theme</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-sm md-max:px-md grid md:grid-cols-5 gap-lg pt-lg'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            After acquiring the basics of web development, e-commerce seemed
            like a trusty route. Shopify was the leading platform at the time
            and Online Store 2.0 had just been released. The timing was perfect
            for me to take on an Online Store 2.0 course. There were so many
            positives to this course. I learned the core theme architecture,
            worked with JSON templates, navigated the Shopify store admin and
            got a crash course in Tailwind CSS. ElizaBet Online Store, named
            after my beloved cats, was built entirely from scratch. The
            construction gave me invaluable insight into how sections and
            templates interact and how they piece together the entire theme.
            Being able to focus on those core elements in a spare code base
            saved me from the overwhelming size and intricacy of Shopify's Dawn
            theme. Without first having worked on this project, my Shopify
            developer journey would have gotten off to a much rockier start.
          </p>
          <button className='hidden font-semibold px-lg py-sm mt-md mr-lg'>
            Demo
          </button>
          <a
            href='https://github.com/DandleGarian/elizabet-shopify-theme'
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
                <RiRadioButtonFill className='pr-xs text-accent-2' /> Shopify
                Liquid
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
