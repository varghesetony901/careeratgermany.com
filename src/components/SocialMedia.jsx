import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsYoutube} from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className='app__social' >
           <div>
            <BsInstagram color= 'white' />
           </div>
           <div>
            <FaFacebook color= 'white'/>
           </div>
           <div>
            <BsYoutube color= 'white'/>
           </div>
        </div>
    )
}

export default SocialMedia