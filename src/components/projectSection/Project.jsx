import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import {items} from '../../data/ProjectData'
import ProjectCard from './ProjectCard';


const Project = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref});

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])



  return (
    <div className='scroll-smooth'>
      <div className='relative'>
            <div className='absolute font-abril  text-[9rem] top-72 font-[700] -left-[16rem] lg:-left-[14rem] rotate-90 text-[#1a1e23]'>
                PROJECT
            </div>
      </div>
      <motion.div
        className='h-full'
        initial={{y: '-200vh'}}
        animate={{y: '0%'}}
        transition={{duration:1}}
      >
        <div className='h-[200vh] relative' ref={ref}>
          <div className='sticky top-0 flex h-screen gap-20 items-center overflow-hidden scroll-smooth'>
            <motion.div style={{x}} className='flex'>
              {
                items.map((item, index) => (
                  <div key={index} className='pl-44 lg:pl-72'>
                    <ProjectCard item={item}/>
                  </div>
                ))
              }
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Project