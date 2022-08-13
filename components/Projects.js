import React from 'react'
import projectImg from '../public/assets/project.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
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
