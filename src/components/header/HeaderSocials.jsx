import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/abhrajit-ghosh-1a54081b2/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/abhrajit117' target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href='https://www.youtube.com/channel/UCvKmRBUc2FVP_80NK0iMkJA' target='_blank' rel="noreferrer"><GrYoutube /></a>
            <a href='https://twitter.com/AbhrajitGhosh7' target='_blank' rel="noreferrer"><BsTwitter /></a>
            <a href='https://www.instagram.com/the_happy_engineer__/' target='_blank' rel="noreferrer"><FaInstagram /></a>
            <a href='https://www.facebook.com/abhrajit.ghosh.5855' target='_blank' rel="noreferrer"><BsFacebook /></a>


        </div>
    )
}

export default HeaderSocials