import React from 'react'

const ButtonNew = ({name}) => {
  return (
    <div className='h-full w-[100px] text-center'>
        <div className='p-2 border-[2px] font-mono shadow-2xl border-[#f34af9]  cursor-pointer border-r-0 border-t-0'>
            <a href='#Project'>{name}</a><span></span>
        </div>
    </div>
  )
}

export default ButtonNew
