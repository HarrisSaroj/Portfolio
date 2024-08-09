import React from 'react'
import SkillImage from './SkillImage'
import SpringBoot from '../../assets/SkillStack/SpringBoot1.png'


const Skill = () => {
  return (
    <div className='realtive'>
        <div className='z-[-10] absolute h-full w-full text-7xl flex justify-end items-end select-none font-[700] text-[#0F0F0F]
                        sm:text-8xl font-abril md:text-[8rem] lg:text-[10rem] lg:font-[700]  xl:text-[10rem] xl:font-[500] '>
            SKILLS
        </div>
        <div className='w-full h-full flex justify-center items-center'>
            <div className=' w-full font-abril  text-5xl flex justify-center pt-4
                sm:p-2 sm:text-7xl  font-[500]'>
                Skills
            </div>
        </div>
        <div className='sm:w-[500px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] mt-14
                        flex flex-col justify-center mx-auto w-full h-full
                        md:flex md:flex-row'>   
            <div className='w-full flex justify-center p-3'>
                <SkillImage/>      
            </div>
            <div className='h-full w-full flex flex-col justify-center '>
                <div className='p-2'>
                    <div className='text-3xl pt-5 pl-5 font-lalitaOne'></div>
                    <div className='m-6 p-1 max-h-fit font-proza'>
                        Proficient in Java, c++, SQL with experience in web development using React, JavaScript,
                        HTML, and CSS. Familiar with database management (SQL, MongoDB) and version control (Git). 
                        Strong problem-solving skills, team collaboration experience, and a commitment to continuous learning. 
                        Passionate about staying updated with the latest technology trends.
                    </div>
                </div>
                <div className=''>
                    <div className='text-3xl p-7 font-mono'>
                        Learning
                    </div>
                    <div className='flex flex-wrap p-7'>
                        <img className='skills-logo' src={SpringBoot} alt='sql'/>    
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Skill
