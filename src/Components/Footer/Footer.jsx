import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="explore v-rect">
                <p className="footer-header">Explore</p>
                <a href="">
                    <p>Home</p>
                </a>
                <a href="">
                    <p>About</p>
                </a>
                <a href="">
                    <p>Contact</p>
                </a>
                <a href="">
                    <p>FAQ</p>
                </a>

            </div>
            <div className="legal v-rect">
            <p className="footer-header">Legal</p>
            <a href="">
                <p>Terms</p>
            </a>
            <a href="">
                <p>Privacy</p>
            </a>
            <a href="">
                <p>Investment</p>
            </a>
            <a href="">
                <p>Platform</p>
            </a>
            </div>

            <div className="offices h-rect">
            <p className="footer-header">Offices</p>
            <p>
                760 United Nations<br/> Plaza,Manhattan, 
                New<br/> York (10017-6818)United<br/>
                States
            </p>
            </div>

            <div className="connect h-rect">
            <p className="footer-header">Connect</p>
            <p>
                www.un.org<br/>google@gmail.com<br/>
                 <span className="number">+0 123 456 78 90</span>
            </p>
            </div>
        </div>
    )
}