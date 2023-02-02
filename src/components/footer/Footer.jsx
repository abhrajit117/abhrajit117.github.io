import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { TfiLinkedin } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#4db5ff" fill-opacity="1" d="M0,160L26.7,154.7C53.3,149,107,139,160,165.3C213.3,192,267,256,320,261.3C373.3,267,427,213,480,208C533.3,203,587,245,640,240C693.3,235,747,181,800,160C853.3,139,907,149,960,176C1013.3,203,1067,245,1120,234.7C1173.3,224,1227,160,1280,122.7C1333.3,85,1387,75,1413,69.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
        <footer>


            <a href='# ' className='footer__logo'>Abhrajit Ghosh</a>
            <ul className='permalinks'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://facebook.com'><TfiLinkedin /></a>
                <a href='https://facebook.com'><FaGithub /></a>
                <a href='https://facebook.com'><BsInstagram /></a>
                <a href='https://facebook.com'><BsTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Abhra.Tech .All Rights Reserverd 2022</small><br></br>
                <small>Design and Developed by<br /> Abhrajit Ghosh</small>
            </div>

        </footer>
    </>
    )
}

export default Footer