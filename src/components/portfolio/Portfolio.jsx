import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/spotify.PNG'
import IMG4 from '../../assets/piano.PNG'
import IMG5 from '../../assets/tictactoe.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Its just a demo',
        github: 'https://github.com',
        demo: 'https://facebook.com'
    },
    {
        id: 1,
        image: IMG2,
        title: 'Its just a demo',
        github: 'https://github.com',
        demo: 'https://facebook.com'
    },
    {
        id: 1,
        image: IMG3,
        title: 'Spotify Clone',
        github: 'https://github.com/abhrajit117/spotify',
        demo: 'https://abhrajit.engineer/spotify/'
    },
    {
        id: 1,
        image: IMG4,
        title: 'Hi-Piano',
        github: 'https://github.com/abhrajit117/Hi-Piano',
        demo: 'https://abhrajit.engineer/Hi-Piano/'
    },
    {
        id: 1,
        image: IMG5,
        title: 'Impossible Tic-Tac-Toe',
        github: 'https://github.com/abhrajit117/tictactoe',
        demo: 'https://abhrajit.engineer/tictactoe/'
    },
    {
        id: 1,
        image: IMG6,
        title: 'Its just a demo',
        github: 'https://github.com',
        demo: 'https://facebook.com'
    }




]



const Portfolio = () => {
    return (
        <section>
            <h5>My recent work</h5>
            <h2>portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({ id, image, title, github, demo }) => {

                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">github</a>
                                    <a href={demo} className='btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }




            </div>
        </section>
    )
}

export default Portfolio