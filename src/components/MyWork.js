import React from 'react'
import Pic01 from '../img/abnb-clone.png'
import Pic01a from '../img/morning-pg.png'
import Pic02 from '../img/todolist1.png'
import Pic03 from '../img/tictactoe.png'
import Pic04 from '../img/social.png'
import Pic05 from '../img/portfolio-05.jpg'
import Pic06 from '../img/portfolio-06.jpg'
import tenzies from '../img/tenzies.png'

export default function MyWork(){
    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio">
                
                <a href="https://itosan2.github.io/tenzies/" className="portfolio__item" target='_blank'>
                    <img src={tenzies} alt="" className="portfolio__img"/>
                </a>

                <a href="https://itosan2.github.io/abnb-tut/" className="portfolio__item" target='_blank'>
                    <img src={Pic01} alt="" className="portfolio__img"/>
                </a>

                <a href="https://itosan2.github.io/morning/" className="portfolio__item" target='_blank'>
                    <img src={Pic01a} alt="" className="portfolio__img"/>
                </a>
                
                <a href="https://itosan2.github.io/todolist1/" className="portfolio__item" target='_blank'>
                    <img src={Pic02} alt="" className="portfolio__img"/>
                </a>
                
                <a href="https://itosan2.github.io/tictactoe/" className="portfolio__item" target='_blank'>
                    <img src={Pic03} alt="" className="portfolio__img"/>
                </a>
                
                <a href="https://itosan2.github.io/social-accordian/" className="portfolio__item" target='_blank'>
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