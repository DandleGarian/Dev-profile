import React from 'react'
import rgbImg from '../public/assets/rgb.png'
import carpImg from '../public/assets/carpathian.png'
import ebImg from '../public/assets/elizabet.png'
import movieImg from '../public/assets/movie.png'
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
            backgroundImg={rgbImg}
            description='Vanilla Javascript Project'
            projectUrl='/rgb'
          />
          <ProjectCard
            title='Carpathian Outerwear'
            backgroundImg={carpImg}
            description='Ecommerce Store'
            projectUrl='/ecomm'
          />
          <ProjectCard
            title='Movie Quiz'
            backgroundImg={movieImg}
            description='Vanilla Javascript Project'
            projectUrl='/movie'
          />
          <ProjectCard
            title='ElizaBet Store'
            backgroundImg={ebImg}
            description='Custom Built Shopify Theme'
            projectUrl='/shopify'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
