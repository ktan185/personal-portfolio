import React, { useRef, useState, useEffect } from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import useScroll from './scroll'
import Projects from './components/Projects/Projects'

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const lastScrollY = useRef(0)
  const currentScrollY = useScroll()
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    // Show navigation bar based if you scroll up.
    setShowNav(currentScrollY < lastScrollY.current)
    lastScrollY.current = currentScrollY
  }, [currentScrollY])

  return (
    <>
      <Nav
        showNav={showNav}
        home={home}
        about={about}
        projects={projects}
        contact={contact}
      />
      <Home home={home} />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </>
  )
}

export default App
