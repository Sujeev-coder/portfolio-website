import React from 'react'
import Nav from './Nav'
import './globals.css'
import Body1 from './Body1';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const page = () => {
  return (
   <>
   
   <body className=' md:flex md:flex-col md:items-center md:justify-between bg-slate-500 h-[80vh] ' >


<Nav/>

<Body1/>
<Projects/>
<Resume/>
<Contact/>
   </body  >
   
   </>
  )
}

export default page