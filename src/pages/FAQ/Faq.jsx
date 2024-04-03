import React, { useEffect } from 'react'
import Accordion from '../../components/accordion/Accordion';
import './Faq.scss'
import { MotionWrap } from '../../wrapper';
import { Helmet } from 'react-helmet-async';
import Test from '../../components/test/Test';



const Faq = () => {





return (

  <div className='faq_header'>
    <Helmet>
       
       <title>FAQ - Career At Germany</title>
       
     </Helmet>


     {/* <Test/> */}
    <h1 className='head-text'> <span> FAQ </span></h1>
   
    <Accordion />
  </div>
)
}

export default MotionWrap(Faq);