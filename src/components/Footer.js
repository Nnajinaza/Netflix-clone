import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer-section'>
        <div className='footer-socials-icon'>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
        </div>
        <div className='footer-condition'>
            <p className='privacy'>Conditions of Use</p>
            <p className='privacy'>Privacy & Policy</p>
            <p className='privacy'>Press Room</p>
        </div>
        <div className='copyright'>&copy; 2021 MovieBox by Nnaji Chinaza</div>
    </footer>
  )
}

export default Footer
