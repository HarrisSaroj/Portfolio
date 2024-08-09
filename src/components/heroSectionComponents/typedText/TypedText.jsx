import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypedText = () => {
    const [text] = useTypewriter({
        words: ['Developer.', 'Student.'],
        loop: {},
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    })
  return (
    <div>
      <div>
        <span 
                className='text-[#49f4e3] 
                  sm:font-[600] font-lalitaOne'>
                  {text}
              </span>
        <Cursor  cursorColor='red'/>
      </div>
    </div>
  )
}

export default TypedText

