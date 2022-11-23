import React from 'react'
import "../styles/Title/Title.css"
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import perfil from "../pics/perfil.jpg"
export default function Title() {
const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

const bind = useDrag(({ down, movement: [mx, my] }) => {
  api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
});

  return (
  <div className='title'>
      <div className='nameImg'>
        <img className='photo' src={perfil} alt=''/>
        <animated.div {...bind()} style={{ x, y }}> <h1 className='name'>‎ Nicolas Villar 🚀</h1></animated.div>
      </div>
  <h1 className='fullStack'> 
    <p className="glitch" data-text="full stack developer">full stack developer</p>
  </h1>

  </div>
  )
}
