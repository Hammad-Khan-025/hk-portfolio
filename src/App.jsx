import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import bgImage from './images/bg-hero.PNG';
import Sidebar from './Components/Sidebar'
import Javascript from './Components/Javascript'
import HtmlCss from './Components/HtmlCss'
import ReactJs from './Components/ReactJs'

function App() {
  // style={{ backgroundImage: `url(${bgImage})` }}
  return (
    <div className='' >
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/portfolio/react" element={<ReactJs />} />
        <Route path="/portfolio/javascript" element={<Javascript />} />
        <Route path="/portfolio/htmlcss" element={<HtmlCss />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
