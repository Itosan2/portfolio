import React from 'react'


export default function Footer(){
    return(
        <footer>
            <a href="mailto:e2choong22@gmail.com" className="footer__link">
                hello@devCHOong.com
            </a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="" className="social-list__link">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>

    )
}