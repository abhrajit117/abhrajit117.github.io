// import { useRef, useState } from "react"
import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./footerslides.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const Footerslides = () => {
    return (
        <Swiper
            style={{

                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
        >
            <div
                slot="container-start"
                className="parallax-bg"
                style={{

                    "background-image":
                        "linear-gradient(rgb(12, 12, 12), rgba(22, 22, 22, 0.158)),url(https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=)",
                }}
                data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 1
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 2
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 3
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Footerslides





