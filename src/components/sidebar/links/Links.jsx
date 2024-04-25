import React from 'react'
import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.01,
            staggerDirection: -0.5,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}
const Links = ({setOpen}) => {

    const items = [
        'Homepage',
        'About',
        'Skill',
        'Project',
        'Contact',
    ]

  return (
    <motion.div variants={variants}
        onClick={() => setOpen(prev => !prev)}
        className='absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px] '>
        {
            items.map((item) => (
                <motion.a className='text-[30px]' href={`#${item}`} key={item} 
                    variants={itemVariants} 
                    whileHover={{scale:1.2}} 
                    whileTap={{scale:0.95}}>
                    {item}
                </motion.a>
            ))
        }
        <div className=' flex gap-7 justify-'>
            <FaGithub size={25}/>
            <FaLinkedinIn size={25}/>
        </div>
    </motion.div>
  )
}

export default Links