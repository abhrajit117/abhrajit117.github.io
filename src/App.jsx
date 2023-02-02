import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
// import Footerslides from './components/footerslides/Footerslides'
import Footer from './components/footer/Footer'
// import Slider from './components/slider/Slider'
import { useState, useEffect } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import './loader.css'
const App = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <>
            {
                loading ?
                    <ClimbingBoxLoader className='pac' size={15} color={"#0197F6"} loading={loading} />
                    :

                    <> <Header />
                        {/* <Footerslides /> */}
                        <Nav />
                        {/* <Slider /> */}
                        <About />
                        <Experience />
                        <Services />
                        <Portfolio />
                        <Testimonials />
                        <Contact />
                        <Footer />
                    </>
            }
        </>
    )
}

export default App