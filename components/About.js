import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>MEEE!!!</p>
          <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime nemo deserunt officiis vel quos unde, expedita et, debitis facere delectus eligendi distinctio aspernatur iusto fugiat quo neque nam quidem ab voluptatem laborum. Natus officia omnis incidunt unde odio fugit.</p>
          <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae et molestiae ea dolores quisquam nam atque commodi dolor, ratione voluptates! Autem architecto temporibus, velit praesentium debitis necessitatibus repellat quibusdam minima id suscipit deserunt tempore qui quo! Sint iste obcaecati atque!</p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my work</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='object-cover rounded-xl' src='/../public/assets/photo.jpg' alt='/' height='300' width='250' />
        </div>
      </div>
    </div>
  )
}

export default About
