import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Sidebar from './Components/Sidebar'
function App() {
  // style={{ backgroundImage: `url(${bgImage})` }}
  return (
    <div className='' >
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
