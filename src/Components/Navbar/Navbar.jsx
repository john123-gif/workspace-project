import navArrow from '../../assets/arrow-image.png';
import './Navbar.css'

export const Navbar = () => {

    return(
        <nav className="navigation-bar">
            <img src={navArrow} alt="" className="nav-arrow"/>
           <span className="list-btn-span">
            <ul className="nav-list">
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Properties</li>
                    </a>
                    <a href="">
                        <li>How it works</li>
                    </a>
                </ul>
                <button className="register-btn">
                    Login/Register
                </button>
           </span>
        </nav>
    )
}