import React from 'react'
import TypedText from '../heroSectionComponents/typedText/TypedText'
import ButtonNew from '../heroSectionComponents/ButtonNew'
import Scroll from '../../assets/scroll.png'
import {motion} from 'framer-motion'
import HeroImage from '../../assets/HeroSectionImage.png'


const textVariant = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            straggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.5,
            repeat: Infinity
        }
    }
}

const Hero = () => {
  return (
    <motion.div className='overflow-x-hidden overflow-y-hidden w-full h-full flex flex-col justify-center items-center relative'>
        <motion.div variants={textVariant} initial="initial" animate="animate" 
            className='sm:w-[500px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] relative'>
            <motion.div variants={textVariant} 
                className='text-sm sm:text-sm'>
                <motion.div variants={textVariant} className=' '>
                    HII THERE👋, I'M <br/> 
                    <span className='text-7xl font-[700] font-abril
                                '>
                            harendra.
                    </span>
                </motion.div>
                <motion.div variants={textVariant} className='mt-10 text-5xl font-[600]'>
                    <TypedText/>
                </motion.div>
            </motion.div>
            <motion.div variants={textVariant} className='mt-16 text-center text-xl'>
                <ButtonNew name='Projects'/>
            </motion.div>
        </motion.div>
        <div className=''>
            <div className='absolute right-[-90px] top-[-100px] z-[-10] blur-[1px]
                lg:right-[80px] md:blur-none lg:object-cover'>
                <img src={HeroImage} height={300} width={300} alt='image1'/>
            </div>
        </div>
        <motion.div 
            className='translate-y-40'>
            <a href='#About'>
                <motion.img variants={textVariant} animate="scrollButton" className='h-10 ' src={Scroll} alt='heroImage1'></motion.img>
            </a>
        </motion.div>
    </motion.div>
  )
}

export default Hero