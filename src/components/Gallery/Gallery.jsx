import React from 'react'
import './Gallery.css'
import PhotoAlbum from "react-photo-album";
import photo1 from '../../assets/photos/1.jpg'
import photo2 from '../../assets/photos/2.jpg'
import photo3 from '../../assets/photos/3.jpg'
import photo4 from '../../assets/photos/4.jpg'
import photo5 from '../../assets/photos/5.jpg'
import photo6 from '../../assets/photos/6.jpg'
import photo7 from '../../assets/photos/7.jpg'
import photo8 from '../../assets/photos/8.jpg'
import photo9 from '../../assets/photos/9.jpg'
import photo10 from '../../assets/photos/10.jpg'
import photo11 from '../../assets/photos/11.jpg'
import photo12 from '../../assets/photos/12.jpg'
const photos = [
    { src: photo1, width: 800, height: 600 },
    { src: photo2, width: 800, height: 600 },
    { src: photo3, width: 800, height: 600 },
    { src: photo4, width: 800, height: 600 },
    { src: photo5, width: 800, height: 600 },
    { src: photo6, width: 800, height: 600 },
    { src: photo7, width: 600, height: 800 },
    { src: photo8, width: 800, height: 600 },// { src: "./photos/2.jpg", width: 1600, height: 900 },
    { src: photo9, width: 600, height: 800 },
    { src: photo10, width: 800, height: 600 },
    { src: photo11, width: 600, height: 800 },
    { src: photo12, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
    // { src: photo1, width: 800, height: 600 },
];
const Gallery = () => {
    return (
        <div className='abox'>
            <div className='middle'><h2>Gallery</h2></div>
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    )
}

export default Gallery