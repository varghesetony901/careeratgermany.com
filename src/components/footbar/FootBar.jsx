import React from 'react'
import './FootBar.scss'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BiPhoneCall } from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'

 
import { Link } from 'react-router-dom'




const FootBar = () => {
    return (

        <div >
            <div className='footbar_container_with_social' >
                <div className='footbar__main'>
                    <div className='footbar__one' >

                        <h4 >Our Office</h4>
                        <div className='footbar__info'>
                            <div>

                                <GoLocation size={20} />
                            </div>

                            <div>
                                <a href="https://goo.gl/maps/ZUFmoxhQyhVC8wEH8" target='_blank'>
                                    <p >KK Arcade, Kothamangalam Bypass Junction, near KCV Channel,Kothamangalam, Kerala,686691.</p>
                                </a>
                            </div>
                        </div>
                        <div className='footbar__info'>
                            <BiPhoneCall size={20} />
                            <a href="tel:+91 7994779575">
                                <p >+91 799 477 9575</p>
                            </a>
                        </div>

                        <div className='footbar__info'>
                            <AiOutlineMail size={20} />
                            <a href="mailto:careeratgermany@gmail.com">
                                <p >careeratgermany@gmail.com</p>
                            </a>
                        </div>

                        
                    </div>

                    <div className='footbar__two'>
                        <h4 >Quick Links</h4>

                        <Link to='/about'><p>About Us</p></Link>
                        <Link to='/contact'><p>Contact Us</p></Link>
                        <Link to='/master-courses'><p>Master Courses</p></Link>
                        <Link to='/fsj-ausbildung'><p>FSJ / Ausbildung</p></Link>
                        <Link to='/courses'><p>Language Courses</p></Link>
                    </div>

                    <div className='footbar__three'>
                        <h4 >Working Hours</h4>
                        <p >Monday - Friday</p>
                        <h6 >09:00 am - 07:00 pm</h6>
                        <p >Saturday</p>
                        <h6 >09:00 am - 12:00 pm</h6>
                        <p >Sunday</p>
                        <h6 >Closed</h6>
                    </div>

                    

                    {/* <div className='footbar__four'>
                            <h4 >Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className='footbar__four-input'>
                                <input type="text"
                                    placeholder="Your email" />
                                <button type="button"
                                >Sign Up</button>
                            </div>
                        </div> */}

                </div>
                <div className='footbar__social'>
                            <div className='footbar__social-icon'>
                                <a href="https://www.facebook.com/careeratgermany" target='blank'><FaFacebook size={30} /></a>
                            </div>
                            <div className='footbar__social-icon'>
                                <a href="https://www.instagram.com/careeratgermany/" target='blank'><BsInstagram size={30} /></a>
                            </div>
                            <div className='footbar__social-icon'>
                                <a href="https://www.youtube.com/channel/UCWcriU939-cScNQX2eDCcfA" target='blank'><BsYoutube size={30} /></a>
                            </div>
                            <div className='footbar__social-icon'>
                                <a href="https://www.linkedin.com/company/careeratgermany/" target='blank'><FaLinkedinIn size={30} /></a>
                            </div>
                            <div className='footbar__social-icon'>
                                <a href="https://in.pinterest.com/careeratgermany/" target='blank'><FaPinterest size={30} /></a>
                            </div>


                        </div>
                
            </div>
        </div>

    )
}

export default FootBar