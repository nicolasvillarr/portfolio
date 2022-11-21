import React from 'react'
import "../styles/Title/Title.css"
// import Typed from "react-typed"
// import { useSpring, animated } from '@react-spring/web'
// import { useDrag } from '@use-gesture/react'
import perfil from "../pics/perfil.jpg"
export default function Title() {
// const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

// const bind = useDrag(({ down, movement: [mx, my] }) => {
//   api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
// });

  return (
  <div className='title'>
      <div className='nameImg'>
        <img className='photo' src={perfil} alt=''/>
        {/* <animated.div {...bind()} style={{ x, y }}> <h1 className='name'>‎ Nicolas Villar 🚀</h1></animated.div> */}
      </div>
        {/* <h3><Typed
          className='typed'
          strings={["Full Stack","", ""]}
          typeSpeed={130}
          backSpeed={130}
          loop/></h3> */}
  </div>
  )
}
