import React from 'react'
import './imageSection.css'
import UserImage from '../../assets/userAssets/UserImage1.jpeg'
import Zigzags from '../../assets/userAssets/zigzags.png'
import Dots from '../../assets/userAssets/dots.png'
import Cube from '../../assets/userAssets/cube.png'
import ButtonNew from '../heroSectionComponents/ButtonNew'
import {qualification} from '../../data/QualificationData'

const About = () => {
  return (
    <div className='text-white'>
        <div className='w-full flex justify-center items-center'>
            <div className=' w-full text-5xl flex justify-center pt-4
            sm:p-2 sm:text-7xl font-abril font-[500]'>
                About
            </div>
        </div>
        <div className='p-2 mt-10 flex sm:mx-auto flex-col w-full h-full
                        lg:flex lg:flex-row sm:w-[500px] md:w-[750px] lg:w-[1000px] xl:w-[1100px]'
        >
            <div className='my-auto'>
                <div className='relative '>
                    <div className='object-cover w-[300px] flex mx-auto grayscale-[1] transition-all duration-[1] user-Image'>
                        <img className='p-4' src={UserImage}  height={400} width={300} alt='userImage'/>
                    </div>
                    <div className='absolute left-72 top-[350px] icon-dots sm:hidden'>
                        <img height={50} width={80} src={Dots} alt='dots'/>
                    </div>
                    <div className='absolute left-10 top-10 icon-zigzags sm:hidden'>
                        <img height={40} width={30} src={Zigzags} alt='zigzags sm:hidden'/>
                    </div>
                    <div className='absolute left-80 top-2 icon-cube sm:hidden'>
                        <img src={Cube} alt='cube'/>
                    </div>
                </div>
            </div>
            <div className='flex m-10 p-1'>
                <div className='flex flex-col lg:p-5'>
                    <div className=''>
                        <div className='font-proza'>
                        As a recent graduate with a degree in Bachelor's in Computer Application (BCA) and currently pursuing a Master's in Computer Application (MCA), I am enthusiastic about applying my skills and knowledge to a challenging role in software development. I have gained hands-on experience with various programming
                        languages and software development methodologies throughout my coursework and projects. Despite being new to the industry, I have a strong portfolio of completed projects showcasing my passion for learning and my commitment to achieving success in the field.
                        </div>
                        <div className='mt-5'>
                            <ButtonNew name='Contact'/>
                        </div>
                    </div>
                    <div className=' mt-5 bg-yellow h-full w-full md:w-[100%] p-1 rounded-xl font-proza'>
                        <div className='text-xl font-mono'>Qualification</div>
                        {
                            qualification.map((data, index) => (
                                <div className='flex flex-col p-4'>
                                    <div className=''>
                                        {/* Left */}
                                        <div>
                                            {data.qualification}
                                        </div>
                                        <div className='text-sm'>
                                            {data.college}
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-[12px] mt-3'>
                                        <div>
                                            {data.year}
                                        </div>
                                        <div>
                                            {data.location}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About