import React from 'react'


export default function Header(){
    const [toggle, setToggle]=React.useState(true)

    function btnToggle(){
        
        if (toggle) {
            document.body.classList.toggle('nav-open')
        } else {
            document.body.classList.remove('nav-open')
        }  
        setToggle(!toggle)
    }   

    return (
    <div className='headerContainer'>
        <div className="logo">
            <div>dev<strong className="logo__text">CHO</strong>ong<sub>.2</sub></div>
        </div> 
           
        <button className="nav-toggle" arial-label="toggle navigation" onClick={btnToggle}>
            <span className="hamburger"></span>
        </button>

        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link" onClick={btnToggle}>Home</a></li>
                <li className="nav__item"><a href="#services" className="nav__link" onClick={btnToggle}>My Sevices</a></li>
                <li className="nav__item"><a href="#about" className="nav__link" onClick={btnToggle}>About Me</a></li>
                <li className="nav__item"><a href="#work" className="nav__link" onClick={btnToggle}>My Work</a></li>
            </ul>
        </nav>
    </div>    
    )

}