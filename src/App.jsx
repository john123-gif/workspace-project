import { Navbar } from './Components/Navbar/Navbar'
import { WelcomePage } from './Components/WelcomePage/WelcomePage'
import { PortfolioPage } from './Components/PortfolioPage/PortfolioPage'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <WelcomePage />
      <PortfolioPage />
    </div>
  )
}

export default App
