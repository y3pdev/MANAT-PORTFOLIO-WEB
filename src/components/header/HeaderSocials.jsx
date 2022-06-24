import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BAfYZrscYRkWzx7dtEsPC%2Bw%3D%3D" target="_black"><FaLinkedinIn/></a>
        <a href="https://facebook.com/manat.ketkan" target="_black"><FaFacebookF/></a>
        <a href="https://twitter.com/y3bdev" target="_black"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials