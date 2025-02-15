import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinCreation from './pages/CoinCreation'
import Marketing from './pages/Marketing'

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<CoinCreation />}/>
                <Route path="/marketing" element={<Marketing />}/>
                <Route path="*" element={<CoinCreation />}/>
            </Routes>
        </Router>      
    </>
  )
}

export default App
