import React from 'react'
import introPic from '../img/devjane3.png'

export default function Intro(){
    return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong> YT Choong</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img className="intro__img" src={introPic} alt="a picture of YT smiling"/>   
    </section>

    )

}