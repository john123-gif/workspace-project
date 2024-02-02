import React from "react";
import './PartnersPage.css'
import peer2peer from '../../assets/peer2peer.png'
import ultimatefinance from '../../assets/ultimate-finance.png'
import wave from '../../assets/wave.png'
import finanacialtimes from '../../assets/financial-time.png'
import fca from '../../assets/fca.png'

export const PartnersPage = () => {
    return (
        <div className="partners-page">
            <div className="header">
                <h3>Our Partners</h3>
                <p>
                A brand is not what you tell people it is. 
                A brand is what<br/> people tell other people it is.
                </p>
            </div>
            <div className="partners">
                <img src={peer2peer} alt="" />
                <img src={ultimatefinance} alt="" />
                <img src={wave} alt="" />
                <img src={finanacialtimes} alt="" />
                <img src={fca} alt="" />
            </div>
        </div>
    )
}