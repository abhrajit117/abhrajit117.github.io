import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



import { MdOutlineEmail } from 'react-icons/md'
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d79lf4t', 'template_jxvvc3m', form.current, 'UGHw_BdinwPfq5Hxq')
        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='line'></div>

            <div id="flx" className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>contact.abhrajitghosh@gmail.com</h5>
                        <a href='mailto:contact.abhrajitghosh@gmail.com'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>contact.abhrajitghosh@gmail.com</h5>
                        <a href='mailto:contact.abhrajitghosh@gmail.com'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>contact.abhrajitghosh@gmail.com</h5>
                        <a href='mailto:contact.abhrajitghosh@gmail.com'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea type='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                    {/* <iframe title='maps'
                        width="600"
                        height="450"

                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
                    </iframe> */}

                </form>
            </div>



        </section>
    )
}

export default Contact