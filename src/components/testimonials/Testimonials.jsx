import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






const data = [{
    avatar: Avt1,
    name: 'Abhrajit Ghosh',
    review: 'lorem ipsum bla bla bla many things just a dumm text and nothing more than that .it is just for a text will be removed after the test case passes'
},
{
    avatar: Avt1,
    name: 'Abhrajit Ghosh',
    review: "lorem ipsum bla bla bla many things just a dumm text and nothing more than that .it is just for a text will be removed after the test case passes"
},
{
    avatar: Avt1,
    name: 'Abhrajit Ghosh',
    review: "lorem ipsum bla bla bla many things just a dumm text and nothing more than that .it is just for a text will be removed after the test case passes"
},
{
    avatar: Avt1,
    name: 'Abhrajit Ghosh',
    review: "lorem ipsum bla bla bla many things just a dumm text and nothing more than that .it is just for a text will be removed after the test case passes"
}


]





const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className='lowmar'></div>
            <h5>Here are some of my</h5>
            <h2>Awesome Projects</h2>
            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonials'>
                                <div className='client__avatar'>
                                    <image src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <div className='lowmar'></div>
        </section>
    )
}

export default Testimonials