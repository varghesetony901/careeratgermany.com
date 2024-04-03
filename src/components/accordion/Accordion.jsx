import React, { useEffect, useState } from 'react'
import { client } from '../../client'
import './Accordion.scss'


const Accordion = () => {

  const [faqs, setFaqs] = useState([])
  const [active, setActive] = useState()

  const toogle = (index) => {
    // console.log("index is :", index);
    if (active === index) {
      return setActive(null)
    } else {
      setActive(index)
    }

  }


  useEffect(() => {
    const query = '*[_type == "faq"] | order(_createdAt asc)'
    client.fetch(query).then((data) => {
      setFaqs(data)
      // console.log(data);
    })

  }, [])


  return (
    <div className='faq_wrapper'>
      <div className='faq_accordion'>
        {faqs.map((faq, index) => (
          <div className='faq_item' key={index} >
            <div className='faq_title' onClick={() => toogle(index)}>
              <p >{faq.question}</p>
              <span>{active === index ? '-' : '+'}</span>
            </div>
            <p className={active === index ? 'faq_content faq_show' : 'faq_content'}>
              {faq.answer}
            </p>

          </div >
        ))}
      </div>
    </div>
  )
}

export default Accordion