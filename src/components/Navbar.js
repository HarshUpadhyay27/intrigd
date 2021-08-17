import React, { useState } from 'react'
import img from '../image/logo.png'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    const schrollScreen =()=>{
        if(window.scrollY >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    window.addEventListener('scroll', schrollScreen)

    return (
        <nav className={scroll ? "active" : ""} >
            <div className="navbar">
                <div className="nav-left">
                    <img src={img} alt="..." />
                </div>
                <div className="nav-right" >
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>FEATUTRE</li>
                        <li>SCREENSHOT</li>
                        <li>TESTIMONIAL</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
