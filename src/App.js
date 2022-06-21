import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Events from './Component/Events'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
