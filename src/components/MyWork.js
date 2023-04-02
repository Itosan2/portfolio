import React from 'react'
import Pic01 from '../img/portfolio-01.jpg'
import Pic02 from '../img/portfolio-02.jpg'
import Pic03 from '../img/portfolio-03.jpg'
import Pic04 from '../img/portfolio-04.jpg'
import Pic05 from '../img/portfolio-05.jpg'
import Pic06 from '../img/portfolio-06.jpg'

export default function MyWork(){
    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio">
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src={Pic01} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={Pic02} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={Pic03} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={Pic04} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={Pic05} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={Pic06} alt="" className="portfolio__img"/>
                </a>
                
                
                
            </div>
    </section>
    )
}