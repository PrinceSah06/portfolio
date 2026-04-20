import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Scene from './components/three/Scene'

function App() {
  return (
    <div className="relative w-full bg-slate-950 min-h-screen text-slate-50 font-sans">
      <Navbar />

      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0 h-full w-full opacity-60 pointer-events-none">
        <Scene />
      </div>

      {/* Scrollable Content */}
      <main className="relative z-10 flex flex-col w-full scroll-smooth pt-14 md:pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
