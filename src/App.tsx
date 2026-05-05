import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SpotlightCursor from './components/ui/SpotlightCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Awards from './sections/Awards'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-base relative">
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
