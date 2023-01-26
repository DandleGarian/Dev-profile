import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-sm py-2xl w-full'>
        <p className='text-xl tracking-widest uppercase text-accent'>Contact</p>
        <h2 className='py-md'>Get in touch</h2>
        <div className='grid lg:grid-cols-5 gap-lg'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-md'>
            <div className='lg:p-md h-full'>
              <div>
                <img
                  src='https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt='contact'
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                />
              </div>
              <div>
                <h2 className='py-sm'>Dan Dulgerian</h2>
                <p>Web Developer | Shopify Developer</p>
                <p className='py-md'>
                  Available for freelance or full-time positions. Interested in
                  reaching out?
                </p>
              </div>
              <div>
                <p className='uppercase pt-lg font-semibold'>Connect with me</p>
                <div className='flex items-center justify-between py-md'>
                  <a
                    href='https://www.linkedin.com/in/daniel-dulgerian/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/DandleGarian'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <div className='rounded-full shadow-lg p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-md'>
            <div className='p-md'>
              <form name='contact' netlify>
                <div className='grid md:grid-cols-2 gap-md w-full py-sm'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm+ font-semibold py-sm'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      className='border-2 rounded-lg p-sm+ flex border-accent text-background'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm+ font-semibold py-sm'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      className='border-2 rounded-lg p-sm+ flex border-accent text-background'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-sm'>
                  <label className='uppercase text-sm+ font-semibold py-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='border-2 rounded-lg p-sm+ flex border-accent text-background'
                    required
                  />
                </div>
                <div className='flex flex-col py-sm'>
                  <label className='uppercase text-sm+ font-semibold py-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    className='border-2 rounded-lg p-sm+ flex border-accent text-background'
                  />
                </div>
                <div className='flex flex-col py-sm'>
                  <label className='uppercase text-sm+ font-semibold py-2'>
                    Message
                  </label>
                  <textarea
                    className='border-2 rounded-lg p-sm+ border-accent text-background'
                    rows='10'
                    required
                  ></textarea>
                </div>
                <button type='submit' className='mt-4 w-full p-4 font-semibold'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-xl'>
          <Link href='/'>
            <div className='rounded-full shadow-lg p-md+ cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                size={30}
                className='m-auto text-accent'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
