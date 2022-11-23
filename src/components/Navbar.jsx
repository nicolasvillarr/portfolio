import React from 'react'
import '../styles/Navbar/Navbar.css'

export default function NavBar() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 50,
      behavior: "smooth",
    })
  };
  
  return (
  <div className='topNav'>
    <nav id="Inicio" className='navbar'>
        <ul className='ul'>
          <li href="#Inicio" onClick={handleClick} className='list'>INICIO</li>
          <li href="#About" onClick={handleClick} className='list'>SOBRE MÍ</li>
          <li href="#Proyects" onClick={handleClick} className='list'>PROYECTOS</li>
          <li href="#Skills" onClick={handleClick} className='list'>SKILLS</li>
          <li href="#Contact" onClick={handleClick} className='list'>CONTACTO</li>
        </ul>
    </nav>
  </div>
  )
}
