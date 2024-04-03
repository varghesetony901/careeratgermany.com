import React, { useEffect } from 'react'
import './Popup.scss'
import { useDispatch, useSelector } from 'react-redux';
import { onUpdate} from '../../features/popupShow/PopupShow'



const Popup = () => {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     document.querySelector(".popup__container").style.display = "block";
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, []);


  // const handler = () => {
  //   return document.querySelector(".popup__container").style.display = "none";
  // }

  const popupVisible = useSelector((state) => state.PopupShower.value)
    const dispatch = useDispatch()

  return (
    popupVisible && 
    <div className='popup__container'>
      <div class="popup">
        <button id="close" onClick={()=>dispatch(onUpdate())}>&times;</button>

        <img src='/popupp.jpg' />
       
        <a href='https://wa.me/+917994779575' target='_blank' onClick={()=>dispatch(onUpdate())}><p>Contact Us</p></a>
      </div>
    </div>
  
  )
}

export default Popup