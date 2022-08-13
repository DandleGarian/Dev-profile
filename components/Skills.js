import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='mac-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} name={'HTML'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} name={'CSS'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} name={'Javascript'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'} name={'Tailwind'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} name={'React'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} name={'Github'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} name={'Liquid'} />
          <SkillCard src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'} name={'Git'} />
        </div>
      </div>
    </div>
  )
}

export default Skills
