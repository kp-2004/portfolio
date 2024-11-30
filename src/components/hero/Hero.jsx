import React from 'react'
import { motion } from "framer-motion";
import './hero.css'
import profile from '../../assets/profile-img.jpeg'
import kanchan from '../../assets/kanchan.pdf'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className='hero'>
        <h1><span>I'm Kanchan,</span> Frontend Developer based in India</h1>
        <p>I am a frontend developer,I am quick learner. and I am hardworking person with the positive attitude. I am interested to take challenges in my life.</p>
        <div className="hero-action">
            <div className="hero-connect">
               <Link to='/contact'> Connect with me </Link>
            </div>
            <div className="hero-resume">
              <a href={kanchan}>
                My resume
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero