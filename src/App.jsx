import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Feedback,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'
import Feedbacks from './components/Feedbacks'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
