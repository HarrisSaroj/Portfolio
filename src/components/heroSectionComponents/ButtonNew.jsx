import React from 'react'

const ButtonNew = ({name}) => {
  return (
    <div className='h-full w-[150px] text-center'>
        <div className='p-2 border-[2px] font-mono shadow-2xl border-[#f34af9]  cursor-pointer border-r-0 border-t-0'>
            <a href='https://drive.google.com/file/d/1xP-cbjtSD0ztOvX2ZY4k8lCQV8Vk_aMW/view?usp=drive_link' rel='noopener noreferrer' target="_blank">{name}</a><span></span>
        </div>
    </div>
  )
}

export default ButtonNew
