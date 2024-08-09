import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-[#FFF2E1] flex flex-col justify-between h-[400px] p-2 w-full pt-12 text-black'>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col justify-between gap-5'>
                <div className='text-4xl text-center font-proza font-[400]'>
                    Harendra Saroj
                </div>
                {/* <div className='flex justify-end  flex-col'>
                    <div className=''>
                        harrissaroj@gmail.com
                    </div>
                    <div className=''>
                        +91-8655296517
                    </div>
                </div> */}
            </div>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex gap-5'>
                    <div>
                        <a href='#Homepage'>Home</a>
                    </div> 
                    <div>
                        <a href='#About'>About</a>
                    </div>
                    <div>
                        <a href='#Skill'>Skills</a>
                    </div>
                    <div>
                        <a href='#Project'>Projects</a>
                    </div>
                    <div>
                        <a href='#Contact'>Contact</a>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <a href='https://github.com/HarrisSaroj'><FaGithub size={25}/></a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/harendra-saroj-837b41197/'><FaLinkedin size={25}/></a>
                    </div>
                    {/* <div><TbBrandGmail /></div> */}
                </div>
            </div>
        </div>
        <div className=' h-[35px] text-center'>
            <div className=''>
                ©2024 Harendra Saroj
            </div>
        </div>
    </div>
  )
}

export default Footer