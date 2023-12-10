import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin,FaMobile, } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className='h-[50vh] bg-white'>

<div className='bg-yellow-400'><h1 className='text-5xl'>Contact</h1>
</div>

<div className='bg-blue-500 h-full flex '>

<div className=' flex flex-col gap-4 mb-4 ml-3 mt-5 text-2xl'>

<div className='rounded-2xl bg-white p-1 w-8'><FaFacebookF/></div>
<div className='rounded-2xl bg-white p-1 w-8'><FaTwitter/></div>
<div className='rounded-2xl bg-white p-1 w-8'><AiFillInstagram/></div>
<div className='rounded-2xl bg-white p-1 w-8'><FaLinkedin/></div>
<div className='rounded-2xl bg-white p-1 w-8'><FaMobile/></div>
<div className='rounded-2xl bg-white p-1 w-8'><MdLocationOn/></div>

</div>

<div className=' flex flex-col gap-3 mb-4 ml-10 mt-5 text-lg'>

<div className='rounded-2xl  bg-white p-1 w-fit '>Follow me on facebook</div>
<div className='rounded-2xl bg-white p-1  w-fit'>Follow me on twitter</div>
<div className='rounded-2xl bg-white p-1  w-fit'>Follow me on instagram</div>
<div className='rounded-2xl bg-white p-1  w-fit'>Follow me on linkedin</div>
<div className='rounded-2xl bg-white p-1  w-fit'>+91 9398888520</div>
<div className='rounded-2xl bg-white p-1  w-fit'>Dilsuknagar,500060</div>
</div>

</div>



    </div>
  )
}

export default Contact