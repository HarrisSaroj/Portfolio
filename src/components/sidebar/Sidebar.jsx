import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './togglebutton/ToggleButton'

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const variant = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            }
        }
    }

  return (
    <motion.div animate={open ? 'open' : 'closed'}
        className='flex flex-col justify-center items-center bg-white text-black'>
        <motion.div variants={variant}
            className='fixed top-0 left-0 bottom-0 w-full sm:w-[450px]  bg-white'>
            <Links setOpen = {setOpen}/>
        </motion.div>
        <ToggleButton setOpen = {setOpen}/>
    </motion.div>
  )
}

export default Sidebar