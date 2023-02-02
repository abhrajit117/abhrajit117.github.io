
// import React from "react";
// // import ReactDOM from "react-dom";

// // eslint-disable-next-line
// import "swiper/css/bundle";
// import "./slider.css";
// // import  { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/effect-cards";
// // import required modules
// import { EffectCards } from "swiper";




// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


// const data = [
//     {
//         id: 1,
//         image: IMG1,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     },
//     {
//         id: 1,
//         image: IMG2,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     },
//     {
//         id: 1,
//         image: IMG3,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     },
//     {
//         id: 1,
//         image: IMG4,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     },
//     {
//         id: 1,
//         image: IMG5,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     },
//     {
//         id: 1,
//         image: IMG6,
//         title: 'Its just a demo',
//         github: 'https://github.com',
//         demo: 'https://facebook.com'
//     }
// ]




// const Slider = () => {
//     return (
//         <Swiper
//             effect={"cards"}
//             grabCursor={true}
//             modules={[EffectCards]}
//             className="mySwiper"
//         >
//             {
//                 data.map(({ id, image, title, github, demo }) => {

//                     return (<SwiperSlide>
//                         <article key={id} className='portfolio__item'>
//                             <div className='portfolio__item-image'>
//                                 <img src={image} alt={title} />
//                             </div>
//                             <h3>{title}</h3>
//                             <div className='portfolio__item-cta'>
//                                 <a href={github} className='btn' target='_blank' rel="noreferrer">github</a>
//                                 <a href={demo} className='btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
//                             </div>
//                         </article>
//                     </SwiperSlide>
//                     )
//                 })
//             }
//             {/* <SwiperSlide>Slide 2</SwiperSlide>
//             <SwiperSlide>Slide 3</SwiperSlide>
//             <SwiperSlide>Slide 4</SwiperSlide>
//             <SwiperSlide>Slide 5</SwiperSlide>
//             <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide> */}
//         </Swiper>
//     )
// }

// export default Slider