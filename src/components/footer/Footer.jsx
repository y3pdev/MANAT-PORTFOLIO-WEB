import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PROFILE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAfYZrscYRkWzx7dtEsPC%2Bw%3D%3D" target="_black"><FaLinkedinIn/></a>
        <a href="https://facebook.com/manat.ketkan" target="_blank"><FaFacebookF /></a>
        <a href="https://twitter.com/y3bdev" target="_blank"><BsTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MANAT Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer