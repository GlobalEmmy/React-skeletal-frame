import React from "react";
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter}from "react-icons/io"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Company's Name</a>

    <ul className='permalinks'>
       {/* <li><a href='#'>Home</a></li>
       <li><a href='#about'>About</a></li>
       <li><a href='#experience'>Experience</a></li>
       <li><a href='#services'>Services</a></li>
       <li><a href='#portfolio'>Portfolio</a></li>
       <li><a href='#testimonials'>Testimonials</a></li>
       <li><a href='#contact'>Contact</a></li> */}

       <li><Link className="active2" to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/services">Services</Link></li>
       <li><Link to="/contact">Contact</Link></li>
       <li><Link to="/feedback">Feedback</Link></li>
    </ul>
    <div className='footer__socials'>
    <a href='https://web.facebook.com/monyem.emmanuel'target= "_blank"><FaFacebookF/></a>
    <a href='https://www.instagram.com/monyememmanuel'target= "_blank"><FiInstagram/></a>
    <a href='https://twitter.com/e_monyem?t=sY8OuO7Mya9C9oxCBe6vnw&s=09' target= "_blank"><IoLogoTwitter/></a>
    </div>
    <div className='footer__copyright'>
    <small>&copy; Company's Name. All rights reserved.</small>
    </div>
   
  </footer>
  )
}

export default Footer
