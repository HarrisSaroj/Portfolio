import React, { useEffect, useRef } from 'react'
import hoverEffect from 'hover-effect';
import './Project.css'
import ButtonNew from '../heroSectionComponents/ButtonNew';
import { LiaLinkSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import distortionImage from '../../assets/Images1-2/7.jpg'
 

const ProjectCard = ({item,title,liveLink,github, desc,image11, image21, id, technologies}) => {

    const ref = useRef();

    useEffect(() => {
    
    new hoverEffect({
      parent: ref.current,
      intensity: 0.3,
      image1: item.image11,
      image2: item.image21,
      imagesRatio: 400/300,
      displacementImage:distortionImage,
    });
  },);

  return (
    <div className='h-full w-full flex justify-center items-center'>
        <div className='h-[550px] w-[300px] md:w-[500px] lg:w-[650px] xl:w-[760px] bg-[#191919] rounded-[3rem]'>
            <div className='relative p-7 lg:flex lg:justify-between items-center w-full h-full'>
                <div className='absolute text-[#7b7b87] font-bungee_outline -top-8 -right-4 
                    font-[600] text-6xl md:text-7xl lg:text-[100px] lg:-top-12 lg:-right-7 '>
                    {item.id}
                </div>
                <div className='lg:vertical-rl lg:visible '>
                    <div className='text-[0px] lg:text-[12px] font-[500] text-[#6f6f70]'>
                        {item.technologies}
                    </div>
                </div>
                <div className='w-full h-[350px] overflow-hidden rounded-[2rem]
                    lg:w-[300px] lg:h-[400px] object-contain'>
                    <div
                        className="parent"
                        id="imgContainer"
                        ref={ref}
                        style={{
                          width: 300,
                          height: 400
                        }}
                    />
                </div>
                <div className='flex lg:w-[210px] flex-col gap-4 pt-2 lg:pt-0 lg:gap-14 lg:max-w-full'>
                    <div className='text-[25px] lg:text-4xl'>
                        {item.title}
                    </div>
                    <div className='text-[12px] lg:text-[16px]'>
                        <ButtonNew name="See More"/>
                    </div>
                    <div className='flex gap-3'>
                        <div className=''>
                            <a href={item.liveLink}><LiaLinkSolid size={23}/></a>
                        </div>
                        <div>
                            <a href={item.github}><FaGithub size={23}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard