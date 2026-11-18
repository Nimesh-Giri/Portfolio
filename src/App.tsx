
import Navbar from './components/Navbar'
import Hero from './sections/NIMESH'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Learning from './sections/Learning'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 sm:px-10 lg:px-16">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Learning />
      <Contact />

      <Footer />
    </main>
  )
}

export default App
