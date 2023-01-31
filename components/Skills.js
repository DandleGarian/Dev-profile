import { React, useRef } from 'react';
import SkillCard from './SkillCard';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  // const scrollProgress = useScroll();
  return (
    <div id='skills' className='w-full lg:h-screen p-sm'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-accent'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='perspective grid md:grid-cols-2 lg:grid-cols-4 gap-lg'>
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            }
            name={'HTML'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            }
            name={'CSS'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            }
            name={'Javascript'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
            }
            name={'Tailwind'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            }
            name={'React'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            }
            name={'Github'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
            }
            name={'Express'}
          />
          <SkillCard
            src={
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            }
            name={'Node'}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
