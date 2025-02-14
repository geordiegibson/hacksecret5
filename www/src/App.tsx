import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CoinCreation from './pages/CoinCreation'

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<CoinCreation />}/>
              <Route path="*" element={<CoinCreation />}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
