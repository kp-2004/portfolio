import React from 'react'
import { motion } from "framer-motion";
import './about.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile-img.jpeg'

const About = () => {
    
  return (
    <>
    <motion.div
    initial={{ x: "200%", opacity: 0 }}
    animate={{ x: 0, opacity: 2 }}
    transition={{ duration: 2, ease: "easeOut" }}
     className="about-container">
        <div className="about-title">
            <h1>About me </h1>
            <img src={theme}/>

        </div>
        <div className="about-sections">
            <div className="about-right">
                <div className="about-para">
                    <p>I am Kanchan, and excited to share my background and acheivments. I hold my Bachlor's of Computer Application from Indria Gandhi National Open University.
                        To keep my skills sharp and compitive I have actively practice coding challenges.
                        In additional to my formal education, I have done my front end develpment course and recently I alse have done my training of front end developer as a intern from Brain 
                        Shaper Technology. 
                    </p>
                    <p>Talking about my family there are 5 members in my family including me, my father, my mother
                        and two elder brothers.My father have own buisness of Air Conditioner and my mother is home maker.
                        My hobbies are cooking and watching movies ,watching movies is one of my favoirate hobby.
                        My strength are I am hardworking person with the positve attitude and I am interested to take challenges in my life.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTMl & CSS</p><hr style={{width: "80%"}}/ >
                    </div>
                    <div className="about-skill">
                        <p>Reactjs</p><hr style={{width: "60%"}}/ >
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width: "70%"}}/ >
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap</p><hr style={{width: "80%"}}/ >
                    </div>
                </div>
            </div>
           
           
        </div>
    </motion.div>
    </>
  )
}

export default About