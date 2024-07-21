import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import favi from "../../assets/cr2favicon.png";
import "./WhatsappComponent.scss";

const WhatsappComponent = () => {
  const [model, setModel] = useState(false);
  const [textMessage, setTextMessage] = useState("Hi.");

  const handleChange = () => {
    setModel(!model);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const message = e.target.value;
    setTextMessage(message);
    // console.log(message);
  };

  return (
    <div className="whatsapp_container">
      <div className="whatsapp_cover" onClick={handleChange}>
        <AiOutlineWhatsApp size={25} color="white" />
        <p>Whatsapp</p>
      </div>

      {model && (
        <div className="whatsapp_model_container">
          <div className="model_top_box">
            <div className="model_top_box_top">
              <img src={favi} alt="" />
              <p>Career@Germany</p>
              <AiOutlineCloseCircle size={30} onClick={() => setModel(false)} />
            </div>
            <div className="model_top_box_bottom">
              <p>Typically replies within an hour</p>
            </div>
          </div>
          <div className="model_bottom_box">
            <div className="model_bottom_box_message">
              <p className="p-text">Career at Germany</p>

              <p>Hi there 👋</p>

              <p>How we can help you?</p>
            </div>
          </div>
          <div className="model_bottom_input_box">
            <input
              type="text"
              placeholder="Type Message"
              name="message"
              value={textMessage}
              onChange={handleInput}
            />
            <a
              href={`https://wa.me/+917994779575?text=${textMessage}`}
              target="_blank"
            >
              <IoSend size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappComponent;
