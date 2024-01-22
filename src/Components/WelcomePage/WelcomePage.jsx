import viewarrow from '../../assets/view-arrow.svg'
import '../WelcomePage/WelcomePage.css'

export const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <span className='header-paragraph-span'>
                <h1>build wealth with<br/> real estate crowd funding</h1>
                <p>
                    Get access to high-quality commercial real estate 
                    deals<br/> whether you’re a retail or institutional 
                    investor
                </p>
                <a href="" className='view-link'>
                    View Properties
                    <img src={viewarrow} alt=""
                     className='view-arrow'/>
                </a>
            </span>
        </div>
    )
}