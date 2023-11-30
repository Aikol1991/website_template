import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTelegram} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'

export default function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-container'>
                <div className='footer-inner'>
                    <div className='footer_list'>
                        <div className='socials'>Our socials:</div>
                        <div className='icons'><FaFacebook/></div>
                        <div className='icons'><BsInstagram/></div>
                        <div className='icons'><BiLogoTelegram/></div>
                        <div className='icons'><BsWhatsapp/></div>
                        <ul>
							<li className="main">Join us</li>
							<li>Our Plan</li>
							<li>Employers</li>
							<li>Members</li>
							<li>About us</li>
                            <li>Contact us</li>
						</ul>
                    </div>
                    <div className='footer__list'>
                        <ul>
							<li className="special">Companies history</li>
							<li>About project</li>
							<li>News</li>
							<li>Careers</li>
							<li>Email</li>
						</ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
