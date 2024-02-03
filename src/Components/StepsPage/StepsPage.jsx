import stepshouse from '../../assets/steps-page-image.png'
import './StepsPage.css'

export const StepsPage = () => {
    return(
        <div className="steps-page">
            <div className="steps-div1">
                <div className="header">
                    <h2>HOW IT WORKS</h2>
                    <p>
                        We carefully select projects and co-invest
                        with you<br/> because our success is based on your 
                        success in the<br/> first place.
                    </p>
                </div>
                <img src={stepshouse} alt="" />
            </div>
            <div className="steps-div2">
                <span className="step step1">
                    <p>/01</p>
                    <h3>Register</h3>
                    <p>
                        Create a new account, get verified
                        and gain access<br/> to the full platform’s
                        capabilities.
                    </p>
                </span>

                <span className="step step2">
                    <p>/02</p>
                    <h3>Invest or Fundraise</h3>
                    <p>
                    Invest in top-tier commercial real 
                    estate deals or<br/> pitch your fundraising
                     project
                    </p>
                </span>

                <span className="step step3">
                    <p>/03</p>
                    <h3>Reward</h3>
                    <p>
                        Make stable investment returns or 
                        fund the project<br/> with alternative 
                        financing.
                    </p>
                </span>
            </div>
        </div>
    )
}