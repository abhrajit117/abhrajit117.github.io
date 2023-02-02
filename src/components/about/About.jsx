import React from 'react'
import './about.css'
// import ME from './mee.jpg'
import { BiCalendarEvent } from 'react-icons/bi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { FaGuitar } from 'react-icons/fa'



// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";



const About = () => {
    return (
        <section id='about'>
            <svg className='svs' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0197F6" fill-opacity="1" d="M0,256L0,96L49.7,96L49.7,288L99.3,288L99.3,192L149,192L149,64L198.6,64L198.6,32L248.3,32L248.3,256L297.9,256L297.9,128L347.6,128L347.6,256L397.2,256L397.2,128L446.9,128L446.9,192L496.6,192L496.6,96L546.2,96L546.2,64L595.9,64L595.9,160L645.5,160L645.5,128L695.2,128L695.2,96L744.8,96L744.8,96L794.5,96L794.5,96L844.1,96L844.1,224L893.8,224L893.8,96L943.4,96L943.4,256L993.1,256L993.1,160L1042.8,160L1042.8,32L1092.4,32L1092.4,32L1142.1,32L1142.1,192L1191.7,192L1191.7,32L1241.4,32L1241.4,128L1291,128L1291,96L1340.7,96L1340.7,256L1390.3,256L1390.3,192L1440,192L1440,0L1390.3,0L1390.3,0L1340.7,0L1340.7,0L1291,0L1291,0L1241.4,0L1241.4,0L1191.7,0L1191.7,0L1142.1,0L1142.1,0L1092.4,0L1092.4,0L1042.8,0L1042.8,0L993.1,0L993.1,0L943.4,0L943.4,0L893.8,0L893.8,0L844.1,0L844.1,0L794.5,0L794.5,0L744.8,0L744.8,0L695.2,0L695.2,0L645.5,0L645.5,0L595.9,0L595.9,0L546.2,0L546.2,0L496.6,0L496.6,0L446.9,0L446.9,0L397.2,0L397.2,0L347.6,0L347.6,0L297.9,0L297.9,0L248.3,0L248.3,0L198.6,0L198.6,0L149,0L149,0L99.3,0L99.3,0L49.7,0L49.7,0L0,0L0,0Z"></path></svg>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>Swipe Left to know more About Me </SwiperSlide>
                    <SwiperSlide><div>WEB3 Enthusiast <h6>Currently exploring WEB3 and looking into Solidity, Smart Contracts, ETH & Polygon Blockchain Technologies </h6><a href='$' style={{ color: "#fff" }}>Learn More</a></div></SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    {/* <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}

                </Swiper>
            </div>










            <div className='container about__container'>
                {/* <div className='about__me'>
                    <div className='about__me-image'>
                        <image src={ME} alt='About image' />
                    </div>
                </div> */}
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <BiCalendarEvent className='about__icon' />
                            <h5>Tech Events</h5>
                            <small>5+ Tech events attended in 2022</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years of coding and 1+ years of product management experiences </small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFundProjectionScreen className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Projects completed in various domains</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Networks & Connections</h5>
                            <small>200+ Connections made during networking</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ users</small>
                        </article>
                        <article className='about__card'>
                            <FaGuitar className='about__icon' />
                            <h5>Music</h5>
                            <small>5+ Years of music experience & 2+ years of music instrument teaching experience</small>
                        </article>

                    </div>
                    <p>lorem ipsum In this practical react js project tutorial, I'm going to teach you,
                        step-by-step, how to create and deploy a fully responsive personal portfolio website from scratch!
                        By the end of this video, you will know how to create a react app from scratch,
                        how to use the react icons library in your react projects, how to use react useState hooks,
                        how to build modern website designs with CSS3, how to use SwiperJS (to create carousels/slides)
                        in your react projects, how to add multiple contact options on your website
                        (WhatsApp, Facebook Messenger, and Direct form submission using EmailJS), and more!
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Conect</a>


                </div>
            </div>
        </section>
    )
}

export default About