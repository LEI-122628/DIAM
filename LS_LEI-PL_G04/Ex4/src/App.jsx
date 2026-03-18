import Header from './components/Header'
import NavBar from './components/NavBar'
import Slideshow from './components/Slideshow'
import Countdown from './components/Countdown'
import About from './components/About'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Slideshow />
      <Countdown />
      <Gallery />
      <div className="content-wrapper">
        <About />
        <Timeline />
      </div>
      <Footer />
    </>
  )
}

export default App