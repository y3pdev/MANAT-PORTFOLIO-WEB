import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>กรมท่าอากาศยาน</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.figma.com/file/OBlOancMnJsB4k09WtvZd6/%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%B2%E0%B8%99-website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>UTC-E-Learning</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.figma.com/file/r4UR2zPcPDp7k0BiAVaImr/UTC-E-Learning" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>E-Learning-MNRE</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.figma.com/file/yDpuZkVERz9JDByKm1TB8G/E-Learning-MNRE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio