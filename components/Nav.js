import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logoLight from '../public/assets/logo-light.png';
import logoDark from '../public/assets/logo-dark.png';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const navVariants = {
  initial: {
    y: '-100%',
  },
  animate: {
    y: '0%',
    transition: {
      delay: 2.4,
      duration: 0.3,
    },
  },
};

const Nav = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState('#002231');

  const [linkColor, setLinkColor] = useState('#e7ebfd');

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/rgb') {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#002231');
      setLinkColor('#e7ebfd');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <motion.div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
      variants={navVariants}
      initial='initial'
      animate='animate'
      viewport={{ once: true }}
    >
      <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
        <Link href='/'>
          <Image src={logoLight} alt='logo' width='190' height='45' />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-16 text-sm+ font-semibold uppercase hover:border-b'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-16 text-sm+ font-semibold uppercase hover:border-b'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-16 text-sm+ font-semibold uppercase hover:border-b'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-16 text-sm+ font-semibold uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-16 text-sm+ font-semibold uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[95%] sm:w-[60%] md:w-[45%] h-screen bg-accent-2 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src={logoDark} alt='logo' width='190' height='45' />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-md'>
              <p className='w-[85%] md:w-[90%] py-4 text-heading-text font-bold'>
                Let's build something
              </p>
            </div>
          </div>
          <div className='py-md flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='py-md text-base font-semibold'
                >
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='py-md text-base font-semibold'
                >
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='py-md text-base font-semibold'
                >
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='py-md text-base font-semibold'
                >
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-md text-base font-semibold'
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-heading-text font-bold'>
                Let's connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg p-sm+ cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg p-sm+ cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg p-sm+ cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg p-sm+ cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
