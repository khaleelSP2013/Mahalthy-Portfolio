import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import PocProjects from './components/PocProjects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="blueprint-bg" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <PocProjects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  )
}
