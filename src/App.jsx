import { Navbar } from './Components/Navbar/Navbar'
import { WelcomePage } from './Components/WelcomePage/WelcomePage'
import { PortfolioPage } from './Components/PortfolioPage/PortfolioPage'
import { AboutPage } from './Components/AboutPage/AboutPage'
import { StepsPage } from './Components/StepsPage/StepsPage'
import './App.css'
import { PartnersPage } from './Components/PartnersPage/PartnersPage'
import { InvestPage } from './Components/InvestPage/InvestPage'
import { StartInvestmentPage } from './Components/StartInvestmentPage/StartInvestmentPage'
import { Footer } from './Components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <WelcomePage />
      <PortfolioPage />
      <AboutPage />
      <StepsPage />
      <PartnersPage />
      <InvestPage />
      <StartInvestmentPage />
      <Footer />
    </div>
  )
}

export default App
