import viewarrow from '../../assets/view-arrow.svg'
import handshake from '../../assets/handshake.png'
import certify from '../../assets/certify.png'
import dollarhouse from '../../assets/dollarhouse.png'
import './InvestPage.css'

export const InvestPage = () => {
    return (
        <div className="invest-page">
            <div className="header">
                <span className='inner-span'>
                    <h2>why invest<br/>with us</h2>
                    <p>
                        Our crowdfunding platform has conducted
                        hundreds of deals<br/> and repaid thousands 
                        of investors.
                    </p>
                </span>
                <a href="" className='view-link'>
                        Create An Account
                        <img src={viewarrow} alt=""
                        className='view-arrow'/>
                </a>
            </div>
            <div className="reasons">
                <div className="reason">
                    <span className="header">
                        <h4>Trusted Platform</h4>
                        <p>
                            We’ve been on the market<br/> for over a decade
                            and always<br/> showed high performance.
                        </p>
                    </span>
                    <img src={handshake} alt="" />
                </div>
                <div className="reason">
                    <span className="header">
                            <h4>Expert Team</h4>
                            <p>
                            Our team has decades of<br/> experience in due
                             diligence,<br/> capital raising and investing.
                            </p>
                    </span>
                    <img src={certify} alt="" />
                </div>
                <div className="reason">
                    <span className="header">
                            <h4>Secondary Market</h4>
                            <p>
                            You can exit anytime. Our<br/> platform is 
                            equipped with a<br/> secondary market to 
                            improve<br/> liquidity.
                            </p>
                    </span>
                    <img src={dollarhouse} alt="" />
                </div>
            </div>
        </div>
    )
}