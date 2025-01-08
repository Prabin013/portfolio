import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = ({ id }: { id: string }) => {
  return (

    <div className='flex flex-col items-center justify-center py-20 gap-10'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div id={id} className=' flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/calculatorapp.png'
          title='Calculator Next.js webapp'
          description='Basic calculator that does calculation with beautiful gradient background'
        />
      </div>
      <div id={id} className=' flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/weatherapp.png'
          title='Weather Next.js webapp'
          description='Basic weather app which takes in input of the location and uses api to fetch weather info'
        />
      </div>

    </div>
  )
}

export default Projects