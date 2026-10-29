import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import About from './sections/About'
import Experience from './sections/Experience'
import Awards from './sections/Awards'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
