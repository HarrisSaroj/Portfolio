import React from 'react'
import './SkillImage.css'
import Blob from '../../assets/userAssets/BgSkill.png'
import Html from '../../assets/SkillStack/HTML.png'
import Css from '../../assets/SkillStack/CSS.png'
import JavaScript from '../../assets/SkillStack/Javascript.svg'
import ReactJs from '../../assets/SkillStack/React.png'
import NodeJs from '../../assets/SkillStack/NodeJs.svg'
import ExpressJs from '../../assets/SkillStack/Express.png'
import MongoDb from '../../assets/SkillStack/MongoDB.svg'
import GitHub from '../../assets/SkillStack/GitHub.png'
import Java from '../../assets/SkillStack/java_svgrepo.com.png'
import SQL from '../../assets/SkillStack/SQL.png'

const SkillImage = () => {
  return (
    <div className='relative '>
        <div className='flex flex-wrap gap-10 sm:gap-14 md:gap-12 lg:gap-20 lg:justify-start xl:gap-24 justify-center'>
            <img className='skills-logo' src={Html} alt='html'/>
            <img className='skills-logo' src={Css} alt='css'/>
            <img className='skills-logo' src={JavaScript} alt='js'/>
            <img className='skills-logo' src={ReactJs} alt='reactjs'/>
            <img className='skills-logo' src={NodeJs} alt='node'/>
            {/* <img className='skills-logo' src={ExpressJs} alt='express'/> */}
            <img className='skills-logo' src={MongoDb} alt='mongodb'/>
            <img className='skills-logo' src={GitHub} alt='github'/>
            <img className='skills-logo' src={Java} alt='Java'/>
            <img className='skills-logo' src={SQL} alt='sql'/>
        </div>
        <div>
          <img className='blob-image blob-image1 absolute top-16 left-12 md:left-36 md:top-24 z-[-10] 
          h-[225px] w-[290px] lg:h-[250px] lg:w-[320px] lg:left-5' src={Blob} alt='blob'/>
        </div>
    </div>
  )
}

export default SkillImage
