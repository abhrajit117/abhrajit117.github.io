import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'


const Header = () => {
    return (
        <header id='home'>
            <div className='container header__container'>
                <h4>Hello I'm</h4>
                <h1>Abhrajit Ghosh</h1>
                <h5 className='text-light'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "I'm a MERN Stack Developer",
                                "I'm a UI/UX Designer",
                                "I'm a JAVA Developer",
                                "I'm a Competitive Programmer",
                                "I'm a Musician",
                            ]
                        }}
                    />
                </h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me'></img>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down </a>
            </div>
        </header>
    )
}

export default Header