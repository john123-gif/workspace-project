import viewarrow from '../../assets/view-arrow.svg'
import portfolio1 from '../../assets/Downton Abbey.png'
import portfolio2 from '../../assets/charity villa.png'
import portfolio3 from '../../assets/downton abbey2.png'
import './PortfolioPage.css'

export const PortfolioPage = () => {
    return (
        <div className='portfolio-page'>
            <div className="header">
                <span className='inner-span'>
                    <h2>explore our <br/> portfolio</h2>
                    <p>Open real estate deals that you can invest in</p>
                </span>
                <a href="" className='view-link'>
                    Browse all opportunities
                    <img src={viewarrow} alt=""
                     className='view-arrow'/>
                </a>
            </div>

            <div className="portfolios">
                <div className="portfolio">
                    <img src={portfolio1} alt="" />
                   <span>
                        <h4>Downton Abbey</h4>
                        <img src={viewarrow} alt="" />
                        <p><b>Funding Goal:</b> 3,500,000 GBP</p>
                   </span>
                </div>

                <div className="portfolio">
                    <img src={portfolio2} alt="" />
                    <span>
                        <h4>Charity Villa</h4>
                        <img src={viewarrow} alt="" />
                        <p><b>Funding Goal:</b> 3,500,000 GBP</p>
                    </span>
                </div>

                <div className="portfolio">
                    <img src={portfolio3} alt="" />
                    <span>
                        <h4>Downton Abbey</h4>
                        <img src={viewarrow} alt="" />
                        <p><b>Funding Goal:</b> 3,500,000 GBP</p>
                    </span>
                </div>
            </div>
        </div>
    )
}