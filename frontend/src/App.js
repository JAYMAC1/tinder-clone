// React related packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Custom pages and components
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/onboarding' element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
