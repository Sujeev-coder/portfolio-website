import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Body1 = () => {
  return (
    <div className='bg-white w-full h-full md:flex'>

<div className='bg-red-500 h-1/2 p-14 md:h-full md:w-1/2'>



<div className='mb-4'>
    
    <h1 className='text-2xl '>Hi I am</h1>
    <h1 className='text-3xl'>Sujeev John</h1>
    <h1 className='text-md'>and I am a <span className='text-blue-500'>Frontened Developer</span></h1>
    </div>
<div className='flex gap-3 mb-4 text-2xl'>

<div className='rounded-2xl bg-white p-1'><FaFacebookF/></div>
<div className='rounded-2xl bg-white p-1'><FaTwitter/></div>
<div className='rounded-2xl bg-white p-1'><AiFillInstagram/></div>
<div className='rounded-2xl bg-white p-1'><FaLinkedin/></div>

</div>

<div>

<button className='bg-white rounded-md p-2 text-xl'>Download CV</button>

</div>



</div>
<div className='bg-blue-500 h-1/2 md:h-full md:w-1/2'></div>


    </div>
  )
}

export default Body1;