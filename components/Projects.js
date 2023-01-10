import React from 'react'
import projectImg from '../public/assets/project.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-sm py-2xl'>
        <p className='text-xl uppercase tracking-widest text-accent'>Projects</p>
        <h2 className='py-md'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-lg'>
          <ProjectCard
            title='Guess the RGB Color Game'
            backgroundImg={projectImg}
            description='Vanilla Javascript Project'
            projectUrl='/rgb'
          />
          <ProjectCard
            title='Guess the RGB Color Game'
            backgroundImg={projectImg}
            description='Vanilla Javascript Project'
            projectUrl='/rgb'
          />
          <ProjectCard
            title='Guess the RGB Color Game'
            backgroundImg={projectImg}
            description='Vanilla Javascript Project'
            projectUrl='/rgb'
          />
          <ProjectCard
            title='Guess the RGB Color Game'
            backgroundImg={projectImg}
            description='Vanilla Javascript Project'
            projectUrl='/rgb'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
