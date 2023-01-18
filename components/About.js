import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import headShot from '../public/assets/secondary-head-shot.jpg';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-sm flex items-center py-2xl'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-lg'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-accent'>About</p>
          <h2 className='py-md'>Who I Am</h2>
          <p className='py-sm'>A LITTLE BIT ABOUT MYSELF</p>
          <p className='py-sm'>
            My first coding experience came in the form of a little application
            called Turtle Academy. That's right, the children's programming
            education platform -- that Turtle Academy. You see, I was a primary
            school educator in the not so distant past. Teaching 7-year-olds to
            code is about as fun, frustrating and rewarding as learning HTML,
            CSS and Javascript as an adult. One year ago, it was clear my
            teaching career had run its course. I decided it was time to spin
            this little coding hobby into a new career.
          </p>
          <p className='py-sm'>
            Over the past year, I've happily devoted significant time to
            learning web development technologies. In June of 2022, I snagged my
            first job as a Shopify developer. Now I'm fully steeped in the
            exciting and ever-changing world of Shopify development. I'm looking
            forward to what new innovations will come next and continuing to
            deliver amazing themes to clients, new and old. When I'm not
            working, you'll likely find me whipping up zingy Asian-inspired
            dishes, watching too many 70s films or obsessing over my two cats
            with my life partner.
          </p>
          <Link href='/#projects'>
            <p className='py-sm underline cursor-pointer'>
              Check out some of my work
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-md hover:scale-105 ease-in duration-300'>
          <Image
            className='object-cover rounded-xl'
            src={headShot}
            alt='Profile photo of Daniel Dulgerian'
            height='300'
            width='250'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
