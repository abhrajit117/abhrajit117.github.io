import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { RingLoader } from 'react-spinners'
const Services = () => {
    return (<>
        <RingLoader className='pacs' color='#0197F6' />
        <section id='service'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>


                <article className='services'>
                    <div className='service__head'>
                        <h3>ui ux design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                    </ul>
                </article>





                <article className='services'>
                    <div className='service__head'>
                        <h3>ui ux design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                    </ul>
                </article>






                <article className='services'>
                    <div className='service__head'>
                        <h3>ui ux design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>lorem ipsum bla bla bla will update later </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
        <svg id="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4db5ff" fill-opacity="1" d="M0,160L240,128L480,32L720,192L960,96L1200,224L1440,160L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4db5ff" fill-opacity="1" d="M0,288L288,128L576,288L864,160L1152,32L1440,160L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>

    </>
    )
}

export default Services