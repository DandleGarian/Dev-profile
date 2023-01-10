import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-md group hover:bg-gradient-to-r from-[#006572] to-accent-2">
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-text tracking-wider text-center'>{title}</h3>
        <p className='pb-md pt-3 text-text text-center'>{description}</p>
        <Link href={projectUrl}>
          <p className='text-center py-sm+ rounded-lg bg-text text-background font-bold text-lg cursor-pointer'>Check it out!</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
