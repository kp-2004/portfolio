import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/mywork">porfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-section social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                <a href='#' target='_blank' rel='npppener noreferrer' className='social-icon facebook'>Facebook</a>
                <a href="#" target='_blank' rel='npppener noreferrer' className='social-icon instagram'>Instagram</a>
                <a href="#" target='_blank' rel='npppener noreferrer' className='social-icon linkedin'>LinkedIn</a>
                <a href="#"target='_blank' rel='npppener noreferrer' className='social-icon twitter'>Twitter</a>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
                <p>@ 2024 portfolio. All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer