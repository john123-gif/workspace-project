import React from "react"
import viewarrow from '../../assets/view-arrow.svg'
import './AboutPage.css'

export const AboutPage = () => {
    return (
        <div className="about-page">
           <div className="header">
                <h2>about our <br/>investment firm</h2>
                <p>
                    With over 50 years of real estate finance, 
                    private equity, and<br/> investment management experience,
                    our team raised capital for<br/> projects with the deal 
                    size of $40M, $75M, and $100M+ in<br/> 2014-2021.
                </p>
                <a href="">
                    <p className="view-link">More About Us</p>
                    <img src={viewarrow} alt="" />
                </a>
           </div>
        </div>
    )
} 