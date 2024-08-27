import React from 'react'
import { CgMail } from "react-icons/cg";
import { GrLinkedin, GrMailOption, GrPhone  } from "react-icons/gr";

const Contact = () => {
  return (  
    <div id="contact" className='dark dark:text-neutral-200 py-20'>
      <div className='text-lg'>
        Contact me at:
      </div>
      <div className='flex flex-row items-center text-sm py-2'>
        <GrPhone  size={30} /> 
        <div className='px-2'>+639 50 337 8634</div>
      </div>
      <div className='flex flex-row items-center text-sm pb-2'>
        <GrMailOption  size={30} /> 
        <div className='px-2'>whinmailom@gmail.com</div>
      </div>
      <div className='flex flex-row items-center text-sm pb-2'>
        <GrLinkedin size={30} /> 
        <div className='px-2 text-sm'>
          <a href='https://www.linkedin.com/in/sherwin-mailom-50b21a203'>
          linkedin.com/in/sherwin-mailom
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
