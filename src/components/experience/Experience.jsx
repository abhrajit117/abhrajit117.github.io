import React from 'react'
import './experience.css'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoNodejs } from 'react-icons/io'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiMongodb, DiSass, DiLinux, DiCss3 } from 'react-icons/di'
import { BsPatchCheckFill, BsGithub, BsWordpress } from 'react-icons/bs'
import { GrReactjs } from 'react-icons/gr'
import { FaJava, FaBlogger, FaJira } from 'react-icons/fa'
import { SiVisualstudiocode, SiNumpy, SiMysql, SiJavascript, SiPython, SiBootstrap, SiTailwindcss, SiFirebase, SiPostman, SiCplusplus, SiMui, SiMicrosoftexcel, SiSpring, SiSpringboot, SiScikitlearn, SiJupyter, SiPytorch } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'

const Experience = () => (
    <section id='experience'>
        <div className='cent'>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <h5>Here are the</h5>
        <h2>Technologies I work with</h2>
        <marquee id='exm' direction='left' className='container marque'>
            <SiJavascript />
            <TbBrandNextjs />
            <GrReactjs />
            <FaJava />
            <SiPython />
            <AiFillHtml5 />
            <BsGithub />
            <DiCss3 />
            <SiTailwindcss />
            <SiBootstrap />
            <SiFirebase />
            <SiPostman />
            <SiCplusplus />
            <SiMui />
            <SiMicrosoftexcel />
            <FaJira />
            <SiSpring />
            <SiSpringboot />
            <SiScikitlearn />
            <SiJupyter />
            <SiPytorch />
            <SiNumpy />
            <IoLogoNodejs />
            <DiMongodb />
            <SiMysql />
            <DiSass />
            <FaBlogger />
            <BsWordpress />
            <DiLinux />
            <FiFigma />
            <SiVisualstudiocode />
            {/* swiperjs figma vscode */}
        </marquee>

        <div className='container experience__container'>



            <div className='experience__frontend'>
                <h3> Development & Technologies</h3>
                <div className='experience__container'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Frontend</h4>
                            <small className='text-light'>Next, React, Js</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Styles</h4>
                            <small className='text-light'>CSS, Tailwind, MUI, ChakraUI, Bootstrap</small>
                        </div>
                    </article>


                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>APIs & Plugins</h4>
                            <small className='text-light'>Postman, Rapid API</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Backend Services</h4>
                            <small className='text-light'>Node, Firebase, Appwrite</small>
                        </div>
                    </article>


                </div>
            </div>




            <div className='experience__frontend'>
                <h3>Basics & Required</h3>
                <div className='experience__container'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Networks</h4>
                            <small className='text-light'>Familiar</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Database</h4>
                            <small className='text-light'>MongoDb, Firebase, Appwrite</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>System Design</h4>
                            <small className='text-light'>Love to Do</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Algorithms & Analysis</h4>
                            <small className='text-light'>Efficient</small>
                        </div>
                    </article>

                </div>
            </div>
        </div>



    </section>
)

export default Experience