import React from 'react';
import Image from 'next/image';
import headShot from '../public/assets/main-head-shot.jpg';
import animateLogo from '../public/assets/logo-dark-slide.png';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const mainVariants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: ['100%', '0%', '-100%'],
    transition: {
      duration: 1.7,
      type: 'tween',
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

const topTxtVariants = {
  initial: {
    y: '-300%',
  },
  animate: {
    y: ['-300%', '0%'],
    opacity: [0, 1],
    transition: {
      delay: 2.6,
      duration: 0.8,
      // type: 'tween',
    },
  },
};

const btmTextVariants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: ['100%', '0%'],
    opacity: [0, 1],
    transition: {
      delay: 2.6,
      duration: 0.8,
      // type: 'tween',
    },
  },
};

const Main = () => {
  const router = useRouter();
  return (
    <div
      id='home'
      className='w-full h-screen text-center relative overflow-hidden'
    >
      <motion.div
        className='absolute inset-0 bg-accent-2 w-screen h-screen z-[100]'
        variants={mainVariants}
        initial='initial'
        animate='animate'
        viewport={{ once: true }}
      >
        <div className='flex h-full w-full justify-center items-center'>
          <div className='px-4'>
            <Image src={animateLogo} />
          </div>
          {/* <div className='w-1/4 h-2 rounded-md mt-4 bg-background'></div> */}
          {/* <div className='w-1/4 h-2 rounded-md mb-4 bg-background'></div> */}
        </div>
      </motion.div>
      <div className='max-w-[1240px] w-full h-full mx-auto px-md pt-[6.2rem] relative grid sm-max:pb-md+'>
        <motion.div
          className='w-full max-h-[60%] tablet:w-3/5 tablet:max-h-[50rem] lg:w-2/4 lg:max-h-[60rem] h-full mx-auto min-h-0 col-span-full row-span-full relative'
          variants={imgVariants}
          initial='initial'
          animate='animate'
        >
          <Image
            className='object-cover rounded-[50%] !w-full !h-auto !relative'
            src={headShot}
            layout='fill'
            alt='Profile photo of Dan Dulgerian'
          />
        </motion.div>
        <div className='w-full h-full max-h-[80rem] flex flex-col justify-end col-span-full row-span-full'>
          <motion.div
            className='relative min-h-0'
            variants={topTxtVariants}
            initial='initial'
            animate='animate'
          >
            <h1>
              Hi, I'm <span className='text-accent-2'>Dan</span>
            </h1>
            <h1>A Web Developer</h1>
          </motion.div>
          <motion.div
            className='z-10 relative min-h-0'
            variants={btmTextVariants}
            initial='initial'
            animate='animate'
          >
            <p className='py-md max-w-[70%] mx-auto hidden md:block'>
              I'm a web developer and Shopify developer specializing in
              high-quality eCommerce stores. Currently, I'm busy elevating
              Shopify themes to new heights and exploring backend technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-md'>
              <a
                href='https://www.linkedin.com/in/daniel-dulgerian/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/DandleGarian'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-black p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
