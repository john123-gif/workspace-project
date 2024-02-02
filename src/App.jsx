import { Navbar } from './Components/Navbar/Navbar'
import { WelcomePage } from './Components/WelcomePage/WelcomePage'
import { PortfolioPage } from './Components/PortfolioPage/PortfolioPage'
import { AboutPage } from './Components/AboutPage/AboutPage'
import { StepsPage } from './Components/StepsPage/StepsPage'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <WelcomePage />
      <PortfolioPage />
      <AboutPage />
      <StepsPage />
    </div>
  )
}

export default App
