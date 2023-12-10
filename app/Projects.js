import React from 'react'
import '../styles/fonts.css';

const Projects = () => {
  return (
    <div>

      <div id='projects' className='bg-white'><h1 className='text-5xl'>Projects</h1></div>

      <div className=''>

        <div className='w-60 bg-white ml-7 mt-5 h-[300px] mb-14 '>

          <div className='h-1/3 bg-blue-500  '></div>
          <div className='h-[70%] bg-red-500 '></div>

        </div>

        <div className='w-60 bg-white ml-7 mt-5 h-[300px] mb-14 '>

          <div className='h-1/3 bg-blue-500 '></div>
          <div className='h-[70%] bg-red-500 '></div>


        </div>

        <div className='w-60 bg-white ml-7 mt-5 h-[300px] mb-12'>

          <div className='h-1/3 bg-blue-500 '></div>
          <div className='h-[70%] bg-red-500 '></div>

        </div>

      </div>
    </div>
  )
}

export default Projects