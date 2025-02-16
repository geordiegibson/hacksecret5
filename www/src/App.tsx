import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinCreation from './pages/CoinCreation'
import Marketing from './pages/Marketing'
import Landing from './pages/Landing'
import Collection from './pages/Collection'

function App() {

  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='flex w-[calc(100vw-300px)] flex-col'>
            <Router>
                    <Routes>
                        <Route path="/" element={<Landing />}/>
                        <Route path="/create" element={<CoinCreation />}/>
                        <Route path="/marketing" element={<Marketing />}/>
                        <Route path="/collection" element={<Collection />}/>
                        <Route path="*" element={<CoinCreation />}/>
                    </Routes>
                </Router>  
          </div>
      </div>
    </>
  )
}

export default App
