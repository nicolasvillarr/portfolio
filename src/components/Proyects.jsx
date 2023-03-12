
//   import React from 'react';
//   import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//   import { Carousel } from 'react-responsive-carousel';
//   import '../styles/Proyects/Proyects.css';
  import pi from "../pics/pi.png"
  import pf from "../pics/pf.png"
  import clima from "../pics/appClima.png"
// export default function Proyects() { 
//   let github =       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
//   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
// </svg>
// return (
// <div  className='margen'>

// <div className='contProyect'>
//   <h1 className='titleCarousel'>PROYECTOS</h1>  
//   <Carousel className='carousel' width={"50%"} showStatus={false} showThumbs={false} infiniteLoop={true} >
//     <>
//     <div>
//     </div>
//       <img src={pi} width={"500px"} height={"500px"} alt=""/>
//       <h1 onClick={() => window.open("https://github.com/nicolasvillarr/Proyecto-individual-Country/", '_blank' )} className="viewProyects">VER PROYECTO {github}</h1>
//     </>
//     <>

//       <img src={pf} width={"500"} height={"500px"} alt=""/>
//       <h1 onClick={() => window.open("https://github.com/SerCM/not-waste_PF-HENRY", '_blank' )} className="viewProyects">VER PROYECTO {github}</h1>
//     </>
//     <>

//       <img src={clima} width={"500"} height={"500px"} alt=""/>
//       <h1 onClick={() => window.open("https://github.com/nicolasvillarr/app-clima", '_blank' )} className="viewProyects">VER PROYECTO {github}</h1>
//     </>
//   </Carousel>
// </div>
// </div>
// )
//   }

import React from 'react'; 
import '../styles/Proyects/Proyects.css';
export default function Proyects(){
  
  const hw = "230px"
  let github =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
  return(
    <div className='margen'> 
        <h1 className='titleCarousel'>PROYECTOS</h1>
    <div className="responsive">
      <div className=' contProyect'>
        <div className="box">

          <h3>Country APP</h3>
          <img className="icon" src={pi} width={hw} height={hw} alt=""/>
          <p className="parrafo">Una Single Page Application, en la cual se pueden ver los paises que trae de una API de paises</p>
     <h6 onClick={() => window.open("https://github.com/nicolasvillarr/Proyecto-individual-Country", '_blank' )} className="viewProyects">VER PROYECTO {github}</h6>

        </div>
        
          <div className="box">
            <h3>Not Waste</h3>
            <img className="icon" src={pf} width={hw} height={hw} alt=""/>
            <p className="parrafo">E-commerce orientado  a la compra venta de productos alimenticios a un precio reducido</p>
       <h6 onClick={() => window.open("https://github.com/SerCM/not-waste_PF-HENRY", '_blank' )} className="viewProyects">VER PROYECTO {github}</h6>
          </div>
          <div className="box">
            <h3>App del Clima</h3>
            <img className="icon" src={clima} width={hw} height={hw} alt=""/>
            <p className="parrafo">Aplicación web para ver el clima de cualquier parte del mundo unando un API de clima</p>
       <h6 onClick={() => window.open("https://github.com/nicolasvillarr/app-clima", '_blank' )} className="viewProyects">VER PROYECTO {github}</h6>
          </div>
          
      </div>
      </div>
    </div>
  )
}
