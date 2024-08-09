import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <div
            className='w-fit py-[0.8rem] px-[2.3rem]  font-sans bg-teal-800 shadow-[5px_5px_7px_0px_grey] 
            text-[18px] cursor-pointer transition-all duration-500 font-[500]
            border-solid border-transparent border-[3px] rounded-sm relative z-[1]
            before: content-normal before:absolute before:bg-white before:top-[0px] before:left-0 
            before:right-0 before:bottom-[0px] before:z-[-1] before:scale-x-0 
            before:origin-left before:transition-all before:duration-[800ms]
            hover:border-solid hover:border-[3px] hover:border-teal-800 hover:text-black
            hover:before:scale-x-[1]
        '>
            <a href='#Project'>{name}</a>
        </div>
    </div>
  )
}

export default Button
