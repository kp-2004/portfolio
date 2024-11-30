import React from 'react'
import './contact.css'
import { motion } from "framer-motion";
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import phone_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8cd6441e-d381-49f2-92ae-e70cb994a737");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div 
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className='contact'>
        <div className="contact-title">
            <h1>Contact Us</h1>
            <img src={theme}/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk </h1>
                <p>I am currently available to take any type of frontend projects and please send me a message about anything that you want me to work.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>prajapatikanchan856@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>142, Kunwar Singh Nagar</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" />
                        <p>+91 9711483851</p>
                    </div>
                </div>
            </div>
            <form className='contact-right' onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label>Your Email</label>
                <input type="email" placeholder='Type your Email' name='email' />
                <label>Write your message here</label>
                <input type="textarea" rows="8" placeholder='Enter your mesage' />
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
        <span>{result}</span>
    </motion.div>
  )
}

export default Contact