import React from 'react'
import './services.css'
import { motion } from "framer-motion";
import theme from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <motion.div 
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme}/>
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow}/>
                    </div>
                </div>
            })}
        </div>
    </motion.div>
  )
}

export default Services