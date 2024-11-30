import React from 'react'
import './mywork.css'
import { motion } from "framer-motion";
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <motion.div
    initial={{ x: "200%", opacity: 0 }}
    animate={{ x: 0, opacity: 2 }}
    transition={{ duration: 2, ease: "easeOut" }}
     className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme}/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((mywork,index) =>{
                return <img key={index} src={mywork.w_img}/>
            }) }
            
        </div>
    </motion.div>
  )
}

export default Mywork