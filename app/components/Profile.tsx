import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Profile = () => {
  return (
    <section className='dark flex flex-wrap py-20'>  
      <div className='dark:text-neutral-200 flex flex-wrap py-10'>
        <div className='flex lg:w-[60%]'>
          <div className=''>
            <div className='text-4xl font-semibold'>
              <p className='pt-4 pb-16'>
              Sherwin Mailom / whin
              </p>
            </div>
            <div className='text-4xl font-bold'>
              Professional Summary
            </div>
            <div className='text-xl pt-4 pl-4'>
              <p>
                  • Knowledge of creating software or applications and installing Operating Systems. <br />
                  • Committed to meeting deadlines and targets. Team player and takes responsibility for assigned tasks. <br />
                  • Attentive to details. <br />
                  • Good motivator, enthusiastic, and open to learning new ideas. <br />
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:w-[40%]'>
          <div className='flex mx-auto md:flex md:items-center md:justify-center'>
            <div>
            <img 
              className='w-96 h-96' 
              src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwAAAA?rs=1&pid=ImgDetMain" alt="" />    
            </div>          
          </div>
        </div>
      </div>   
      <div className='flex flex-col justify-center items-center py-20 w-full'>
        <label className='text-center font-semibold md:text-4xl text-2xl dark:text-neutral-200 '>
          Way of learnings
        </label>
        <TextGenerateEffect
            words={` do { reading; listening; watching; questioning; ... } while ( CHANGE is CONSTANT ):`}
            duration={0.2}
        />
      </div>
  </section>   

  )
}

export default Profile
