import React from 'react'
import './StartInvestmentPage.css'
import viewarrow  from '../../assets/view-arrow.svg'

export const StartInvestmentPage = () => {
    return(
        <div className='start-investment-page'>
            <div className="header">
                <h2>
                    start your<br/> investment journey
                </h2>
                <a href="">
                    <p>
                        Create An Account
                    </p>
                    <img src={viewarrow} alt="" />
                </a>
            </div>
        </div>
    )
}