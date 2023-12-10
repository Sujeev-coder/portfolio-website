'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from './Images/logo.jpg'
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';


function Nav() {

  const [show, setshow] = useState(false)

  const [buttonText, setbuttonText] = useState(true)

  return (
    <>

      <div id='nav-bar' className='bg-gradient-to-r from-blue-700 to-red-500   w-full h-fit flex items-center justify-between pl-16 text-2xl gap-10 font-bold '>

        <div className=' h-5 w-[60px] mb-10'> <Image
          src={logo}
          width={500}
          height={500}
          alt="Picture of the author"
          className='rounded-full'
        /></div>


        <div className='flex mr-10 max-[375px]:hidden'>

          <div className='w-fit h-[80px] hover:scale-125 transition ease-in-out duration-500 p-5 text-white'><Link href="/Home">Home</Link></div>
          <div className='w-fit h-[80px] hover:scale-125 transition ease-in-out duration-500 p-5 text-white'><a href='/Projects'>Projects</a></div>
          <div className='w-fit h-[80px] hover:scale-125 transition ease-in-out duration-500 p-5 text-white'><a href='/Resume'>Resume</a></div>
          <div className='w-fit h-[80px] hover:scale-125 transition ease-in-out duration-500 p-5 text-white'><a href='/Contact'>Contact</a></div>


        </div>


        <div className='mr-5b md:hidden mr-8 '><button onClick={() => {

          setshow(!show);

          setbuttonText(!buttonText)

        }} >{buttonText ? <ImMenu /> : <IoMdClose />}</button>

        </div>

      </div>


      <div className='md:hidden '>


        {show ? <div className='w-full h-[190px] font-bold  text-white bg-gradient-to-r from-blue-700 to-red-500 flex flex-col pl-24 pt-5 text-4xl'>
          <a href='./Home'>Home</a>
          <a href='./Projects'>Projects</a>
          <a href='./Resume'>Resume</a>
          <a href='./Contact'>Contact</a>
        </div> : null}

      </div>

        

    </>
  ) //375 667

}

export default Nav;


/*

I'm Designer Haris F. Watson
jharem rfpsum golor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt utejhg labore bet dolore magna aliqua. Quis ipsum suspendisse uitrices gravida
Learn More
Hire Me

*/