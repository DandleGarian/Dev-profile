import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-md group hover:bg-gradient-to-r from-[#006572] to-accent-2'>
      <Image
        className='rounded-xl group-hover:opacity-10 object-contain'
        src={backgroundImg}
        alt='project image'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md-max:w-3/4'>
        <h3 className='text-lg tablet:text-xl lg:text-2xl text-text tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-md pt-sm+ text-text text-center'>{description}</p>
        <Link href={projectUrl}>
          <p className='text-center py-sm+ rounded-lg bg-text text-background font-bold text-base md:text-lg cursor-pointer md-max:w-1/2 md-max:mx-auto hover:scale-105 hover:bg-background hover:text-accent ease-in duration-75'>
            Check it out!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
